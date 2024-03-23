import { Router } from 'express'
import {  payMent}  from '../controllers/payment.controller'
// import validateToken from './validate.routes'
const router = Router();


//Create soccer fields - Crear canchas de futbol 
router.post('/', payMent)





export default router;