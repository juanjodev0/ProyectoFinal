import colors from 'colors'
import app from './app.js'
import { pool } from './db.js'
import dotenv from 'dotenv'

//Configuring dotenv
dotenv.config()


app.get('/ping', async(req, res) =>{
    const [result] = await pool.query('SELECT 1 + 1 AS result')
    res.json(result)
})

const puerto = process.env.PORT

app.listen(puerto, ()=> {
    console.log(`Server on port ${puerto}`.america);
})
