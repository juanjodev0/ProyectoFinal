import { Router } from 'express'
import { createField, getFields, getFieldById, updateFieldById, deleteFieldById } from '../controllers/field.controller'
import validateToken from './validate.routes'
import { isAdmin } from '../controllers/auth.controller';
const router = Router();


//Create soccer fields - Crear canchas de futbol 
router.post('/',validateToken, isAdmin, createField)

//Get all fields - Obtener todos las canchas
router.get('/',validateToken, getFields)

//Get field by id - obtener la cancha por id
router.get('/:field_id',validateToken,isAdmin, getFieldById)

//Update field by id - Actualizar la cancha por id
router.put('/:field_id',validateToken,isAdmin, updateFieldById)

//Delete field by id - Eliminar cancha por id
router.delete('/:field_id',validateToken,isAdmin, deleteFieldById)



export default router;