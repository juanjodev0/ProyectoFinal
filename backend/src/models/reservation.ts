import { DataTypes } from 'sequelize';
import sequelize from '../db/connection'
// import User from './user';
// import Field from './field';
// import Payment from './payment';
// import Feedback from './feedback';

const Reservation = sequelize.define('reservations', {
    reservation_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    field_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
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
    modelName: 'Reservation',
    timestamps: true,
});

// Reservation.belongsTo(User, { foreignKey: 'user_id' });
// Reservation.belongsTo(Field, { foreignKey: 'field_id' });
// Reservation.hasOne(Payment, { foreignKey: 'reservation_id' });
// Reservation.hasOne(Feedback, { foreignKey: 'reservation_id' });

export default Reservation;