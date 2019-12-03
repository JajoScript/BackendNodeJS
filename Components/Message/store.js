// Logica de almacenamiento.

// Almacenamiento.
const list = [];

// Funciones del Mock.
function addMessage (message){
    list.push(message)
}

function getMessage(){
    return list;
}

module.exports = {
    add : addMessage,
    list : getMessage,
    // GET
    // UPDATE
    // DELETE
}