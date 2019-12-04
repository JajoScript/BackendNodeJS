// Importacion de modulos.
const store = require("./store");

// Creación de funciones.
function addMessage(user, message) {
    // Utilizacion de promesas.
    return new Promise((resolve, reject) => {
        if(!user){
            console.error("[ERROR]", "Usuario no encontrado.");
            return reject('Usuario no encontrado.');
        }
        else if(!message){
            console.error("[ERROR]", "Mensaje no encontrado.");
            return reject('Mensaje no encontrado.');
        }
        else {
            // Estructura del mensaje.
            const fullMessage = {
                user: user,
                message: message,
                date: new Date()
            };
            
            store.add(fullMessage);
            resolve(fullMessage);
        }
    });
    
}

function getMessages(filterUser){
    return new Promise((resolve, reject) => {
        resolve(store.list(filterUser));
    });
}

function updateMessage(id, message){
    return new Promise(async (resolve, reject) => {
        console.log(id, message);
        if(!id || !message){
            return reject('Información invalida');
        }

        const result = await store.updateText(id, message);

        resolve(result);
    });
}
module.exports = {
    addMessage,
    getMessages,
    updateMessage,
}