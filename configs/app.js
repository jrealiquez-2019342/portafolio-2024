import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import { config } from 'dotenv'
import taskRoutes from './../src/task/task.routes.js';

//configuracion
const app = express();
config();
const port = process.env.PORT || 3057;

//configuracion del servidor
app.use(express.urlencoded({extended:'false'}));
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

//Declaracion de rutas
app.use('/task', taskRoutes);

export const initServer = ()=>{
    app.listen(port);
    console.log(`Server HTTP running in port ${port}`);
}

