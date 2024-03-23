import { DataTypes } from 'sequelize';
import sequelize from '../db/connection'
import User from './user';
import Reservation from './reservation';


const Cancellation = sequelize.define('cancellations', {
    cancellation_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    reservation_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
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
    modelName: 'Cancellation',
    timestamps: true,
});

Cancellation.belongsTo(Reservation, { foreignKey: 'reservation_id' });
Cancellation.belongsTo(User, { foreignKey: 'user_id' });

export default Cancellation;