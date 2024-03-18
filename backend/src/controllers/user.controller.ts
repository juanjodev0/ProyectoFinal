// import { pool } from '../db.js'
import { Request, Response } from 'express'



export const createUser =  (req: Request, res: Response) => {
    // const {username, password, email, phone } = req.body;
    const { body } = req;

    // const [rows] = await pool.query('INSERT INTO users (username, password, email, phone) VALUES (?, ?, ?, ?)', [username, password, email, phone])
    // res.send({ 
    //     user_id: rows.insertId,
    //     username,
    //     password,
    //     email,
    //     phone,
    //  })
    res.json({
        message: "Created user",
        body
    })
}

export const loginUser = (req: Request, res: Response) => {
    const { body } = req;

    res.json({
        message: "Login user",
        body
    })
}

export const getUser = async(req: Request, res: Response) => {
    // const [ rows ] = await pool.query('SELECT * FROM users')
    // res.json(rows)
}

export const getUserById = async(req: Request, res: Response) => {
    // const [rows] = await pool.query('SELECT * FROM users WHERE user_id = ?', [req.params.user_id])
    // if (rows.length <= 0) return res.status(404).json({
    //     message: 'User not found'
    // })
    res.send('Get id success')
    
}

export const updateUserById = (req: Request, res: Response) => {
    res.send('put success')
}

export const deleteUser = async (req: Request, res: Response) => {
    // const [] = await pool.query('DELETE FORM users WHERE id = ?', [req.params.user_id])
    // res.send('user delete')
}