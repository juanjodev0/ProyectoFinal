"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const field_controller_1 = require("../controllers/field.controller");
const validate_routes_1 = __importDefault(require("./validate.routes"));
const router = (0, express_1.Router)();
//Create soccer fields - Crear canchas de futbol 
router.post('/', field_controller_1.createField);
//Get all fields - Obtener todos las canchas
router.get('/', validate_routes_1.default, field_controller_1.getFields);
//Get field by id - obtener la cancha por id
router.get('/:field_id', field_controller_1.getFieldById);
//Update field by id - Actualizar la cancha por id
router.put('/:field_id', field_controller_1.updateFieldById);
//Delete field by id - Eliminar cancha por id
router.delete('/:field_id', field_controller_1.deleteFieldById);
exports.default = router;
