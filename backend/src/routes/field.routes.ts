import { Router } from 'express'
import { createField, getField, getFieldById, updateFieldById, deleteFieldById } from '../controllers/field.controller'

const router = Router();

router.post('/', createField)
router.get('/', getField)
router.get('/:fieldId', getFieldById)
router.put('/:fieldId', updateFieldById)
router.delete('/:fieldId', deleteFieldById)



export default router;