import { Request, Response } from 'express'
import Feedback  from '../models/feedback'


//Create the feedback in the database - Creamos la cancha en la bd
export const createFeedback = async(req: Request, res: Response) => {

    const { reservation_id, user_id, rating, comment, date } = req.body;

    try {
        //We save feedback in the database - guardamos los comentarios en la base de datos
        await Feedback.create({
            reservation_id,
            user_id,
            rating,
            comment,
            date
        })
    
        res.json({
            msg: `Feedbacks created`
        })
    } catch (error) {
        res.status(400).json({
            msg: `Ups an error occurred`
        })
    }

}

//Obtain all the feedback - Obtener todas los comentarios
export const getFeedbacks = async (req: Request, res: Response) => {
    try {
        const listFeedback = await Feedback.findAll();
        res.json(listFeedback)
    } catch (error) {
        res.json({
            msg: error
        })
    }
}

//We obtain feedback for the id - Obtenemos comentarios por el id
export const getFeedbackById = async (req: Request, res: Response) => {
    try {
        const { feedback_id } = req.params
        const feed = await Feedback.findByPk( feedback_id )

        if(feed){
            res.send(feed)
        }else {
            res.status(404).json({
                msg: `Feedback ${ feedback_id } Not found`
            })
        }
    } catch (error) {
        res.status(404).json({
            msg: `Feedback Not found`
        })
    }
}

//Update all the data of the feedback - Actualizar todos los datos de los comentarios
export const updateFeedbackById = async(req: Request, res: Response) => {

    const { feedback_id } = req.params
    const { body } = req
    try {
        const feedUpdate = await Feedback.findByPk( feedback_id );
        if (!feedUpdate){
            return res.status(404).json({
                msg: `there is no feedback with the id ${ feedback_id }`
            })
        }

        await feedUpdate.update( body )
        res.json(feedUpdate)

    } catch (error) {
        res.status(404).json({
            msg: 'ups could not update the feedback'
        })
    }
    
}

//Delete the feedback - Eliminar comentario
export const deleteFeedbackById = async(req: Request, res: Response) => {
    try {
        const { feedback_id } = req.params
        await Feedback.destroy({
            where: {
                feedback_id
            }
        })
        res.status(200).json({
            msg: `OK`
        })
        } catch (error) {
        res.status(404).json({
            message:`ups could not delete the feedback`
        })
    }
}

