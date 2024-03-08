//TODO: craer app express

/**
 * 1.- Importar express
 * 2.- Crear una aplicación con Express.js y llamada "my-app"
 * 3.- Usar app.Listen para abrir puertos
 */
import { connect } from "./config.js";
import express  from "express";
import carRoutes from "./routes/carRoutes.js";

connect();
const api = express();
api.use(express.json());
api.listen(8000, () =>{
    console.log("Escuchando en el puerto 8000");
});

//String (nombre de la ruta)
api.get('/test', (req , res)=>{
    res.send('Hola desde /test');
})

api.use(carRoutes);

/*
* Middleware global que se ejecutará para todas las peticiones a nuestra API
*/                                  
