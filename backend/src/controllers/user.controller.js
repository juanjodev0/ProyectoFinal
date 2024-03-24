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
exports.deleteUser = exports.updateUserById = exports.getUserById = exports.getUsers = void 0;
const user_1 = __importDefault(require("../models/user"));
//We obtain all users - Obtenemos todos los usuarios
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_1.default.findAll();
        res.json(users);
    }
    catch (error) {
        res.status(404).json({
            msg: `User not found`
        });
    }
});
exports.getUsers = getUsers;
//We get 1 user for your id - Obtenemos 1 usuario por su id
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_id } = req.params;
        const user = yield user_1.default.findByPk(user_id);
        if (user) {
            res.send(user);
        }
        else {
            res.status(404).json({
                msg: `User ${user_id} Not found`
            });
        }
    }
    catch (error) {
        res.json({
            msg: error
        });
    }
});
exports.getUserById = getUserById;
//Update all the data of the user - Actualizar todos los datos del usuario
const updateUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_id } = req.params;
    const { body } = req;
    try {
        const userUpdate = yield user_1.default.findByPk(user_id);
        if (!userUpdate) {
            return res.status(404).json({
                msg: `there is no user with the id ${user_id}`
            });
        }
        yield userUpdate.update(body);
        res.json(userUpdate);
    }
    catch (error) {
        res.status(404).json({
            msg: 'ups could not update the user'
        });
    }
});
exports.updateUserById = updateUserById;
//Delete one user - Eliminar 1 usuario
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_id } = req.params;
        yield user_1.default.destroy({
            where: {
                user_id
            }
        });
        res.status(200).json({
            msg: `User ${user_id} delete OK`
        });
    }
    catch (error) {
        res.status(404).json({
            message: `ups could not delete user`
        });
    }
});
exports.deleteUser = deleteUser;
