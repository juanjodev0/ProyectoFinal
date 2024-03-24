"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const router = (0, express_1.Router)();
//Get all users - Obtener todos los usuarios
router.get('/', user_controller_1.getUsers);
//Get user by id - obtener el usuario por id
router.get('/:user_id', user_controller_1.getUserById);
//Update user by id - Actualizar el usuario por id
router.put('/:user_id', user_controller_1.updateUserById);
//Delete user by id - Eliminar el usuario por id
router.delete('/:user_id', user_controller_1.deleteUser);
exports.default = router;
