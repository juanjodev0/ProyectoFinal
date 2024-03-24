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
exports.payMent = void 0;
const payment_1 = __importDefault(require("../models/payment"));
//Funcion que permite conectar la api y realizar los pagos
const payMent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_id, reservation_id, amount, payment_status, payment_method } = req.body;
    try {
        //We save payment in the database - guardamos pago en la base de datos
        yield payment_1.default.create({
            user_id,
            reservation_id,
            amount,
            payment_status,
            payment_method
        });
        res.json({
            msg: `payment succesful`,
            success: true
        });
    }
    catch (error) {
        res.json({
            msg: `payment failed`,
            success: false
        });
    }
});
exports.payMent = payMent;
