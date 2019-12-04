// Importacion de modulos.
const store = require("./store");

// Creación de funciones.
function addUser(name){
    if(!name){
        return Promise.reject('Nombre no valido.');
    }

    const user = {
        name : name
    };

    return store.add(user);
}

// Exportación del Modulo.
module.exports = {
    addUser,

}