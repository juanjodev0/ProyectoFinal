// import { pool } from '../db.js'
import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import User from '../models/user';



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






//We obtain all users - Obtenemos todos los usuarios
export const getUsers = async(req: Request, res: Response) => {
    const users = await User.findAll();
    res.json(users)
}


//We get 1 user for your id - Obtenemos 1 usuario por su id
export const getUserById = async(req: Request, res: Response) => {
    const { user_id } = req.params
    const user = await User.findByPk( user_id )

    if(user){
        res.send(user)
    }else {
        res.status(404).json({
            msg: `User ${ user_id } Not found`
        })
    }
    
}

export const updateUserById = (req: Request, res: Response) => {
    res.send('put success')
}

export const deleteUser = async (req: Request, res: Response) => {
    
}