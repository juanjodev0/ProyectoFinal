"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const user_1 = __importDefault(require("./user"));
const reservation_1 = __importDefault(require("./reservation"));
const Cancellation = connection_1.default.define('cancellations', {
    cancellation_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    reservation_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    reason: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false
    },
    date: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false
    }
}, {
    modelName: 'Cancellation',
    timestamps: true,
});
Cancellation.belongsTo(reservation_1.default, { foreignKey: 'reservation_id' });
Cancellation.belongsTo(user_1.default, { foreignKey: 'user_id' });
exports.default = Cancellation;
