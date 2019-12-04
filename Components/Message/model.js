// Importación de modulos.
const mongoose = require('mongoose');

// Separacion del esquema.
const Schema = mongoose.Schema;

// Instanciación del esquema.
const MySchema = new Schema({
    user : String,
    message: {
        type: String,
        required : true
    },
    date : Date,
});

// Instanciacion del modelo.
const model = mongoose.model('Messages', MySchema);

// Exportación del esquema.
module.exports = model;