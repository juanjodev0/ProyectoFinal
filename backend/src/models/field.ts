import { DataTypes } from 'sequelize'
import sequelize from '../db/connection'
import Reservation from './reservation';

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
    modelName: 'Field',
    timestamps: true,
})

Field.hasMany(Reservation, { foreignKey: 'field_id' });

export default Field;