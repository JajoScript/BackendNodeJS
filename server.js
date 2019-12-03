// Importación de modulos.
const express = require('express');
const bodyParser = require('body-parser');
const Response = require('./Network/response');

// Creación de la aplicación.
var app = express();

// Instanciación del router.
const router = express.Router();

// Añadir configuración con body-parser.
app.use(bodyParser.json()); // Agrega el uso de json.

// Añadir router a la aplicación.
app.use(router);

// Utilización de las rutas.
router.get('/message', (request, response) => {
    console.log(request.query);
    if(request.query == 'ok'){
        Response.error(request, response, "Mostrando Todos los mensajes.", 400, "Problema con la base de datos.");
    }   
    else{
        Response.success(request, response, "Mostrando Todos los mensajes.", 200);
    }
});

router.post('/message', (request, response) => {
    Response.success(request, response, "Enviando el mensaje.");
});

router.patch('/message', (request, response) => {
    Response.success(request, response, "Modificando el mensaje.");
});

router.put('/message', (request, response) => {
    Response.success(request, response, "Actualizando el mensaje.");
});

router.delete('/message', (request, response) => {
    Response.success(request, response, "Eliminando el mensaje.");
});

router.options('/message', (request, response) => {
    Response.success(request, response, "Configuraciones del mensaje.");
});

// Uso de Archivos estaticos.
app.use('/app', express.static('public'));

// Configuración del puerto.
app.listen(3000);

// Mensajes por consola.
console.log('App en http://localhost:3000/');