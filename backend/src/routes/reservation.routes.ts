import { Router } from 'express'
import { createReservation, getReservations, getReservationById, updateReservationById, deleteReservationById } from '../controllers/reservation.controller'
//import validateToken from './validate.routes'
const router = Router();

router.post('/', createReservation)
router.get('/', getReservations)
router.get('/:reservation_id', getReservationById)
router.put('/:reservation_id', updateReservationById)
router.delete('/:reservation_id', deleteReservationById)


export default router;