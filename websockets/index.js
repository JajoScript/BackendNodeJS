// importacion de modulos.
const express = require('express');


// Inicializar express.
const app = express();

const server = require('http').Server(app);

const io = require("socket.io")(server);

// Creacion de las rutas.
app.use(express.static('public'));

// Preparación de las conexiones.
io.on('connection', (socket) =>{
    console.log("nuevo usuario conectado.");
    socket.emit('message', "Bienvenido!");
})

setInterval(() => {
    io.emit('message', "Hola os escribo a todos!");
}, 3000);

// Creacion del purto.
server.listen(3000), () => {
    console.log("Servidor on: http://localhost:3000/");
};
