import { DataTypes } from 'sequelize';
import sequelize from '../db/connection'

export const Reservation = sequelize.define('Reservation', {
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    start_time: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    end_time: {
        type: DataTypes.TIME,
        allowNull: false,
    }
});