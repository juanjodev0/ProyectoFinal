"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
// import User from './user';
// import Field from './field';
// import Payment from './payment';
// import Feedback from './feedback';
const Reservation = connection_1.default.define('reservations', {
    reservation_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    field_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    start_time: {
        type: sequelize_1.DataTypes.TIME,
        allowNull: false,
    },
    end_time: {
        type: sequelize_1.DataTypes.TIME,
        allowNull: false,
    }
}, {
    modelName: 'Reservation',
    timestamps: true,
});
// Reservation.belongsTo(User, { foreignKey: 'user_id' });
// Reservation.belongsTo(Field, { foreignKey: 'field_id' });
// Reservation.hasOne(Payment, { foreignKey: 'reservation_id' });
// Reservation.hasOne(Feedback, { foreignKey: 'reservation_id' });
exports.default = Reservation;
