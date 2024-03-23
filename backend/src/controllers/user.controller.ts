// import { pool } from '../db.js'
import { Request, Response } from 'express'
import User from '../models/user';


//We obtain all users - Obtenemos todos los usuarios
export const getUsers = async(req: Request, res: Response) => {
    try {
        const users = await User.findAll();
        res.json(users)
    } catch (error) {
        res.status(404).json({
            msg: `User not found`
        })
    }
}


//We get 1 user for your id - Obtenemos 1 usuario por su id
export const getUserById = async(req: Request, res: Response) => {
    try {
        const { user_id } = req.params
        const user = await User.findByPk( user_id )
    
        if(user){
            res.send(user)
        }else {
            res.status(404).json({
                msg: `User ${ user_id } Not found`
            })
        }
    } catch (error) {
        res.json({
            msg: error
        })
    }
}

//Update all the data of the user - Actualizar todos los datos del usuario
export const updateUserById = async(req: Request, res: Response) => {
    const { user_id } = req.params
    const { body } = req
    try {
        const userUpdate = await User.findByPk( user_id );
        if (!userUpdate){
            return res.status(404).json({
                msg: `there is no user with the id ${user_id}`
            })
        }

        await userUpdate.update( body )
        res.json(userUpdate)

    } catch (error) {
        res.status(404).json({
            msg: 'ups could not update the user'
        })
    }
}

//Delete one user - Eliminar 1 usuario
export const deleteUser = async (req: Request, res: Response) => {
    try {
        const { user_id } = req.params
        await User.destroy({
            where: {
                user_id
            }
        })
        res.status(200).json({
            msg: `User ${ user_id } delete OK`
        })
        } catch (error) {
        res.status(404).json({
            message:`ups could not delete user`
        })
    }
}