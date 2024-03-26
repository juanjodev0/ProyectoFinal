import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import User from '../models/user';
import jwt from 'jsonwebtoken'



//Register
//Create the user in the database - Creamos el usuario en la bd
export const createUser = async (req: Request, res: Response) => {
    const { username, password, email, phone } = req.body;

    //Validate if the user already exists in the database - Validamos si el usuario ya existe en la base de datos
    const user = await User.findOne({ where: { username: username }})

    if(user){
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
    
    
    try {
        //We save users in the database - guardamos usuarios en la base de datos
        await User.create({
            username,
            password: hashedPassword,
            email,
            phone
        })
    
        res.json({
            msg: `User ${username} created`
        })
    } catch (error) {
        res.status(400).json({
            msg: `Ups an error occurred`
        })
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
        user: user
    },process.env.SECRET_KEY || 'pizza456');

    res.json(token)
}
