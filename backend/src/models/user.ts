import { DataTypes } from 'sequelize';
import sequelize from '../db/connection'


// Definir los modelos de las tablas en la base de datos
export const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
    }
});