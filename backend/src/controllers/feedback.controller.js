"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFeedbackById = exports.updateFeedbackById = exports.getFeedbackById = exports.getFeedbacks = exports.createFeedback = void 0;
const feedback_1 = __importDefault(require("../models/feedback"));
//Create the feedback in the database - Creamos la cancha en la bd
const createFeedback = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { reservation_id, user_id, rating, comment, date } = req.body;
    try {
        //We save feedback in the database - guardamos los comentarios en la base de datos
        yield feedback_1.default.create({
            reservation_id,
            user_id,
            rating,
            comment,
            date
        });
        res.json({
            msg: `Feedbacks created`
        });
    }
    catch (error) {
        res.status(400).json({
            msg: `Ups an error occurred`
        });
    }
});
exports.createFeedback = createFeedback;
//Obtain all the feedback - Obtener todas los comentarios
const getFeedbacks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listFeedback = yield feedback_1.default.findAll();
        res.json(listFeedback);
    }
    catch (error) {
        res.json({
            msg: error
        });
    }
});
exports.getFeedbacks = getFeedbacks;
//We obtain feedback for the id - Obtenemos comentarios por el id
const getFeedbackById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { feedback_id } = req.params;
        const feed = yield feedback_1.default.findByPk(feedback_id);
        if (feed) {
            res.send(feed);
        }
        else {
            res.status(404).json({
                msg: `Feedback ${feedback_id} Not found`
            });
        }
    }
    catch (error) {
        res.status(404).json({
            msg: `Feedback Not found`
        });
    }
});
exports.getFeedbackById = getFeedbackById;
//Update all the data of the feedback - Actualizar todos los datos de los comentarios
const updateFeedbackById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { feedback_id } = req.params;
    const { body } = req;
    try {
        const feedUpdate = yield feedback_1.default.findByPk(feedback_id);
        if (!feedUpdate) {
            return res.status(404).json({
                msg: `there is no feedback with the id ${feedback_id}`
            });
        }
        yield feedUpdate.update(body);
        res.json(feedUpdate);
    }
    catch (error) {
        res.status(404).json({
            msg: 'ups could not update the feedback'
        });
    }
});
exports.updateFeedbackById = updateFeedbackById;
//Delete the feedback - Eliminar comentario
const deleteFeedbackById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { feedback_id } = req.params;
        yield feedback_1.default.destroy({
            where: {
                feedback_id
            }
        });
        res.status(200).json({
            msg: `OK`
        });
    }
    catch (error) {
        res.status(404).json({
            message: `ups could not delete the feedback`
        });
    }
});
exports.deleteFeedbackById = deleteFeedbackById;
