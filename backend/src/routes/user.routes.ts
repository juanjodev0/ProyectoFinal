import { Router } from 'express'
import { createUser, deleteUser, getUsers,  getUserById, updateUserById} from '../controllers/user.controller'

const router = Router();

router.post('/', createUser)


router.get('/', getUsers)

router.get('/:user_id', getUserById)

router.put('/:user_id', updateUserById)

router.delete('/:user_id', deleteUser)


export default router;