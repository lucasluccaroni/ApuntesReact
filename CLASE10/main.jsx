//- CLASE10 - EVENTOS

import { useEffect, useRef } from "react";


//-EVENTO
//Estimulo programatico, a partir de ese evento se genera una accion.
//Estimulo que se le da a la interfaz y a partir de eso ocurre algo.
//Los ejecuta el usuario. Los eventos tambien pueden ser generados de forma automatica (sin interacción del usuario).
//*Ej: un deslog por tiempo de inactividad (un setTimeOut()). → automatico
//*EJ: Un input o un submit de un form, un click, etc.        → manual




//-CUSTOM EVENTS
//Eventos en los cuales podemos definir que el objeto de ese evento dispare la informacion que nosotros queramos.




//- EVENT LISTENER
// Para escuchar un evento tengo ue agregar un escuchador de eventos a algun elemento de mi interfaz, para definir una accion en consecuencia.

//? CONFIGRUACION DE EVENTLISTENER
//El evento debe estar codeado DENTRO de un useEffect, porque todas las acciones que defina aca adentro se van a realizar una vez montado el componente. Si quiero manipular el elemento con un eventlistener previo al montaje del mismo, no voy a poder.




//- useRef()
//Es un hook que lo que devuelve, un objeto una referencia mutable.
//Esta propiedad la voy a buscar mutar para guardar algun valor que no este relacionado con lo que se esta mostrando en la interfaz.
//*Ej: Algun valor para hacer un calulo, etc.

const referencia = useRef()
console.log(referencia)    // {current: undefined}
ref.current = 10
console.log(referencia)  // {current: 10}

//Se guarda el valor en la propiedad "current"

//!ESTE VALOR LO QUE TIENE DE IMPORTANTE ES QUE PERSISTE RENDER TRAS RENDER. NO SE BORRA CON LA ACTUALIZACION DE LA PAGINA (MIENTRAS ESTE VIVO EL COMPONENTE)
//SI SE DEMONTA EL COMPONENTE, MUERE.


//? prop "ref"
//Dentro de un componente, puedo pasarle la prop "ref" para que React me inserte dentro de la prop "current" el componente. Como si fuera un "getElementById"
//*EJ: 
//* const buttonRef = useRef()
//* <button ref={buttonRef} >  Click </button>
//* console.log(buttonRef.current)   → tengo el boton


//? COMO AGREGARLE UN EVENTLISTENER Y SU LIMPIEZA AL ELEMENTO
// Siguiendo el ejemplo de arriba:
useEffect(()=>{
    const handleClick = () => console.log("hice click")

    boton = buttonRef.current
    boton.addEventListener("click", handleClick)


    return () => {
        boton.removeEventListener("click", handleClick)   // FUNCION DE LIMPIEZA, TIENE QUE PASARSE LA ACCION ESCUCHADA Y LA MISMA FUNCION DE ACCION.
    }
}, [])


//! DUDA - COMO CAMBIAR CON ADDEVENTLISTENER + USE STATE UN ESTILO DE CLASSNAME.



//- getBoundingClientRect()
// Metodo que permite obtener la posicion de un elemento.
