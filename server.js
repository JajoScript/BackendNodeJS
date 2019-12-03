// Importación de modulos.
const express = require('express');

// Creación de la aplicación.
var app = express();

// Utilización de las rutas.
app.use('/', (request, response)=>{
    response.send('Hola');
});

// Configuración del puerto.
app.listen(3000);

// Mensajes por consola.
console.log('App en http://localhost:3000/');