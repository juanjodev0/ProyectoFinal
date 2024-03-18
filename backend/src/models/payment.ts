import { DataTypes } from 'sequelize';
import sequelize from '../db/connection'

export const Payment = sequelize.define('Payment', {
    amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    payment_status: {
        type: DataTypes.STRING,
    },
    payment_method: {
        type: DataTypes.STRING,
    }
});