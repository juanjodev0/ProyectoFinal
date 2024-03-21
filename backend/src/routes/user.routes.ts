import { Router } from 'express'
import {  deleteUser, getUsers,  getUserById, updateUserById} from '../controllers/user.controller'

const router = Router();



//Get all users - Obtener todos los usuarios
router.get('/', getUsers)

//Get user by id - obtener el usuario por id
router.get('/:user_id', getUserById)

//Update user by id - Actualizar el usuario por id
router.put('/:user_id', updateUserById)

//Delete user by id - Eliminar el usuario por id
router.delete('/:user_id', deleteUser)


export default router;