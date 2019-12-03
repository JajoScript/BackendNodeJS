// Importación de modulos.
const express = require('express');
const message = require('../Components/Message/network');

// Manejo de rutas.
const routes = (server) => {
    server.use('/message', message);
}

// Exportaci
module.exports = routes;