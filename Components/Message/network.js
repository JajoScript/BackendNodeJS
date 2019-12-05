// Importación de modulos.
const express = require('express');
const Response = require('../../Network/response');
const controller = require("./controller");

// Creacion del router.
const router = express.Router();

// Utilización de las rutas.
router.get('/', (request, response) => {
    const filterMessages = request.query.user || null;
    
    controller.getMessages(filterMessages)
    .then((messageList) => {
        Response.success(request,response, messageList, 200);
    })
    .catch(error => {
        Response.error(request, response, "Unexpected Error", 500, error);
    });
});

router.post('/', (request, response) => {
    controller.addMessage(request.body.chat ,request.body.user, request.body.message)
    .then((fullMessage)=>{
        Response.success(request, response, fullMessage, 201);
    })
    .catch(error => {
        Response.error(request, response, "Informacion faltante", 400, error);
    });
});

router.patch('/:id', (request, response) => {
    console.log(request.params.id);

    controller.updateMessage(request.params.id, request.body.message)
        .then((data) => {
            Response.success(request, response, data, 200)
        })
        .catch(error => {
            Response.error(request, response, "Error interno", 500, error);
        });
});

router.put('/', (request, response) => {
    Response.success(request, response, "Actualizando el mensaje.");
});

router.delete('/:id', (request, response) => {
    console.log(request.params.id);
    controller.deleteMessage(request.params.id)
        .then(()=>{
            Response.success(request, response, `Mensaje ${request.params.id}`, 200);
        })
        .catch(error => {
            Response.error(request, response, "Error interno", 500, error);
        });
});

// Exportación del modulo router.
module.exports = router;