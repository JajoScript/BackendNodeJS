# Backend con NodeJS

## Ejemplo de uso del enrutador.

    router.get('/message', (request, response) => {
        console.log(request.body);
        console.log(request.query);
        response.send("Lista de Mensajes.");
    });

***

## Body
con la siguiente linea: 

    console.log(request.body);

mostramos por consola la informacion enviada como body.

***
## Headers
con la siguiente linea:
    
    console.log(request.headers);

mostramos por consola la informacion del usuario que se encuentra en la cabecera.

***
## Query
con la siguiente linea:
    
    console.log(request.query);

mostramos por consola la informacion enviada como query.

***

## Uso de Querys en las peticiones
Ejemplo con la siguiente ruta:

` localhost:3000/message?orderBy=id&nombre=javier`

las querys serian:
- orderBy
- nombre

y sus valores:
- id
- javier

===
## Creacion de Headers personalizados.

    response.headers({
            "custom-header" : "custom-value",
    });

Con la linea anterior podemos enviar como respuesta una cebecera personalizada, para enviar información.