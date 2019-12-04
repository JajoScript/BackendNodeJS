// Logica de almacenamiento.

// Importación de modulos.
const Model = require('./model');

// Funciones de la base de datos.
function addUser(user){
    const myUser = new Model(user);
    return myUser.save();
}

// Exportación del Modulo.
module.exports = {
    add: addUser,
    // DELETE
    // UPDATE
}