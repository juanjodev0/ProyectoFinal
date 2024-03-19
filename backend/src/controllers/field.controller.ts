import { Request, Response } from 'express'
import Field  from '../models/field'


export const createField = (req: Request, res: Response) => {

}

//Obtener todas las canchas
export const getField = async (req: Request, res: Response) => {
    const listFields = await Field.findAll();

 
    res.json(listFields)
}


//we obtain fields for the id - obtenemos canchas por el id
export const getFieldById = async (req: Request, res: Response) => {
    const { field_id } = req.params
    const field = await Field.findByPk( field_id )

    if(field){
        res.send(field)
    }else {
        res.status(404).json({
            msg: `Field ${ field_id } Not found`
        })
    }
}

export const updateFieldById = (req: Request, res: Response) => {
    
}

export const deleteFieldById = (req: Request, res: Response) => {
    
}