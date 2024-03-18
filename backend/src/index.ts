import Server from './models/server'
import "colors";
// import { pool } from './db.js'
import dotenv from 'dotenv'

//Configuring dotenv
dotenv.config()

// app.get('/ping', async(req, res) =>{
//     const [result] = await pool.query('SELECT 1 + 1 AS result')
//     res.json(result)
// })

const server = new Server()
server.listen()