import { Router } from 'express'
import {  deleteUser, getUsers,  getUserById, updateUserById} from '../controllers/user.controller'
import validateToken from './validate.routes';
import { isAdmin } from '../controllers/auth.controller';

const router = Router();



//Get all users - Obtener todos los usuarios
router.get('/',validateToken, isAdmin, getUsers)

//Get user by id - obtener el usuario por id
router.get('/:user_id',validateToken, isAdmin, getUserById)

//Update user by id - Actualizar el usuario por id
router.put('/:user_id',validateToken,isAdmin, updateUserById)

//Delete user by id - Eliminar el usuario por id
router.delete('/:user_id',validateToken, isAdmin, deleteUser)


export default router;