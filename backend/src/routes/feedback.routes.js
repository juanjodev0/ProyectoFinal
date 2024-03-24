"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const feedback_controller_1 = require("../controllers/feedback.controller");
const validate_routes_1 = __importDefault(require("./validate.routes"));
const router = (0, express_1.Router)();
//Create feedback - Crear comentarios
router.post('/', validate_routes_1.default, feedback_controller_1.createFeedback);
//Get all feedback - Obtener todos los comentarios
router.get('/', feedback_controller_1.getFeedbacks);
//Get feedback by id - obtener la cancha por id
router.get('/:feedback_id', feedback_controller_1.getFeedbackById);
//Update fedback by id - Actualizar comentario por id
router.put('/:feedback_id', validate_routes_1.default, feedback_controller_1.updateFeedbackById);
//Delete feedback by id - Eliminar comentario por id
router.delete('/:feedback_id', validate_routes_1.default, feedback_controller_1.deleteFeedbackById);
exports.default = router;
