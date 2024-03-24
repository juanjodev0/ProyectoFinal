import { Request, Response } from 'express'
import Cancellation  from '../models/cancellation'

//Create the cancellation in the database - Creamos la cancelación en la bd
export const createCancellation = async(req: Request, res: Response) => {

    const { reservation_id, user_id, reason, date } = req.body;

    try {
        //We save cancellation the database - guardamos la cancelación en la base de datos
        await Cancellation.create({
            reservation_id,
            user_id,
            reason,
            date
        })
    
        res.json({
            msg: `Cancellation success`
        })
    } catch (error) {
        res.status(400).json({
            msg: `Ups an error occurred`
        })
    }

}

//Obtain all the cancellations - Obtener todas las cancelaciones
export const getCancellations = async (req: Request, res: Response) => {
    try {
        const listCancellation = await Cancellation.findAll();
        res.json(listCancellation)
    } catch (error) {
        res.json({
            msg: error
        })
    }
}

//We obtain cancellation for the id - Obtenemos la cancelación por el id
export const getCancellationById = async (req: Request, res: Response) => {
    try {
        const { cancellation_id } = req.params
        const cancel = await Cancellation.findByPk( cancellation_id )

        if(cancel){
            res.send(cancel)
        }else {
            res.status(404).json({
                msg: `Cancellation ${ cancellation_id } Not found`
            })
        }
    } catch (error) {
        res.status(404).json({
            msg: `Cancellation Not found`
        })
    }
}

//Update all the data of the cancellation - Actualizar todos los datos de las cancelaciones
export const updateCancellationById = async(req: Request, res: Response) => {

    const { cancellation_id } = req.params
    const { body } = req
    try {
        const cancelUpdate = await Cancellation.findByPk( cancellation_id );
        if (!cancelUpdate){
            return res.status(404).json({
                msg: `there is no cancellation with the id ${ cancellation_id }`
            })
        }

        await cancelUpdate.update( body )
        res.json(cancelUpdate)

    } catch (error) {
        res.status(404).json({
            msg: 'ups could not update the cancellation'
        })
    }
    
}

//Delete the cancellation - Eliminar cancelación
export const deleteCancellationById = async(req: Request, res: Response) => {
    try {
        const { cancellation_id } = req.params
        await Cancellation.destroy({
            where: {
                cancellation_id
            }
        })
        res.status(200).json({
            msg: `OK`
        })
        } catch (error) {
        res.status(404).json({
            message:`ups could not delete the cancellation`
        })
    }
}