// Importación de modulos.
const express = require('express');
const Response = require('../../Network/response');
const controller = require("./controller");

// Creacion del router.
const router = express.Router();

// Utilización de las rutas.
router.post('/', (request, response)=>{
    controller.addUser(request.body.name)
    .then((data) => {
        Response.success(request, response, data, 201);
    })
    .catch(error => {
        Response.error(request, response, 'Error interno', 500, error);
    });
})

// Exportación del modulo router.
module.exports = router;