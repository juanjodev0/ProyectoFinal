import { Request, Response } from 'express'
import Reservation from '../models/reservation'

//Create the reservation in the database - Creamos la reserva en la bd
export const createReservation = async(req: Request, res: Response) => {
    const { user_id, field_id, date, start_time, end_time } = req.body;

    try {
        //We save reservation in the database - guardamos reservación en la base de datos
        await Reservation.create({
            user_id,
            field_id,
            date,
            start_time,
            end_time
        })
    
        res.json({
            msg: `Reservation created`
        })
    } catch (error) {
        res.status(400).json({
            msg: `Ups an error occurred`
        })
    }
}

//Obtain all the reservations - Obtener todas las reservaciones
export const getReservations = async(req: Request, res: Response) => {
    try {
        const listReservations = await Reservation.findAll();
        res.json(listReservations)
    } catch (error) {
        res.json({
            msg: error
        })
    }
}

//We obtain reservation for the id - Obtenemos reservación por el id
export const getReservationById = async(req: Request, res: Response) => {
    try {
        const { reservation_id } = req.params
        const reservation = await Reservation.findByPk( reservation_id )

        if(reservation){
            res.send(reservation)
        }else {
            res.status(404).json({
                msg: `Reservation ${ reservation_id } Not found`
            })
        }
    } catch (error) {
        return res.status(500).json({
            msg: `Internal Server Error`
        })
    }
}

//Update all the data of the reservation - Actualizar todos los datos de la reservación
export const updateReservationById = async(req: Request, res: Response) => {
    const { reservation_id } = req.params
    const { body } = req
    try {
        const reservationUpdate = await Reservation.findByPk( reservation_id );
        if (!reservationUpdate){
            return res.status(404).json({
                msg: `there is no reservation with the id ${ reservation_id }`
            })
        }

        await reservationUpdate.update( body )
        res.json(reservationUpdate)

    } catch (error) {
        res.status(404).json({
            msg: 'ups could not update the reservation'
        })
    }
}

//Delete the reservation - Eliminar la reserva
export const deleteReservationById = async(req: Request, res: Response) => {
    try {
        const { reservation_id } = req.params
        await Reservation.destroy({
            where: {
                reservation_id
            }
        })
        res.status(200).json({
            msg: `Reservation ${ reservation_id } delete OK`
        })
        } catch (error) {
        res.status(404).json({
            message:`ups could not delete reservation`
        })
    }
}