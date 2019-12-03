exports.success = (request, response, message, status) => {
    // Respuesta enviada al usuario.
    response.status(status || 200).send({
        "error": "",
        "message": message,
    });
}

exports.error = (request, response, message, status, details) => {
    // Registro de lo sucedido.
    console.log(details);

    // Respuesta enviada al usuario.
    response.status(status || 500).send({
        "error": message,
        "message": "",
    });
}