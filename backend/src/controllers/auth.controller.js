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
exports.loginUser = exports.createUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_1 = __importDefault(require("../models/user"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
//Register
//Create the user in the database - Creamos el usuario en la bd
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password, email, phone } = req.body;
    //Validate if the user already exists in the database - Validamos si el usuario ya existe en la base de datos
    const user = yield user_1.default.findOne({ where: { username: username } });
    if (user) {
        return res.status(400).json({
            msg: `There is already a user with the name ${username} `
        });
    }
    //Validate if the email already exists in the database - Validamos si el correo ya existe en la base de datos
    const mail = yield user_1.default.findOne({ where: { email: email } });
    if (mail) {
        return res.status(400).json({
            msg: `There is already a email ${email} `
        });
    }
    //Password encripted
    const hashedPassword = yield bcrypt_1.default.hash(password, 10);
    try {
        //We save users in the database - guardamos usuarios en la base de datos
        yield user_1.default.create({
            username,
            password: hashedPassword,
            email,
            phone
        });
        res.json({
            msg: `User ${username} created`
        });
    }
    catch (error) {
        res.status(400).json({
            msg: `Ups an error occurred`
        });
    }
});
exports.createUser = createUser;
//Login
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    //Validate if the user exists in the database - Validamos si el usuario existe en la base de datos
    const user = yield user_1.default.findOne({ where: { username: username } });
    if (!user) {
        return res.status(400).json({
            msg: `There is no user with the name ${username}`
        });
    }
    //Validate password - Validamos password
    const passwordValid = yield bcrypt_1.default.compare(password, user.password);
    if (!passwordValid) {
        return res.status(400).json({
            msg: `Password wrong`
        });
    }
    //Generate token - Generamos token
    const token = jsonwebtoken_1.default.sign({
        username: username
    }, process.env.SECRET_KEY || 'pizza456');
    res.json(token);
});
exports.loginUser = loginUser;
