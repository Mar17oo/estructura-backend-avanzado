import mongoose from "mongoose";

/**
 * 1.- Crear un schema (esqueleto)
 * 2.- Crear modelo, asignando un nombre
 */

const carSchema = new mongoose.Schema({
    //Campo - Tipo de dato - Requerido?
    plate: { type: String,//- Cadena de texto - Si
    required: true},
    model: String,
    brand: {type: String, required: true},
    color: String,
    vin: { type: String , unique : true },
    year: Number,
});

// NOTE: Capital letter y singular  name for collection name ''Car''
export default mongoose.model("Car",carSchema);


