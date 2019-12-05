// Importacion de modulos.
const store = require("./store");
const socket = require('../../socket').socket;

// Creación de funciones.
function addMessage(chat, user, message, file) {
    // Utilizacion de promesas.
    return new Promise((resolve, reject) => {
        const fileUrl = '';
        if(file){
            fileUrl = 'http://localhost:3000/app/files/' + file.filename;
        }
        if(!user){
            console.error("[ERROR]", "Usuario no encontrado.");
            return reject('Usuario no encontrado.');
        }
        else if(!message){
            console.error("[ERROR]", "Mensaje no encontrado.");
            return reject('Mensaje no encontrado.');
        }
        else if(!chat){
            console.error("[ERROR]", "Chat no encontrado.");
            return reject('Usuario no encontrado.');
        }
        else {
            // Estructura del mensaje.
            const fullMessage = {
                chat : chat,
                user: user,
                message: message,
                date: new Date(),
                file: fileUrl
            };
            
            store.add(fullMessage);

            socket.io.emit('message', fullMessage);
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

function deleteMessage(id){
    return new Promise((resolve, reject)=>{
        if(!id){
            return reject('Id invalido.');
        }
        store.remove(id)
            .then(() => {
                resolve();
            })
            .catch(error => {
                reject(error);
            });
    });
}
module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage,
}