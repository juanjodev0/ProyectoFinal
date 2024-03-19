import { DataTypes } from 'sequelize';
import sequelize from '../db/connection'


const Feedback = sequelize.define('feedbacks', {
    feedback_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    rating: {
        type: DataTypes.INTEGER,
    },
    comment: {
        type: DataTypes.TEXT,
    },
    date: {
        type: DataTypes.DATEONLY,
    }
}, {
    timestamps: true,
});

export default Feedback;