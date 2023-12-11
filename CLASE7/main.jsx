//CLASE 7 - Consumiendo API's


//Bajo el modelo "cliente-servidor", quien inicia la comunicacion es el cliente. Cuando el cliente solicita los datos, el servidor envia la respuesta y finaliza la comunicacion. En el medio de todo esto, la comunicacion si esta abierta.

//Hay otras formas de interacmbiar datos.

//-PUSH
//El servicor inicia la comunicacion. Por ejemplo, las notificaciones de aplicaciones, donde nosotros no hacemos nada pero recibimos estas notificaciones. Esto sucede porque primero nosotros nos suscribimos a esa comunicacion y el servidor elije cuando enviarnos estas respuestas.
// " Yo quiero recibir los datos que vos tengas para mandarme."
//Al descargar una aplicacion, nosotros nos suscribimos a este servicio, (sin darnos cuenta).


//-CANAL BIDIRECCIONAL
//Ej: LiveServer
//Tanto desde el cliente (el navegador) como desde el servicor (nuestra PC con el codigo), se envian datos constantemente.




//-REQUEST VIA HTTP/S

//*Protocolo
//Son las pautas que hay que seguir en la cuales todos se ponen de acuerdo para que salga todo bien en la comunicacion. Es una estandarizacion de diferentes procesos.


//*http
/* Este protocolo nos ayuda a realizar una solicitud al servidor.
Esta definido por:

1) Una direccion URL
2) Un verbo: (GET, POST,PUT, DELETE,etc.). Qué accion queremos realizar
3) Diferentes parametros que podemos agregarles a las consulktas
4) Headers, que son confguraciones de esa comunicacion que podemos enviar en diferentes casos
5)Body. Un cuerpo onde insertar los datos que desde el cliente quiero enviarle al servidor a traves de un verbo, por ejemplo.





-VERBOS
Van a identeificar con estas palabras qué es lo que quiero hacer ocn lo que estoy pidiendo, con lo que me estoy comunicando.
Lo puedo leer, lo puedo traer, puedo agregar un nuevo recurso, puedo borrar, etc (POST-PUT-DELETE-GET-etc.)


Con la URL + el verbo voy a apuntar a un recurso y decirle que quiero hacer.

*Ej1:
get/pet/{petId} → Traer una mascota por su ID, en "pet" estarian todas las mascotas.
↓
get/pet/1

*Ej2:
post/pet → subir una nueva mascota


!TODO ESTO VA A ESTAR DEFINIDO EN LA DOCUMENTACION DE LA API.
? PARA SABER COMO COMUNICARSE CON UNA API HAY QUE LEER LA DOCUMENTACION SI O ?SI. NINGUN VERBO REPRESENTA UNA SEGURIDAD O UNA ESTANDARIZACION. CADA API DEFINE LOS VERBOS QUE QUIERE PARA HACER LAS COMUNICACIONES QUE ESTABLEZCA.
*/



//-QUERY PARAMS
// Sintaxis: luego del ? va q=  → ?q=dato.
//Generalmente se usa la "q", pero siempre la definicion final LA PONE LA API. TENGO QUE LEER LA API PARA SABER QUE LETRA/PALABRA/SIMBOLO ESTABLECEN ELLOS COMO QUERY PARAMS. Puede ser, en vez de la "q", la palabra "query", o la palabra "consulta", o una "c". Eso lo definen ellos.

//Se encuentran en la direccion URL, luego del signo de pregunta "?"
//Por protocolo, se utilizan para obtener un dato, para realizar la busqueda de un dato que el cliente TODAVIA NO SABE si existe. Es una consulta por ese dato para saber si está en el servidor.
/*
*Ej:
* google.com/search?q=coderhouse

En este caso, el verbo usado es "search", definido por la API de google, se usa para buscar algun dato. El query params va luego del signo de pregunta terminado el verbo.


Si la request no ecneuntra nada, no significa que sea un error. Simplemente se nos reponde que "se encontraron 0 resultados"; osea que eso que buscamos no está o no existe.
*Ej: google.com/search?q=qewjkqewkdaml,nasdlaskj

La comunicacion ocurrió correctamente y me devolvió 0 resultados.
*/

//? SIMBOLOS DENTRO DE QUERY PARAMS
// "?": Se para la URL de los parametros (query params)
// "&". Separa los query params, ya que puedo poner mas de uno si lo necesito y con & los separo.
//Cada parametro tendra key=value
//*EJ: http://url.com/find?type=order&id=1234

//find: verbo establecido por la API para buscar → ? separador → type=order (clave=valor) queryParam → & separador de querys → id=1234 clave=valor) queryParam




//- URL PARAMS
//Son una convencion para incluir el identificador del recurso dentro de la misma URl. Son mas comunes cuando YA SE CONOCE el recurso especifico que se buscará.
//* Ej: https://myapp.coder/student/1234

/* Quiero buscar en la app de coder el estudiante con identificador 1234. Si yo tengo este identificador es porque ya antes hice una cosulta o de algun lado lo saqué. Esto si no existe, me da un ERROR 404. */
//Es un URL PARAM porque estos identificadores no siempre son los mismos, pueden cambiar (1235,222,etc.)
//! TODO LO QUE NO CAMBIA ES URL.




//- RECURSOS RESTFUL
//Cuando sigo todas estas normas, este protocolo, es decir creo un servicio basada y pensado en terminos de recurs, en esta forma de organizar los datos, sigo las convenciones de los verbos o metodos, mantengo correctamente los codigos de respuesta(202,404,etc). Cuando diseño todo ese sistema basjo este protocolo, se lo conoce como un diseño DE TIPO REST. 
//? UN DISEÑO ARQUITECTURAL DE TIPO RESTFUL ES EL QUE APLICA LA ARQUITECTURA REST EN SUS SERVICIOS.
// https://sl.bing.net/d5jLjtv2QnY

//Si ademas transferimos Js o xml, es conocido como //? AJAX.
// https://sl.bing.net/j2qOYcviTmu




//- BODY
//El lugar en donde yo puedo enviar los datos. Se transfieren las piezas de informacion entre el cliente y el servidor.

//*Ej:
/*
POST /create-user HTTP/1.1

Host: localhost:3000           → header
Connection: keep-alive         → header
Content-type: application/json → header

{"name": "Jhon, "age":35}      → body
*/




//-HEADERS
//Se usan para:
//Definir las respuestas soportadas, requeridas o prefericas
//Agregar informacion extra
//Configurar cookies, auth tokens
//Lenguaje preferido
//Si acepta contenido cacheado
//Lo que quieras //? SIEMPRE Y TODO EN FORMA DE TEXTO.




//- PROYECTO FALSO MERCADOLIBRE




//- FETCH
//Funcion para hacer una request a traves del protocolo HTTP.
//Recibe dos argumentos:
//1) URL de consulta
//2) Objeto de configuracion (un objeto)

//1) La URL va entre comillas

//2) Aca se puede configurar:
// method: 'GET',     - El método (GET, PUSH, PUT, DELETE)
// headers{ },        - Un objeto con los headers
// body: ''           - El body, en caso de hacer un POST

//? SI NO LE PASO EL OBJETO DE CONFIGURACION, .fecth() ASUME POR DEFAULT QUE EL METODO ES UN "GET".

//? .fecth() SIEMPRE VA DENTRO DEUN useEffect()




//!Clase 7 - 01:44











//! ASDNASDAS
//? JKASDASAS
//* HJASDJKLA
//- ASDASDASD




