import { DataTypes } from 'sequelize';
import sequelize from '../db/connection'



// Definir los modelos de las tablas en la base de datos
const User = sequelize.define('users', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }, 
    username: {
        type: DataTypes.STRING,
        unique: true,
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
}, {
    modelName: 'User',
    timestamps: true,
});



export default User;