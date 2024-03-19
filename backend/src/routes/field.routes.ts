import { Router } from 'express'
import { createField, getField, getFieldById, updateFieldById, deleteFieldById } from '../controllers/field.controller'

const router = Router();

router.post('/', createField)
router.get('/', getField)
router.get('/:field_id', getFieldById)
router.put('/:field_id', updateFieldById)
router.delete('/:field_id', deleteFieldById)



export default router;