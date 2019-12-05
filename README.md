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
## Bases de datos.
MySQL, la más popular y utilizada por su feel con PHP, MySQL es una base de datos relacional, de relaciones.

Las BD relacionales, se basan en tablas, tienen columnas y filas con sus datos relacionados entre si, al ser BD tan grandes, estas BD no escalan y la capacidad de computo se ven afectada por la relacion entre cada tabla.

Las BD no Relacionales, no crear relaciones y sirven con documentos, hay excepciones que si crear relaciones entre documentos sin dejar de ser escalable, como por ejemplo MongoDB.

### Conectar con MongoDB Atlas.
MongoDB Atlas es un servicio cloud para la gestion y produccion con mongodb.

#### MongoDB URI.
La URI de Mongo DB tiene este aspecto:

    mongodb+srv://DB_USER:DB_PASSWORD@DB_HOST/DB_NAME

Todo esto, la clave, el host, el usuario y el nombre seran representados en variables de entorno para que en el momento de necesitar un cambios, se pueda hacer de manera rapida y sencilla.

***
### Uso de parametros en las URL
Podemos pedir como datos usando parametros en las url, los que traeran dichos datos desde la base de datos, como por ejemplo:

    http://localhost:3000/message/5de74e47727ce4241881db08

En el siguiente ejemplo estamos mandando en la url el valor de un id guardado en nuestra base de datos.

Para recibirlo en nuestra ruta utilizamos:

    router.patch('/:id', (request, response) => {
        console.log(request.params.id);
        response.send('ok');
    });

En este ejemplo estamos usando una ruta *patch* para modificar un dato, dato el cual reconoceremos mediante su *id* (identificador unico) nuestro parametro es *:id* el cual es utilizado en la ruta.

    console.log(request.params.id);

Usando **request.params.id** es que podemos tener el dato entregado por la url.

***
### Manejo de archivos.
Muy lindo y todo el utilizar texto para mandar mensajes, pero a veces en necesario mandar una foto, un video, un pdf. Todos estos archivos terminan convirtiendose en texto el cual podemos manejar utilizando un packete externo llamado **Multer**.
Lo instalamos con el comando: 

    $npm i multer

Multer permite el manejo de archivos de manera sencilla en el disco.

Para poder crear una instancia de Multer utilizamos las siguientes lineas de codigo.

    const upload = multer({
        dest: 'uploads/',
    });

En este ejemplo estamos utilizando *upload* como nuestra instancia de *Multer*, le pasamos como parametro *dest*(que hace referencia a *destino*) y como valor *'uploads/* haciendo referencia al directorio donde queremos guardar dichos archivos.

Luego de esto es necesario utilizar *Multer* como un MiddleWare de Express como en el siguiente ejemplo.

    router.post('/', upload.single('file'), (request, response) => { ... };

Tan sencillo como pasarlo de parametro en la función, para que *multer* sepa de donde sacar el archivo agregamos el metrodo **.single()** y que el archivo se llama **'file'**.

***
### WebSockets.
¿Que son los webSockets?
Protocollo de información masivo WebSockets, distinto a HTTP, informacion en tiempo real, se crea un tunel de información **wss://** desde el cliente y el servidor.

En el momento de llegar información nueva, el usuario envia la nueva información por el tunel, es un tunel reciproco, por lo que cuando el usuario tenga información nueva igual puede enviar esa información a traves del tunel al servidor. 

***
### tips para escalar nuestro proyecto.
Para diferentes instancias ya sea produccion o desarrollo, tener un archivo de configuraciones.

Configurar el puerto como una variable de entorno.

Configurar el host como una variables de entorno.

Configurar el directorio de la aplicación como variable de entorno.

En Sintesis, todos los datos que camien, guardarlas en variables de entorno.

Setear variables por defectos en caso de que algo salga mal.