"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const reservation_1 = __importDefault(require("./reservation"));
const Field = connection_1.default.define('fields', {
    field_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    field_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    surface_type: {
        type: sequelize_1.DataTypes.STRING,
    },
    price_per_hour: {
        type: sequelize_1.DataTypes.DECIMAL(10, 3),
        allowNull: false,
    },
    available_hours: {
        type: sequelize_1.DataTypes.STRING,
    },
    image_field: {
        type: sequelize_1.DataTypes.BLOB('long'),
        allowNull: true,
    }
}, {
    modelName: 'Field',
    timestamps: true,
});
Field.hasMany(reservation_1.default, { foreignKey: 'field_id' });
exports.default = Field;
