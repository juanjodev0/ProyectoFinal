import { Router } from 'express'
const router = Router();

import { loginUser, createUser }  from '../controllers/auth.controller'

//Create users - Crear usuarios
router.post('/', createUser)

//Loggin users - Loguear usuarios
router.post('/login', loginUser)


export default router;

