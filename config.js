import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const connect = () => {
mongoose.connect(process.env.DB_URI);

const connection = mongoose.connection;


//calback que se ejecuta después
connection.once('open', () => {
   console.log('Conexión exitosa a DB') } )

   connection.once('error',() => {
    console.error ('Error al conectarse a la DB')
   });
};

export {connect};