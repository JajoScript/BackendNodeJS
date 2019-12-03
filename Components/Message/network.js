// Importación de modulos.
const express = require('express');
const Response = require('../../Network/response');

// Creacion del router.
const router = express.Router();

// Utilización de las rutas.
router.get('/', (request, response) => {
    console.log(request.query);
    if(request.query == 'ok'){
        Response.error(request, response, "Mostrando Todos los mensajes.", 400, "Problema con la base de");
    }   
    else{
        Response.success(request, response, "Mostrando Todos los mensajes.", 200);
    }
});

router.post('/', (request, response) => {
    Response.success(request, response, "Enviando el mensaje.");
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