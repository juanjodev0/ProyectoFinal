// Importar Sequelize y la configuración de conexión a la base de datos
import{ Sequelize } from 'sequelize';

import dotenv from 'dotenv'

dotenv.config()

// Configuración de la conexión a la base de datos
const sequelize = new Sequelize( {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    dialect: 'mysql',
})


export default sequelize;