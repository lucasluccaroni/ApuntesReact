//CLASE 4 - COMPONENTES I

import { useState } from "react"



//CARACTERISTICAS DE COMPONENTNTES
//Un componente es un conjunto de elementos que cumplen una funcion específica en la interfaz del usuario.
//Basados en funciones.
//Pueden recibir propiedades (props).
//Pueden tener estados.
//Se escriben con la primer letra mayuscula.
// Cada componente puede renderizar UN UNICO elemento. Solo retorna UNA funcion (que retorna un solo valor).
//Definir qué responsabilidades debe tener cada componente es una cuestión de criterio. 
// Lo ideal es que:
//1) Resuelvan UN problema
//2) No mas de 5 props por componente. Si necesitas mas, el componente se puede dividir en dos o mas componentes (está mal creado).




//SIMULACION DE COMPONENTE APP
const App = () =>{
    return <div>
        <Button label={'Celulares'} />
        <Button/>
        <Button/>


    </div>

}



//CREACION DE COMPONENTE
const Button = (props) =>{
    return <button>Boton</button>
}

export default Button




//PROPS
// Se utilizan para pasar datos de un componente padre a un componente hijo, para que ese hijo los pueda utilizar dentro.
//Las props se escriben dentro del parametro del componente.
//El parametro recibe un objeto. Las props son objetos
//Las props se pasan como atributos del componente, dentro de la etiqueta del mismo ubicada en el componente padre.
//Se puede pasar cualquier tipo de dato por props. Boolean, string, number, array, function, etc.
// Si quiero ejecutar un evento que sea diferente en cada componente repetido, la funcion que ejecuta el evento se PASA POR PROPS, no tiene que estar dentro del componente.  

//Ej:
/*
<Button label={"telefonos"} />

"label" se pasa como un atributo del componente. No es un atributo nativo del componente, como "className", "style", etc. Lo inventamos nosotros. ESTAS SON LAS PROPS.
LA PROP ES INVENTADA, PUEDE LLAMARSE COMO QUIERA.

<Button label={"tables"}/>
<Button label={"notebooks"}/>
*/


//PROPS Y CSS
//Tambien se puede pasar por props una clase, la cual puede contener estilos en CSS.




// RESPONSABILIDAD DEL COMPONENTE
//Por convencion, a un componente se le suelen pasar hasta 5 props. Si tengo que pasarle mas de 5, significa que mi componente esta asumiendo mas responsabilidades de las que debe. Un componente debe resolver UN problema. Si tiene mas de 5 props, ese componente esta haciendo cosas de mas.
//En este caso, deberia dividir en dos o mas el componente porque está mal diseñado.
//Que es un componente y que no es un componente, va a criterio de cada uno.




//FRAGMENT
//Cumple con la funcion de elemento padre, sin modificar el arbol del DOM. Es un ladrillo comodin para encapsular el componente, en vez de usar un <div>. Me permite retornar un unico elmento. Es para que no querde un div dentro de un div dentro de un div.
//OJO AL APLICAR ESTILOS DE CSS COMO "DISPLAY FLEX", PORQUE NO ES UN DIV




// DESESTRUCTURACION DENTRO DE PARAMETROS
//Es clave
//Buena guia visual
//Buena practica




// ESTADOS
//Es el lugar de los componentes donde voy a guardar los valores que al cambiar se deben ver actualizados en la interfaz.
//Un estado es el lugar donde voy a guardar aquellos datos que su actualizacion se debe ver reflejada en la interfaz. Si hay un dato que no aparece en la interfaz y  no interfiere en la visualizacion, NO va a ir a un estado.
//Es una funcionabilidad de un componente de React. No es parte de Js.
//DATO QUE CAMBIA LA INTERFAZ, DATO QUE VA A UN ESTADO.




//HOOKS
//Se importan de la libreria de React.
//Enganchan funcionabilidades de componentes a mis funciones de mi componente.
//Los ejecuto siempre arriba de todo en la funcion, es lo primero. Buena practica y facil de leer.
//Comienzan con el prefijo "use".
//Solamente se pueden utilizar dentro de componentes funcionales.
//Deben ejecutarse siempre. No pueden estar dentro de un "if" o un "for" porque eso no me asegura que se ejecute siempre. Por eso siempre se ejecutan al principio de la funcion + ayuda visual.



//useState
//Devuelve un array de dos elementos.
//1) Es el valor del estado, el valor actual del estado. El valor que tengo que guardar para que frente a su cambio, se actualice la interfaz. Lo voy a tener ahi
//2) Es la funcion que me pertime cambiar el valor del estado. Esta funcion es la que inicializa el Render.

//Estos conceptos, sumados a la desestructuracion, me permiten implemetar hooks de manera eficaz a mis componentes

//Ej de useState:

useState() // -> Devuelve un array de 2 elementos, el 1ero un valor y el 2do una funcion

const [elemento, setElemento] = useState() // -> Mediante la desestructuracion, le asigno nombres a los elementos del array para luego usarlos en mis funciones y componentes.

//Por convencion, el 2do elemento(la funcion) se llama "set + Nombre del 1er elemento"
//"elemento" solo se puede modificar usando la funcion "setElemento"


// MAS INFO DE HOOKS Y ESTADOS EN VOD CLASE4, 1hora (postBreak)




// PREV
//prev es el estadio previo a la actualizacion luego de un cambio en el estado de una funcion. Es buena practica usarlo.

//Ej:
setCount(prev => prev + 1)     // MAS INFO EN 1:30hs CLASE4




//COMPONENTES DE PRESENTACION
//Orientados al aspecto visual (clases, librerias de estilos, etc. Este tipo de datos van a contener)
//No tienen logica de estado.
//Solamente se van a encargar de darle forma a la presentacion del dato. El dato a mostrar lo va a recibir por props.
//Como no tienen logica de nuestra aplicacion dentro, se pueden reutilizar.
//No deberian contener componentes contenedores dentro.


//COMPONENTES CONTENEDORES
//Orientados al funcionamiento de la aplicacion.
//Contienen logica de estados.
//Se encargan de pedir los datos a mostrar, los guardan a un estado para generar la actualizacion de la interfaz y se lo pasan al componente de presentacion.
//Se comunican con fuentes de datos (API, Flux, etc.)
//Tienen el proposito de contener a todos los componentes de presentacion, o algun otro componente contenedor.
