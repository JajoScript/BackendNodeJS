// Importacion de modulos.
const store = require("./store");

// Creación de funciones.
function addChat(users) {
    if(!users || !Array.isArray(users)){
        return Promise.reject('Lista invalida de usuarios');
    }
    const chat = {
        users : users,
    }
    return store.add(chat);
}

function listChat(userId){
    return store.list(userId);
}

module.exports = {
    addChat,
    listChat
}