import { Request, Response } from 'express'
import Payment from '../models/payment';

//Funcion que permite conectar la api y realizar los pagos
export const payMent = async(req: Request, res: Response) => {

    const { user_id, reservation_id, amount, payment_status, payment_method } = req.body;

    try {
        //We save payment in the database - guardamos pago en la base de datos
        await Payment.create({
            user_id,
            reservation_id,
            amount,
            payment_status,
            payment_method
        })
    
        res.json({
            msg: `payment succesful`,
            success: true
        })
    } catch (error) {
        res.json({
            msg: `payment failed`,
            success: false
        })
    }

}



