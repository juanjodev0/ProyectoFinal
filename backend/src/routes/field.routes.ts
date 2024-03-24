import { Router } from 'express'
import { createField, getFields, getFieldById, updateFieldById, deleteFieldById } from '../controllers/field.controller'
import validateToken from './validate.routes'
const router = Router();


//Create soccer fields - Crear canchas de futbol 
router.post('/', createField)

//Get all fields - Obtener todos las canchas
router.get('/',validateToken, getFields)

//Get field by id - obtener la cancha por id
router.get('/:field_id', getFieldById)

//Update field by id - Actualizar la cancha por id
router.put('/:field_id', updateFieldById)

//Delete field by id - Eliminar cancha por id
router.delete('/:field_id', deleteFieldById)



export default router;