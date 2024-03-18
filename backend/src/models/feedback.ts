import { DataTypes } from 'sequelize';
import sequelize from '../db/connection'


const Feedback = sequelize.define('Feedback', {
    rating: {
        type: DataTypes.INTEGER,
    },
    comment: {
        type: DataTypes.TEXT,
    },
    date: {
        type: DataTypes.DATEONLY,
    }
});