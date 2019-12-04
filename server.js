// Importación de modulos.
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./Network/routes');
const db = require('./db');

// Conexion con la base de datos.
db("mongodb+srv://jajoscript:1234@cluster0-1ojwl.mongodb.net/Telegrom?retryWrites=true&w=majority");

// Creación de la aplicación.
var app = express();

// Añadir configuración con body-parser.
app.use(bodyParser.json()); // Agrega el uso de json.

// Añadir router a la aplicación.
router(app);

// Uso de Archivos estaticos.
app.use('/app', express.static('public'));

// Configuración del puerto.
app.listen(3000);

// Mensajes por consola.
console.log('App en http://localhost:3000/');