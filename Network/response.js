exports.success = (request, response, message, status) => {
    response.status(status || 200).send({
        "error": "",
        "message": message,
    });
}

exports.error = (request, response, message, status) => {
    response.status(status || 500).send({
        "error": message,
        "message": "",
    });
}