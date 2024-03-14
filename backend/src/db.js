import {  createPool } from 'mysql2/promise'
import dotenv from 'dotenv'
//Configuring dotenv
dotenv.config()


export const pool = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE
})




