//CLASE6 - PROMESAS

//Las promesas son un objeto que sigue el estado de una accion.
//Los estados de una accion pueden ser:
//1) Pendiente
//2) Confirmado / Completado
//3) Rechazado
//SIEMPRE USAR .CATCH

//La promesa define instanciando la clase Promesas. La promesa recibe una funcion de callback y envuelvo la accion que desea controlarse.
//A partir del estado que tenga la accion que se esta ejecutando, voy a tener quie elegir diferentes acciones.

//SINTAXIS
/* const promesa =()=>{
    return new Promise ((resolve, reject)=>{
        resolve("HOLA")
        reject("CHAU")
    })
} */
//console.log(promesa())

//En algun momento se tiene que definir si la promesa va a pasar del estado "pendiente" a "confirmado" o "rechazado". El cambio de estado lo puedo hacer con dos funciones que se reciben como parametro de la funcion de callback que yo le paso a la Promesa. Son "resolve" y "reject".




//RESOLVE
//El resolve es la funcion que tengo definida dentro de la promesa para cambiar el estado de la misma. El metodo .then() se ejecuta cuando esta funcion hace el cambio de estado de la promesa.




//REJECT
//Reject es la funcion que le cambia el estado a la promesa, de pendiente a rechazado, y le da un valor.
//El reject no es un error, es una respuesta (min 28:30)




//.then() y .catch()
//A partir del cambio del estado de la promesa, tengo que realizar las siguientes accciones. Uno escribe el codigo definiendo ya que va a pasar si se resuelve o se rechaza la promesa. Ahi entran los metodos especiasles .then() y .catch()
//Estas dos funciones se pueden ejecutar a partir del objeto promesas. (MIRAR EJEMPLO RESTAURANTE)




//.then()
//Dentro del método .then() puedo definir los dos caminos que se van a tomar de acuerdo al cambio de estado de la promesa.
//1) La primera que se le pasa es la que va ejecutarse cuando se resuelva correctamente la promesa, y voy a recibir el valor que se esta resolviendo como parametro de esta funcion .then().
//El metodo then se ejecuta cuando la funcion "response()" hace el cambio de estado de la promesa. Hasta que response no se ejecute, nunca se va a ejecutar el .then()

//EJ:
// promesa().then((res)=>{
//     console.log(res)
// })


//El metodo .then permite pasar otra funcion en el 2do argumento, y esta 2da funcion se va a ejecutar cuando la PROMESA ES RECHAZADA.

//EJ:
// promesa().then((res)=>{
//     console.log(res) //1era funcion paara el caso de promesa confirmada

// }, (response)=>{   //2da funcion para el caso de promesa rechazada
//     console.log(response)
// })




//.catch()
//el metodo catch atrapa errores.
//El .then sirve para definir los dos caminos que puede tomar la promesa (confirmado o rechazado), pero frecuentemente se suele usar el .then para el camino confirmado y el .catch para el camino rechazado. Esto se hace porque es mas facil de leer que el .then es para lo que se resuelve bien y el .catch es para lo que se resuelve mal. 

//Si yo no defino el 2do camino el el .then (el rechazado), si o si lo necesito poner el el .catch para que "atrape" ese error que va a saltar en consola y que el codigo siga funcionando.
//Si no defino el segundo camino con el .then, eso para Js es un error, por lo que tengo que agregar un metodo catch para que atrape el error. El error que lee Js es que yo no tengo una solucion para manejar un "reject" de la promesa (un 2do camino)
//EL CATCH DEBERIA ESTAR SIEMPBRE, LO QUE SE PUEDE SACAR ES LA 2DA FUNCION DEL .THEN

//EJ:
// promesa().then((res)=>{
//     console.log(res) //1era funcion paara el caso de promesa confirmada

// })
// .catch((error) =>{
//     console.log(error)
// })




//.finally()
//Metodo que se utiliza para definir instancias que van a ocurrir ya sea que la promesa se resuelve correctamente o se rechace.

//EJ
// .finally(()=>{
//     console.log("accion a ejecutar");
// })



//setTimeout()
//Funcion que sirve para retrasar una accion por un tiempo determinado.

//Sintaxis:
setTimeout(()=>{
    return "hola" //Accion que queremos ejecutar luego de que pase el timepo establecido
},1000) //Establecemos el tiemo de espera en el 2do argumento (en milisegundos)





//EJEMPLO RESTAURANTE PROMESAS

const IrAlRestaurante = () =>{
    return "llegue al restaurante"
}

const sentarse = () =>{
    return "me sente"
}

const pedirComida = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("recibo comida")
            //reject("No hay comida") 
        },2000)
    })
}

const comer = () =>{
    return "termino de comer"
}

const pagar = () =>{
    return "pague"
}

const irse = () =>{
    return "me fui"
}


console.log(IrAlRestaurante());
console.log(sentarse());

pedirComida()
.then((response)=>{
    console.log(response)
    console.log(comer());
    console.log(pagar());
}, (response)=>{
    console.log(response);
})
.catch(error =>{
    console.log(error)
})
.finally(()=>{
    console.log(irse())
})



//.fecth()
//Es una promesa que ya esta escrita dentro del navegador, y se usa para comunicarse con APIs y hacer request de datos.
//Metodo nativo del navegador.
// Devuelve una promesa. Dentro del fetch hay un response y un reject que nosotros no vemos en el cual hay una comunicacion con la API para definir si nos trae o no lo que nosotros solicitadmos.

//console.log(fetch("")) 




//MOCK
//El mock sirve para simular el llamado a una API
//Es una "maqueta". Es una funcion que permita obtener datos como si fuera un "llamado a la API".




// CREACION DE CARDS
//Con el método .map() se puede transformar el array de productos que nos devuelve el Mock para crear nuestras cards e impactarlas en el VIRTUAL DOM.

//EJ:

const productsComponents = products.map(product => {
    return(
        <div>
            <h2> {product.name} </h2>
            <h2> {product.price} </h2>
        </div>
    )
})