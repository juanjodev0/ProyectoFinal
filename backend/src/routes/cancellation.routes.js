"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cancellation_controller_1 = require("../controllers/cancellation.controller");
const validate_routes_1 = __importDefault(require("./validate.routes"));
const router = (0, express_1.Router)();
//Create cancellation - Crear cancelaciones
router.post('/', validate_routes_1.default, cancellation_controller_1.createCancellation);
//Get all cancellations - Obtener todos las cancelaciones
router.get('/', cancellation_controller_1.getCancellations);
//Get cancellation by id - obtener la cancelació por id
router.get('/:cancellation_id', cancellation_controller_1.getCancellationById);
//Update cancellation by id - Actualizar cancelació por id
router.put('/:cancellation_id', cancellation_controller_1.updateCancellationById);
//Delete cancellation by id - Eliminar cancelació por id
router.delete('/:cancellation_id', validate_routes_1.default, cancellation_controller_1.deleteCancellationById);
exports.default = router;
