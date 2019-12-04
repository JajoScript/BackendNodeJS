// Importación de modulos.
const db = require('mongoose');

db.Promise = global.Promise;

// Conexion con la base de datos.
// mongodb+srv://jajoscript:1234@cluster0-1ojwl.mongodb.net/Telegrom?retryWrites=true&w=majority
async function connect(url) {
    await db.connect(url, {
        useUnifiedTopology: true,
        useNewUrlParser : true
    });
    console.log('[DB] Conectada con exito.')
}

module.exports = connect;
