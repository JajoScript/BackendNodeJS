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

### Uso de Querys en las peticiones
Ejemplo con la siguiente ruta:

` localhost:3000/message?orderBy=id&nombre=javier`

las querys serian:
- orderBy
- nombre

y sus valores:
- id
- javier

***
## Creacion de Headers personalizados.

    response.headers({
            "custom-header" : "custom-value",
    });

Con la linea anterior podemos enviar como respuesta una cebecera personalizada, para enviar información.

***
## Tipos de respuesta: Vacía, Plana, Con datos y Estructurada.

La respuesta más simple es usando una respuesta **plana** con:

    res.send("Todo esta funcionando");

lo que mostrara por pantalla el mensaje que estemos enviando.

Se puede mandar una respuesta **Vacia** con:
    
    res.send();

No resultara en error, pero se tiene que tener en cuenta que de cualquier modo se enviara la cabecera con cierta información, lo cual es muy util en ciertos casos.

Al igual que se puede enviar un **numero de estatus** con:

    res.status(201).send();

Los numeros de estatus son un estandar que ayuda a comprender mejor el resultado de la petición que hicimos al servidor, como el ya conocido **404: not found.**

Del mismo modo podemos enviar **datos estructurados** con:

    res.send({
        'Error': '',
        'Body': "Actualizado correctamente."
    });

El usuario recibira como respuesta un objeto estructurado con la información proporcionada por el servidor.

Podemos combinar cualquiera de los tipos de respuesta anteriores para entregar información concreta.

***
## Uso de Archivos estaticos.
Los archivos estaticos pueden ser HTML, CSS, JS.
los cuales se muestran en la pantalla y es todo lo correspondiente al frontend developer.
Utilizando la siguiente linea:

    app.use('/app', express.static('public'));

Configuraremos la aplicación para que utilice los archivos estaticos de la carpeta *public*, esta carpeta puede utilizar el nombre que tu quieras, pero es un estandar utilizar el nombre de *public*.

***
## Mocks
Es una simulación de la base de datos.

***