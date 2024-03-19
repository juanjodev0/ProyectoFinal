import express, { Application } from 'express';
import routesField from '../routes/field.routes'
import routesUser from '../routes/user.routes'
import Field from './field';
import User from './user';




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
    }

    midlewares(){
        this.app.use(express.json())  // Parse incoming requests with
    }
    async dbConnect(){
        try {
            await Field.sync();
            await User.sync();
            console.log(`Database connected`.bgGreen)

        }catch (error) {
            console.log(`Unable to connect to the database ${error}`.bgRed)
        }
    }
    
}

export default Server;