import { Router } from 'express'
const router = Router();

import { loginUser, createUser, isAdmin }  from '../controllers/auth.controller'

//Create users - Crear usuarios
router.post('/admin', createUser)


//Loggin users and admin - Loguear usuarios y administrador
router.post('/login', loginUser, isAdmin)


export default router;

