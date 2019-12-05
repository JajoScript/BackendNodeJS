// Importación de modulos.
const express = require('express');
const Response = require('../../Network/response');
const controller = require("./controller");

// Creación del router.
const router = express.Router();

// Utilización de las rutas.
router.post('/', (request, response) => {
    controller.addChat(request.body.users)
        .then(data => {
            Response.success(request, response, data, 201);
        })
        .catch( error => {
            Response.error(request, response, 'Error Interno', 500, error);
        });
});

router.get('/:userId', (request, response) => {
    controller.listChat(request.params.userId)
        .then(users => {
            Response.success(request, response, users, 201);
        })
        .catch(error => {
            Response.error(request, response, "error interno", 500, error);
        });
});

// Exportación del modulo router.
module.exports = router;