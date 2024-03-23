import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';
import User from './user';
import Reservation from './reservation';

const Payment = sequelize.define('payments', {
    payment_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    reservation_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    amount: {
        type: DataTypes.DECIMAL(10, 3),
        allowNull: false,
    },
    payment_status: {
        type: DataTypes.STRING,
    },
    payment_method: {
        type: DataTypes.STRING,
    }
}, {
    modelName: 'Payment',
    timestamps: true,
});

Payment.belongsTo(User, { foreignKey: 'user_id' });
Payment.belongsTo(Reservation, { foreignKey: 'reservation_id' });

export  default Payment;