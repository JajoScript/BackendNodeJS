// Creación de funciones.
function addMessage(user, message) {
    // Utilizacion de promesas.
    return new Promise((resolve, reject) => {
        if(!user){
            console.error("[ERROR]", "Usuario no encontrado.");
            return reject('Usuario no encontrado.');
        }
        else if(!message){
            console.error("[ERROR]", "Mensaje no encontrado.");
            return reject('Mensaje no encontrado.');
        }
        else {
            // Estructura del mensaje.
            const fullMessage = {
                user: user,
                message: message,
                date: new Date()
            };
            
            console.log(fullMessage);
            resolve(fullMessage);
        }
    });
    
}

module.exports = {
    addMessage,
}