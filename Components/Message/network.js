// Importación de modulos.
const express = require('express');
const Response = require('../../Network/response');
const controller = require("./controller");

// Creacion del router.
const router = express.Router();

// Utilización de las rutas.
router.get('/', (request, response) => {
    controller.getMessages()
    .then((messageList) => {
        Response.success(request,response, messageList, 200);
    })
    .catch(event => {
        Response.error(request, response, "Unexpected Error", 500, event);
    });
});

router.post('/', (request, response) => {
    controller.addMessage(request.body.user, request.body.message)
    .then((fullMessage)=>{
        Response.success(request, response, fullMessage, 201);
    })
    .catch(event => {
        Response.error(request, response, "Informacion faltante", 400, event);
    });
});

router.patch('/:id', (request, response) => {
    console.log(request.params.id);

    controller.updateMessage(request.params.id, request.body.message)
        .then((data) => {
            Response.success(request, response, data, 200)
        })
        .catch(event => {
            Response.error(request, response, "Error interno", 500, event);
        });
});

router.put('/', (request, response) => {
    Response.success(request, response, "Actualizando el mensaje.");
});

router.delete('/', (request, response) => {
    Response.success(request, response, "Eliminando el mensaje.");
});

router.options('/', (request, response) => {
    Response.success(request, response, "Configuraciones del mensaje.");
});

// Exportación del modulo router.
module.exports = router;