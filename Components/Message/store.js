// Logica de almacenamiento.

// Importación de modulos.
const Model = require('./model');

// Funciones de la base de datos.
function addMessage (message){
    const myMessage = new Model(message);
    myMessage.save();
}

function getMessage(filterUser){
    return new Promise((resolve, reject) => {
        let filter = {};
        if(filterUser != null){
            filter = {user: filterUser};
        }
        
        Model.find(filter)
        .populate('user')
        .exec((error, populated) => {
            if(error){
                return reject(error);
            }

            resolve(populated);
        });
    });
    
    
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