import express, { Application } from 'express';
import cors from 'cors'
import routesField from '../routes/field.routes'
import routesUser from '../routes/user.routes'
import routesReservation from '../routes/reservation.routes'
import routesFeedback from '../routes/feedback.routes'
import routesCancellation from '../routes/cancellation.routes'
import authUser from '../routes/auth.routes'

import morgan from 'morgan';
import Field from './field';
import User from './user';
import Reservation from './reservation';
import Feedback from './feedback';
import Cancellation from './cancellation';




class Server {
    private app: Application;
    private port: string;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '4001';
        this.dbConnect();
        this.midlewares();
        this.routes();
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server is running on http://localhost:${this.port}`.america)
        })

    }

    routes(){
        this.app.use('/api/fields', routesField)
        this.app.use('/api/users', routesUser)
        this.app.use('/api/users', authUser)
        this.app.use('/api/reservation', routesReservation)
        this.app.use('/api/feedback', routesFeedback)
        this.app.use('/api/cancellation', routesCancellation)
    }

    midlewares(){
        this.app.use(morgan('dev'));
        this.app.use(cors())
        this.app.use(express.json())  // Parse incoming requests with
    }

    async dbConnect(){
        try {
            await Field.sync();
            await User.sync();
            await Reservation.sync();
            await Feedback.sync();
            await Cancellation.sync();
            console.log(`Database connected`.bgGreen)

        }catch (error) {
            console.log(`Unable to connect to the database ${error}`.bgRed)
        }
    }
    
}

export default Server;