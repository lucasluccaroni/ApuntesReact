//- CLASE11 - CONTEXT
//-Haciendo el estado para el CartWidget

import { createContext, useContext } from "react"

// [cart, setCart]
// funcion addItem() en App.jsx




//-CONTEXT
//Funcionabilidad de React. Es como una "API". Es una interfaz que me permite conectar componentes. (API Context)
//Permite envolver un conjunto de componentes a los cuales yo les quiero permitir el acceso aun dato. Estos componentes envueltos van a poder acceder a este dato desde dentro, a traves del hook "useContext()".
//Consta de 3 pasos.
//*Ej:    const CartContext = createContext()
//Al no ser un componente ni un hook, el mismo se puede crear incluso fuera del componente, tenerlo en un modulo y trabjarlo por fuera del compoennte


//? Provider
// El componente Provider va a ser el cual va a envolver a los componentes que yo quiera que compartan los datos. Este componente va a tener una props y ahi va a estar el valor a compartir.
//*Ej:    <CartContext.Provider  value={valorACompartir} /> 
//!Cualquier elemento que se encuentre envuelto por Provider puede accecder a este dato que esta en props a traves del hook "useContext()"


//? Creacion de context
//1) Crearlo
//*Ej:
const CartContext = createContext()

//2) Envolver los componentes con el .Provider
//*Ej:
return(
    <>
        <CartContext.Provider value={"Valor de prueba"} >
            <NavBar />
            <Componente1/>
            <Componente2/>     
        </CartContext.Provider>
    </>
)

//3) Consumir este dato en algun componente (clase11 min 33)
//Al poder crear muchos Context, al momento de usar el useContext() dentro de un componente para consumir el dato compartido, tengo que especificar de qué context es el dato. Para eso usamos la referencia con la que declaramos el context
//*EJ: (estoy dentro de un componente envuelto dentro del Provider, por ejemplo ItemDetailContainer.jsx )
const value = useContext(CartContext)
console.log(value);


//! PARA PASAR VARIAS FUNCIONES + OTROS VALORES POR UNA PROP SE METEN LAS REFERENCIAS (SIN LOS PARENTESIS, DENTRO DE UN OBJETO)


//-clase  1.57 BREAK