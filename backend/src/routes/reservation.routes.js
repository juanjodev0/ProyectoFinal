"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reservation_controller_1 = require("../controllers/reservation.controller");
const validate_routes_1 = __importDefault(require("./validate.routes"));
const router = (0, express_1.Router)();
router.post('/', validate_routes_1.default, reservation_controller_1.createReservation);
router.get('/', reservation_controller_1.getReservations);
router.get('/:reservation_id', reservation_controller_1.getReservationById);
router.put('/:reservation_id', reservation_controller_1.updateReservationById);
router.delete('/:reservation_id', reservation_controller_1.deleteReservationById);
exports.default = router;
