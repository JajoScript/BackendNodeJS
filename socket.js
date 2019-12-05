// Importacion de modulos.
const socketIO = require('socket.io');

// Creacion de un objeto.
const socket = {};

// Funciones.
function connect(server) {
    socket.io = socketIO(server);
};

module.exports = {
    connect,
    socket,
};