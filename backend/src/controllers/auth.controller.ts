import { Request, Response, NextFunction } from 'express'
import bcrypt from 'bcrypt'
import User from '../models/user';
import jwt from 'jsonwebtoken'


//Register
//Create the user in the database - Creamos el usuario en la bd
export const createUser = async (req: Request, res: Response) => {

    try {
        const { username, password, email, phone, role } = req.body;

         //Validate if the user already exists in the database - Validamos si el usuario ya existe en la base de datos
        const userOne = await User.findOne({ where: { username: username }})
    
        if(userOne){
            return  res.status(400).json({
                msg: `There is already a user with the name ${username} `
            })
        }

        //Validate if the email already exists in the database - Validamos si el correo ya existe en la base de datos
        const mail = await User.findOne({ where: { email: email }})

        if(mail){
            return  res.status(400).json({
                msg: `There is already a email ${email} `
            })
        }

        //Password encripted
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            username,
            password: hashedPassword,
            email,
            phone,
            role
        });
        res.status(201).json({
            message: `User ${username} created with ${role} role`,
            user: user,
        });

    } catch (error) {
        res.status(400).json({ message: 'Error creating user'});
    }

}


//Login
export const loginUser = async(req: Request, res: Response) => {
    const { username, password } = req.body;

    //Validate if the user exists in the database - Validamos si el usuario existe en la base de datos
    const user: any = await User.findOne({ where: { username: username }});

    if(!user){
        return res.status(400).json({
            msg: `There is no user with the name ${ username }`
        })
    }

    //Validate password - Validamos password

    const passwordValid= await bcrypt.compare(password, user.password)

    if(!passwordValid){
        return res.status(400).json({
            msg: `Password wrong`
        })
    }

    //Generate token - Generamos token

    const token = jwt.sign({
        username: username
    },process.env.SECRET_KEY || 'pizza456');

    res.json(token)
}

//Admin

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
    // Supongamos que la información del usuario se almacena en un token JWT en el encabezado de autorización
    const token = req.headers.authorization?.split(' ')[1]; // Obtenemos el token JWT del encabezado de autorización
    
    if (token) {
        try {
            // Verificamos y decodificamos el token JWT para obtener la información del usuario
            const decodedToken = jwt.verify(token, 'secret_key') as { user: { role: string } };
            
            // Verificamos si el usuario tiene el rol de administrador
            if (decodedToken.user.role === 'admin') {
              // Si el usuario es administrador, pasa al siguiente middleware
                next();
                return;
            }
        } catch (error) {
            // Si hay un error al verificar el token JWT, devolvemos un código de estado 401 (No autorizado)
            return res.status(401).json({ message: 'Unauthorized. Invalid or expired token.' });
        }
    }
    
    // Si el token no está presente o el usuario no es un administrador, devolvemos un código de estado 403 (Forbidden)
    res.status(403).json({ message: 'Forbidden. Admin privileges are required.' });
};

