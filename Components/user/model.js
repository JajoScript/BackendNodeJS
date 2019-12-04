// Importación de modulos.
const mongoose = require('mongoose');

// Separacion del esquema.
const Schema = mongoose.Schema;

// Instanciación del esquema.
const MySchema = new Schema({
    name : String,
});

// Instanciacion del modelo.
const model = mongoose.model('User', MySchema);

// Exportación del esquema.
module.exports = model;