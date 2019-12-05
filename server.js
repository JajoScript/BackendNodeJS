// Importación de modulos.
const express = require('express');

// Creación de la aplicación.
const app = express();
const server = require('http').Server(app);

const bodyParser = require('body-parser');
const socket = require('./socket');
const router = require('./Network/routes');
const db = require('./db');

// Conexion con la base de datos.
db("mongodb+srv://jajoscript:1234@cluster0-1ojwl.mongodb.net/Telegrom?retryWrites=true&w=majority");

// Añadir configuración con body-parser.
app.use(bodyParser.json()); // Agrega el uso de json.

// Inicializar socket.
socket.connect(server);

// Añadir router a la aplicación.
router(app);

// Uso de Archivos estaticos.
app.use('/app', express.static('public'));

// Configuración del puerto.
server.listen(3000, () => {
    // Mensajes por consola.
    console.log('App en http://localhost:3000/');
});