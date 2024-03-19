import { DataTypes } from 'sequelize';
import sequelize from '../db/connection'


const Payment = sequelize.define('cancellations', {
    cancellation_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    reason: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
}, {
    timestamps: true,
});

export default Payment;