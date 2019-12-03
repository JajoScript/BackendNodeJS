// Importación de modulos.
const express = require('express');

// Creación de la aplicación.
var app = express();

// Instanciación del router.
const router = express.Router();

// Añadir router a la aplicación.
app.use(router);

// Utilización de las rutas.
router.get('/message', (request, response) => {
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
    response.send("Mensaje Eliminado.");
});

router.options('/message', (request, response) => {
    response.send("Opciones de Mensajeria.");
});

// Configuración del puerto.
app.listen(3000);

// Mensajes por consola.
console.log('App en http://localhost:3000/');