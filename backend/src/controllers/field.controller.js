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
exports.deleteFieldById = exports.updateFieldById = exports.getFieldById = exports.getFields = exports.createField = void 0;
const field_1 = __importDefault(require("../models/field"));
//Create the soccer field in the database - Creamos la cancha en la bd
const createField = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { field_name, surface_type, price_per_hour, available_hours, image_field } = req.body;
    try {
        //We save field in the database - guardamos canchas en la base de datos
        yield field_1.default.create({
            field_name,
            surface_type,
            price_per_hour,
            available_hours,
            image_field
        });
        res.json({
            msg: `Field ${field_name} created`
        });
    }
    catch (error) {
        res.status(400).json({
            msg: `Ups an error occurred`
        });
    }
});
exports.createField = createField;
//Obtain all the fields - Obtener todas las canchas
const getFields = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listFields = yield field_1.default.findAll();
        res.json(listFields);
    }
    catch (error) {
        res.json({
            msg: error
        });
    }
});
exports.getFields = getFields;
//We obtain fields for the id - Obtenemos canchas por el id
const getFieldById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { field_id } = req.params;
        const field = yield field_1.default.findByPk(field_id);
        if (field) {
            res.send(field);
        }
        else {
            res.status(404).json({
                msg: `Field ${field_id} Not found`
            });
        }
    }
    catch (error) {
        res.status(404).json({
            msg: `Field Not found`
        });
    }
});
exports.getFieldById = getFieldById;
//Update all the data of the soccer field - Actualizar todos los datos de la cancha de fútbol
const updateFieldById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { field_id } = req.params;
    const { body } = req;
    try {
        const fieldUpdate = yield field_1.default.findByPk(field_id);
        if (!fieldUpdate) {
            return res.status(404).json({
                msg: `there is no field with the id ${field_id}`
            });
        }
        yield fieldUpdate.update(body);
        res.json(fieldUpdate);
    }
    catch (error) {
        res.status(404).json({
            msg: 'ups could not update the field'
        });
    }
});
exports.updateFieldById = updateFieldById;
//Delete the soccer field - Eliminar la cancha de fútbol
const deleteFieldById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { field_id } = req.params;
        yield field_1.default.destroy({
            where: {
                field_id
            }
        });
        res.status(200).json({
            msg: `OK`
        });
    }
    catch (error) {
        res.status(404).json({
            message: `ups could not delete the field`
        });
    }
});
exports.deleteFieldById = deleteFieldById;
