import { Router } from 'express'
import { createFeedback, getFeedbacks, getFeedbackById, updateFeedbackById, deleteFeedbackById } from '../controllers/feedback.controller'
import validateToken from './validate.routes'
const router = Router();


//Create feedback - Crear comentarios
router.post('/',validateToken, createFeedback)

//Get all feedback - Obtener todos los comentarios
router.get('/', getFeedbacks)

//Get feedback by id - obtener la cancha por id
router.get('/:feedback_id', getFeedbackById)

//Update fedback by id - Actualizar comentario por id
router.put('/:feedback_id',validateToken, updateFeedbackById)

//Delete feedback by id - Eliminar comentario por id
router.delete('/:feedback_id',validateToken, deleteFeedbackById)

export default router;