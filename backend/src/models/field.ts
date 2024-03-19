import { DataTypes } from 'sequelize'
import sequelize from '../db/connection'

const Field = sequelize.define('fields', {
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
        type: DataTypes.DECIMAL(10, 3),
        allowNull: false,
    },
    available_hours: {
        type: DataTypes.STRING,
    },
    image_field: {
        type: DataTypes.BLOB('long'),
        allowNull: true,
    }
}, {
    timestamps: true,
})

export default Field;