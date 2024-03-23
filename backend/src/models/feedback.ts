import { DataTypes } from 'sequelize';
import sequelize from '../db/connection'
import User from './user';
import Reservation from './reservation';


const Feedback = sequelize.define('feedbacks', {
    feedback_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    reservation_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    rating: { 
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    comment: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    }
}, {
    modelName: 'Feedback',
    timestamps: true,
});

Feedback.belongsTo(User, { foreignKey: 'user_id' });
Feedback.belongsTo(Reservation, { foreignKey: 'reservation_id' });

export default Feedback;