import { Router } from 'express'
import {createUser, deleteUserById, getUser,  getUserById, updateUserById} from '../controllers/user.controller.js'

const router = Router();

router.post('/', createUser)

router.get('/', getUser)

router.get('/:user_id', getUserById)

router.put('/:user_id', updateUserById)

router.delete('/:user_id', deleteUserById)


export default router;