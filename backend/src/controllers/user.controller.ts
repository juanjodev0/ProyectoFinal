// import { pool } from '../db.js'
import { Request, Response } from 'express'
// import bcrypt from 'bcrypt'
import User from '../models/user';



export const createUser = async (req: Request, res: Response) => {
    const { username, password, email, phone } = req.body;
    
    // //Password encripted
    // const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
        username, 
        password,
        email, 
        phone
    })

    // res.json({
    //     msg: `Usuario`
    // })

}

export const loginUser = (req: Request, res: Response) => {
    const { body } = req;

    res.json({
        message: "Login user",
        body
    })
}


//Obtenemos todos los usuarios
export const getUsers = async(req: Request, res: Response) => {
    const users = await User.findAll();
    res.json(users)
}


//Obtenemos 1 usuario por su id
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
    // const [] = await pool.query('DELETE FORM users WHERE id = ?', [req.params.user_id])
    // res.send('user delete')
}