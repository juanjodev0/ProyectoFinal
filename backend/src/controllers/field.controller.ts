import { Request, Response } from 'express'
import Field  from '../models/field'

//Create the soccer field in the database - Creamos la cancha en la bd
export const createField = async(req: Request, res: Response) => {

    const { field_name, surface_type, price_per_hour, available_hours, image_field } = req.body;

    try {
        //We save field in the database - guardamos canchas en la base de datos
        await Field.create({
            field_name,
            surface_type,
            price_per_hour,
            available_hours,
            image_field
        })
    
        res.json({
            msg: `User ${field_name} created`
        })
    } catch (error) {
        res.status(400).json({
            msg: `Ups an error occurred`
        })
    }

}

//Obtain all the fields - Obtener todas las canchas
export const getField = async (req: Request, res: Response) => {
    try {
        const listFields = await Field.findAll();
        res.json(listFields)
    } catch (error) {
        res.json({
            msg: error
        })
    }
}


//We obtain fields for the id - Obtenemos canchas por el id
export const getFieldById = async (req: Request, res: Response) => {
    try {
        const { field_id } = req.params
        const field = await Field.findByPk( field_id )

        if(field){
            res.send(field)
        }else {
            res.status(404).json({
                msg: `Field ${ field_id } Not found`
            })
        }
    } catch (error) {
        res.status(404).json({
            msg: `Field Not found`
        })
    }
}


//Update all the data of the soccer field - Actualizar todos los datos de la cancha de fútbol
export const updateFieldById = async(req: Request, res: Response) => {

    const { field_id } = req.params
    const { body } = req
    try {
        const fieldUpdate = await Field.findByPk( field_id );
        if (!fieldUpdate){
            return res.status(404).json({
                msg: `there is no field with the id ${field_id}`
            })
        }

        await fieldUpdate.update( body )
        res.json(fieldUpdate)

    } catch (error) {
        res.status(404).json({
            msg: 'ups could not update the field'
        })
    }
    
}


//Delete the soccer field - Eliminar la cancha de fútbol
export const deleteFieldById = async(req: Request, res: Response) => {
    try {
        const { field_id } = req.params
        await Field.destroy({
            where: {
                field_id
            }
        })
        res.status(200).json({
            msg: `OK`
        })
        } catch (error) {
        res.status(404).json({
            message:`ups could not delete the field`
        })
    }
}