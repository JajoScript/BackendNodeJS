// Logica de almacenamiento.

// Importación de modulos.
const Model = require('./model');

// Funciones de la base de datos.
function addUser(user){
    const myUser = new Model(user);
    return myUser.save();
}

async function getUsers(filterUser){
    let filter = {};
    if(filterUser != null){
        filter = {name: filterUser}
    }
    const users = await Model.find(filter);
    return users;
}
// Exportación del Modulo.
module.exports = {
    add: addUser,
    get: getUsers,
    // DELETE
    // UPDATE
}