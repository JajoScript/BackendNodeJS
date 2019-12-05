// Importación de modulos.
const express = require('express');
const message = require('../Components/Message/network');
const user = require('../Components/user/network');
const chat = require('../Components/chat/network');

// Manejo de rutas.
const routes = (server) => {
    server.use('/message', message);
    server.use('/user', user);
    server.use('/chat', chat)
}

// Exportaci
module.exports = routes;