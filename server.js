//TODO: craer app express

/**
 * 1.- Importar express
 * 2.- Crear una aplicación con Express.js y llamada "my-app"
 * 3.- Usar app.Listen para abrir puertos
 */
import { connect } from './config.js';
import express  from "express";

const api = express();

api.listen(8000, () =>{
    console.log("Escuchando en el puerto 8000");
});
