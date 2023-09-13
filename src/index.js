import express from "express";
import { config } from 'dotenv'
import morgan from "morgan";
const app = express();
config();


//middlewares
app.use(express.json());
app.use(morgan('dev'))




const PORT = process.env.PORT || 3000
const DB_URL = process.env.NODE_ENV === 'production' ? process.env.DB_URL_PROD : process.env.DB_URL_DEV;
const environment = process.env.NODE_ENV || 'development';


app.listen(PORT, () => console.log("Ready server in PORT-> " + PORT))