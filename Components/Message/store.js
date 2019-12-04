// Logica de almacenamiento.

// Importación de modulos.
const db = require('mongoose');
const Model = require('./model');

// Conexion con la base de datos.
db.Promise = global.Promise;
db.connect('mongodb+srv://jajoscript:1234@cluster0-1ojwl.mongodb.net/Telegrom?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser : true
});
console.log('[DB] Conectada con exito.')

// Almacenamiento.


// Funciones del Mock.
function addMessage (message){
    // list.push(message);
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessage(){
    const messages = await Model.find();
    return messages;
}

async function updateText(id, message){
    const foundMessage = await Model.findOne({
        _id: id,
    });

    foundMessage.message = message;
    const newMessage = await foundMessage.save();
    return newMessage;
}

module.exports = {
    add : addMessage,
    list : getMessage,
    updateText: updateText,
    // DELETE
}