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

function getUser(filterUser){
    return new Promise((resolve, reject) => {
        resolve(store.get(filterUser));
    });
}
// Exportación del Modulo.
module.exports = {
    addUser,
    getUser,

}