// Importación de modulos.
const express = require('express');
const Response = require('../../Network/response');
const controller = require("./controller");

// Creacion del router.
const router = express.Router();

// Utilización de las rutas.
router.get('/', (request, response) => {
    console.log(request.query);
    if(request.query == 'ok'){
        Response.error(request, response, "Mostrando Todos los mensajes.", 400, "Problema con la base de datos.");
    }   
    else{
        Response.success(request, response, "Mostrando Todos los mensajes.", 200);
    }
});

router.post('/', (request, response) => {
    controller.addMessage(request.body.user, request.body.message)
    .then((fullMessage)=>{
        Response.success(request, response, fullMessage, 201);
    })
    .catch(event => {
        Response.error(request, response, "Informacion faltante", 400, "Problemas de información del usuario.");
    });
});

router.patch('/', (request, response) => {
    Response.success(request, response, "Modificando el mensaje.");
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