import { Router } from 'express'
import { createCancellation, getCancellations, getCancellationById, updateCancellationById, deleteCancellationById } from '../controllers/cancellation.controller'
import validateToken from './validate.routes'
const router = Router();


//Create cancellation - Crear cancelaciones
router.post('/',validateToken, createCancellation)

//Get all cancellations - Obtener todos las cancelaciones
router.get('/', getCancellations)

//Get cancellation by id - obtener la cancelació por id
router.get('/:cancellation_id', getCancellationById)

//Update cancellation by id - Actualizar cancelació por id
router.put('/:cancellation_id', updateCancellationById)

//Delete cancellation by id - Eliminar cancelació por id
router.delete('/:cancellation_id',validateToken, deleteCancellationById)

export default router;