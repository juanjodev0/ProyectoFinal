import { DataTypes } from 'sequelize'
import sequelize from '../db/connection'

export const Field = sequelize.define('field', {
    field_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    field_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    surface_type: {
        type: DataTypes.STRING,
    },
    price_per_hour: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    available_hours: {
        type: DataTypes.STRING,
    }
})
