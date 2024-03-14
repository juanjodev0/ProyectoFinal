import { pool } from '../db.js'


export const createUser = async (req, res) => {
    const {username, password, email, phone } = req.body;
    const [rows] = await pool.query('INSERT INTO users (username, password, email, phone) VALUES (?, ?, ?, ?)', [username, password, email, phone])
    res.send({ 
        user_id: rows.insertId,
        username,
        password,
        email,
        phone,
     })
}

export const getUser = async(req, res) => {
    const [ rows ] = await pool.query('SELECT * FROM users')
    res.json(rows)
}

export const getUserById = async(req, res) => {
    const [rows] = await pool.query('SELECT * FROM users WHERE user_id = ?', [req.params.user_id])
    if (rows.length <= 0) return res.status(404).json({
        message: 'User not found'
    })
    res.send('Get id success')
    
}

export const updateUserById = (req, res) => {
    res.send('put success')
}

export const deleteUserById = (req, res) => {
    res.send('delete success')
}