import { Request, Response } from 'express'
import Field  from '../models/field'


export const createField = (req: Request, res: Response) => {

}

//Obtener todas las canchas
export const getField = async (req: Request, res: Response) => {
    const listFields = await Field.findAll();


    res.json(listFields)
}

export const getFieldById = (req: Request, res: Response) => {
    
}

export const updateFieldById = (req: Request, res: Response) => {
    
}

export const deleteFieldById = (req: Request, res: Response) => {
    
}