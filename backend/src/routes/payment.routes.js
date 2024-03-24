"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const payment_controller_1 = require("../controllers/payment.controller");
// import validateToken from './validate.routes'
const router = (0, express_1.Router)();
//Create soccer fields - Crear canchas de futbol 
router.post('/', payment_controller_1.payMent);
exports.default = router;
