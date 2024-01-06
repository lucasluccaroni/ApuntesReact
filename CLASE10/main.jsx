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

    boton = buttonRef.current   // ACA TENGO EL BOTON
    boton.addEventListener("click", handleClick)


    return () => {
        boton.removeEventListener("click", handleClick)   // FUNCION DE LIMPIEZA, TIENE QUE PASARSE LA ACCION ESCUCHADA Y LA MISMA FUNCION DE ACCION.
    }
}, [])


//! DUDA - COMO CAMBIAR CON ADDEVENTLISTENER + USE STATE UN ESTILO DE CLASSNAME.



//- getBoundingClientRect()
// Metodo que permite obtener la posicion de un elemento.




//-SYNTHETIC EVENTS
//Son aquellos que nos devuelve React, y estan definidos dentro del JSX (onClick, onSubmit).
// React estandariza estos datos y propiedades para que todos los navegadores devuelvan lo mismo, a pesar de estar desarrollados por empresas y equipos diferentes.
//Todos los eventListener que ponga en el JSX, son eventos que maneja React.
// *Ej: <button onClick{(e)=> console.log(e)}> Haz Click </button>  → muestra en consola "SynteticBaseEvent" (un objeto)
// El que esta manejado en el JSX es sintetico, intevenido por React

//* Ej2: handleClick = (e) => console.log(e) → muestra en al consola "Event" (un objeto)
// El que esta manjeado manualmente es el evento estandar del DOM, lo devuelve el Navegador.




//- e.stopPropagation()
// Es un metodo que sirve para detener la propagacion de un evento hacia los ancestros del componente donde se ejecuta el mismo.




//- COMPONENTES BASADOS EN ENVENTOS
//El objetivo principal va a ser ejecutar un evento. EJ: <ItemCount/>, el cual su proposito es agregar los productos al carrito. Su objetivo es encargarse de manejar ese onClick en el boton.




//- INTERCAMBIABILIDAD / AGNOSTIC BEHAVIOR
// El concepto es intercambiar funcionabilidades en diferentes componentes sin mucho esfuerzo. (VOD CLASE10 01:35 / 01:42)



//-ORIENTACION A OBJETOS
//Permite mover la logica compleja a compnentes de menor orden.
//Si ambos se comportan igual, el parent no lo sabra aunque sus implementaciones sean distintas.
//Permite que el parent se encargue del resultado final sin darle esa responsabilidad a sus children. (CLASE10 - 01:45).

