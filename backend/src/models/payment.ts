import { DataTypes } from 'sequelize';
import sequelize from '../db/connection'

const Payment = sequelize.define('payments', {
    payment_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
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
}, {
    timestamps: true,
});


export  default Payment;