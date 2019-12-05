// Importación de modulos.
const mongoose = require('mongoose');

// Separacion del esquema.
const Schema = mongoose.Schema;

// Instanciación del esquema.
const MySchema = new Schema({
    users:{
        type: Schema.ObjectId,
    }
});

// Instanciacion del modelo.
const model = mongoose.model('chat', MySchema);

// Exportación del esquema.
module.exports = model;