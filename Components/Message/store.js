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

// Funciones de la base de datos.
function addMessage (message){
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessage(filterUser){
    let filter = {};
    if(filterUser != null){
        filter = {user: filterUser};
    }
    const messages = await Model.find(filter);
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

function removeMessage(id){
    return Model.deleteOne({
        _id : id
    });
}

module.exports = {
    add : addMessage,
    list : getMessage,
    updateText: updateText,
    remove: removeMessage
}