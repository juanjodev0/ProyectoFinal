import { Router } from 'express'
import { createUser, loginUser, deleteUser, getUsers,  getUserById, updateUserById} from '../controllers/user.controller'

const router = Router();

router.post('/', createUser)
router.post('/login', loginUser)

router.get('/', getUsers)

router.get('/:user_id', getUserById)

router.put('/:user_id', updateUserById)

router.delete('/:user_id', deleteUser)


export default router;