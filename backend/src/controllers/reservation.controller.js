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
exports.deleteReservationById = exports.updateReservationById = exports.getReservationById = exports.getReservations = exports.createReservation = void 0;
const reservation_1 = __importDefault(require("../models/reservation"));
//Create the reservation in the database - Creamos la reserva en la bd
const createReservation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_id, field_id, date, start_time, end_time } = req.body;
    try {
        //We save reservation in the database - guardamos reservación en la base de datos
        yield reservation_1.default.create({
            user_id,
            field_id,
            date,
            start_time,
            end_time
        });
        res.json({
            msg: `Reservation created`
        });
    }
    catch (error) {
        res.status(400).json({
            msg: `Ups an error occurred`
        });
    }
});
exports.createReservation = createReservation;
//Obtain all the reservations - Obtener todas las reservaciones
const getReservations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listReservations = yield reservation_1.default.findAll();
        res.json(listReservations);
    }
    catch (error) {
        res.json({
            msg: error
        });
    }
});
exports.getReservations = getReservations;
//We obtain reservation for the id - Obtenemos reservación por el id
const getReservationById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { reservation_id } = req.params;
        const reservation = yield reservation_1.default.findByPk(reservation_id);
        if (reservation) {
            res.send(reservation);
        }
        else {
            res.status(404).json({
                msg: `Reservation ${reservation_id} Not found`
            });
        }
    }
    catch (error) {
        return res.status(500).json({
            msg: `Internal Server Error`
        });
    }
});
exports.getReservationById = getReservationById;
//Update all the data of the reservation - Actualizar todos los datos de la reservación
const updateReservationById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { reservation_id } = req.params;
    const { body } = req;
    try {
        const reservationUpdate = yield reservation_1.default.findByPk(reservation_id);
        if (!reservationUpdate) {
            return res.status(404).json({
                msg: `there is no reservation with the id ${reservation_id}`
            });
        }
        yield reservationUpdate.update(body);
        res.json(reservationUpdate);
    }
    catch (error) {
        res.status(404).json({
            msg: 'ups could not update the reservation'
        });
    }
});
exports.updateReservationById = updateReservationById;
//Delete the reservation - Eliminar la reserva
const deleteReservationById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { reservation_id } = req.params;
        yield reservation_1.default.destroy({
            where: {
                reservation_id
            }
        });
        res.status(200).json({
            msg: `Reservation ${reservation_id} delete OK`
        });
    }
    catch (error) {
        res.status(404).json({
            message: `ups could not delete reservation`
        });
    }
});
exports.deleteReservationById = deleteReservationById;
