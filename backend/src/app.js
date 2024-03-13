import express from 'express';
import morgan from 'morgan'
import fieldRoutes from './routes/field.routes.js'

const app = express()

//middlewares
app.use(morgan('dev'))


app.use('/fields',fieldRoutes)

export default app;