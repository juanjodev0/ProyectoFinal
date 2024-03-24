"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const user_1 = __importDefault(require("./user"));
const reservation_1 = __importDefault(require("./reservation"));
const Payment = connection_1.default.define('payments', {
    payment_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    reservation_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    amount: {
        type: sequelize_1.DataTypes.DECIMAL(10, 3),
        allowNull: false,
    },
    payment_status: {
        type: sequelize_1.DataTypes.STRING,
    },
    payment_method: {
        type: sequelize_1.DataTypes.STRING,
    }
}, {
    modelName: 'Payment',
    timestamps: true,
});
Payment.belongsTo(user_1.default, { foreignKey: 'user_id' });
Payment.belongsTo(reservation_1.default, { foreignKey: 'reservation_id' });
exports.default = Payment;
