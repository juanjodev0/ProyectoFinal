import { DataTypes } from 'sequelize';
import sequelize from '../db/connection'

const Reservation = sequelize.define('reservations', {
    reservation_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
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
}, {
    timestamps: true,
});

export default Reservation;