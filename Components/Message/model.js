// Importación de modulos.
const mongoose = require('mongoose');

// Separacion del esquema.
const Schema = mongoose.Schema;

// Instanciación del esquema.
const MySchema = new Schema({
    chat : {
        type: Schema.ObjectId,
        ref: 'Chat'
    },
    user : {
        type: Schema.ObjectId,
        ref: 'User'
    },
    message: {
        type: String,
        required : true
    },
    date : Date,
    file: String,
});

// Instanciacion del modelo.
const model = mongoose.model('Messages', MySchema);

// Exportación del esquema.
module.exports = model;