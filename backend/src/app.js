import express from 'express';
import morgan from 'morgan'
import fieldRoutes from './routes/field.routes.js'
import userRoutes from './routes/user.routes.js'

const app = express()

//middlewares
app.use(morgan('dev'))

app.use(express.json())


app.use('/api/fields',fieldRoutes)
app.use('/api/users',userRoutes)


export default app;