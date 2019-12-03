// Importación de modulos.
const express = require('express');
const bodyParser = require('body-parser');

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
    console.log(request.body);
    console.log(request.headers);
    response.header({
        "custom-header" : "custom-value",
    });
    console.log(request.query);
    response.send("Lista de Mensajes.");
});

router.post('/message', (request, response) => {
    response.send("Mensaje Añadido.");
});

router.patch('/message', (request, response) => {
    response.send("Mensaje Modificado.");
});

router.put('/message', (request, response) => {
    response.send("Mensaje Actualizado.");
});

router.delete('/message', (request, response) => {
    console.log(request.body);
    console.log(request.query);
    response.send("Mensaje Eliminado.", req.body.text);
});

router.options('/message', (request, response) => {
    response.send("Opciones de Mensajeria.");
});

// Configuración del puerto.
app.listen(3000);

// Mensajes por consola.
console.log('App en http://localhost:3000/');