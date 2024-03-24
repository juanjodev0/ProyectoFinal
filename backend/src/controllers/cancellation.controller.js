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
exports.deleteCancellationById = exports.updateCancellationById = exports.getCancellationById = exports.getCancellations = exports.createCancellation = void 0;
const cancellation_1 = __importDefault(require("../models/cancellation"));
//Create the cancellation in the database - Creamos la cancelación en la bd
const createCancellation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { reservation_id, user_id, reason, date } = req.body;
    try {
        //We save cancellation the database - guardamos la cancelación en la base de datos
        yield cancellation_1.default.create({
            reservation_id,
            user_id,
            reason,
            date
        });
        res.json({
            msg: `Cancellation success`
        });
    }
    catch (error) {
        res.status(400).json({
            msg: `Ups an error occurred`
        });
    }
});
exports.createCancellation = createCancellation;
//Obtain all the cancellations - Obtener todas las cancelaciones
const getCancellations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listCancellation = yield cancellation_1.default.findAll();
        res.json(listCancellation);
    }
    catch (error) {
        res.json({
            msg: error
        });
    }
});
exports.getCancellations = getCancellations;
//We obtain cancellation for the id - Obtenemos la cancelación por el id
const getCancellationById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { cancellation_id } = req.params;
        const cancel = yield cancellation_1.default.findByPk(cancellation_id);
        if (cancel) {
            res.send(cancel);
        }
        else {
            res.status(404).json({
                msg: `Cancellation ${cancellation_id} Not found`
            });
        }
    }
    catch (error) {
        res.status(404).json({
            msg: `Cancellation Not found`
        });
    }
});
exports.getCancellationById = getCancellationById;
//Update all the data of the cancellation - Actualizar todos los datos de las cancelaciones
const updateCancellationById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { cancellation_id } = req.params;
    const { body } = req;
    try {
        const cancelUpdate = yield cancellation_1.default.findByPk(cancellation_id);
        if (!cancelUpdate) {
            return res.status(404).json({
                msg: `there is no cancellation with the id ${cancellation_id}`
            });
        }
        yield cancelUpdate.update(body);
        res.json(cancelUpdate);
    }
    catch (error) {
        res.status(404).json({
            msg: 'ups could not update the cancellation'
        });
    }
});
exports.updateCancellationById = updateCancellationById;
//Delete the cancellation - Eliminar cancelación
const deleteCancellationById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { cancellation_id } = req.params;
        yield cancellation_1.default.destroy({
            where: {
                cancellation_id
            }
        });
        res.status(200).json({
            msg: `OK`
        });
    }
    catch (error) {
        res.status(404).json({
            message: `ups could not delete the cancellation`
        });
    }
});
exports.deleteCancellationById = deleteCancellationById;
