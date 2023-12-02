//CLASE5 - COMPONENTES II
const { useState, useEffect } = require("react")


//CHIDREN (min09)
//Una manera que tiene React de permitirme pasarle componentes a otro componente, para que se utilicen dentro.
// Lo podemos usar cuando necesitamos que un componente quede adentro de otro, y que ese componente "que envuelve" pueda luego ser reutilizado.
//Es como un "marco" de un cuadro, y lo que esta adentro puede cambiar. Puedo utilizarlo en diferentes partes, cambiando el componente que esta en el centro. Ese componente que le paso al componente "marco" se lo va a considerar y va a estar en la propiedad CHILDREN.
//REUTILIZAR EL MARCO Y CAMBIAR EL CENTRO.

//Ej:
const Layout = (props) =>{   /* Apliccaion en proyecto de prueba, componente "Layout" */
    console.log(props)

    return(
        <div>
            <h1> {props.title} </h1>
            {props.children}
        </div>

    )
}

const App = () => {
    return(
        <div>
            <Layout title="Titulo 1" >
                <p> Este parrafo se mostrará dentro de componente Layout. Es el children1</p>
            </Layout>

            <Layout title="Titulo 2">
                <p> Children 2</p>
                <p> Children 2</p>
            </Layout>

            <Layout title="Titulo 3">
                <button>Children3</button>                
            </Layout>
        </div>
    )
}

//ESTOS COMPONENTES QUE SE ESTAN ENVOLVIENDO. SE INSERTAN AUTOMATICAMENTE EN LA PROP "CHILDREN".
//CUANDO INSERTO MAS DE UN ELEMENTO EN CHILDREN (caso children 2) EL CHILDREN ES UN ARRAY. CUANDO ES 1 ELEMENTO ES UN OBJETO.




//CICLOS DE VIDA DE COMPONENTES
//Los componentes tienen un ciclo de vida: MONTAJE → ACTUALIZACION → DESMONTAJE
//Al finalizar el ciclo de vida, y el componente se desmonta, todos sus hijos se desmontan junto con el (Es como cortar una rama de un arbol y todas las ramas pequeñas que salen de él caen junto con la rama)
//Cuando nace y cuando se actualiza, pasa lo mismo, todo se distribuye hacia abajo, a los hijos.




//OPERADOR TERNARIO DENTRO DE COMPONENTES
//Se puede usar para poner condiciones a las funciones de los componentes, como tambien para alterar su cilco de vida.

//Ej:
const [show, setShow] = useState(false)  // El estado base es "false"

return(
<div>
    <button onClick={() => setShow(show => !show)}>  Mostrar/No mostrar </button> {/* Al hacer click en el boton, el estado de "show" pasa a ser lo inverso a su estado(false), o sea TRUE */}
    {show ? <Layout/> : null} {/* mediante el uso de ternario, doy la condicion de que si "show" es TRUE, se muestre el componente, y si es FALSE, que muera el componente */}
</div>  
)


//EXPLICADO MIN 40
{show && <Layout/>} // El doble amperson (&&) en ternario seria un "if" sin "else". (Condicion a cumplir && accion si se cumple)
{show ? <Layout/> : null} // Condicion a cumplir ? accion si se cumple : else




//RENDER
//El funcionamientod e react se basa en el cambio de estado.
//Un cambio de estado lo que hace es avisarle a react que tiene que volver a generar una version de Virutal DOM para sincronizarla con el DOM REAL. Este proceso se llama "Render".
//El "Render" es la ejecucion de las funciones de componentes desde donde ocurrió el cambio de estados y a todos sus hijos.
//Estos componentes son objetos que forman el Virtual DOM.




//RECONCILIACION
//Es la sincronizacion entre el Virtual DOM y el DOM real.




//HOOK useEffect
//Hook que nos permite controlar los efectos secundarios provocados por cambios de estados.
//Normalmente se utiliza para sincronizar componentes con sistemas externos (por ejemplo APIs). Tambien un sistema externo puede ser el navegador mismo, en el cual estamos ejecutando nuestra aplicación.
//Este hook no va a retornar nignun valor.

//ARGUMENTOS
//Se le pasan DOS argumentos
//1) Funcion donde se va a contener toda la logica que queremos controlar.
//2) Array de dependencias. En este array vamos a indicar frente a qué estados nosotros queremos ejecutar la 1er función.
//La funcion se va a ejecutar LUEGO de haberse montado el componente.

//SINTAXIS
//1)
useEffect(() => {console.log("HOLA A TODOS")}) // → NO HAY ARRAY 2DO ARGUMENTO(array) - Se sincroniza con todos los estados superiores (no hay array).  
//SI NO DEFINO EL ARRAY DE DEPENDENCIAS ES COMO SI NO ESTUVIERA EL useEffect, no tiene sentido.

//2)
useEffect(() => {console.log("HOLA A NADIE"), []}) // → ARRAY VACIO - No se sincroniza con ningun estado.

//3)
useEffect(() => {console.log("HOLA A VOS/USTEDES")},[estado, estados]) // → ARRAY CON ESTADO/S - Se sincroniza con los estados asignados.


//Ej:
useEffect(()=>{
    console.log("HOLA")
}, [])


//FUNCION DE LIMPIEZA
//El useEffect permite definir en la funcion de callback que yo le paso, un return.
//Esta funcion de limpieza, esta accion se ejecuta al desmontarse el componente. Tambien hace una limpieza antes de volver a ejecutar de nuevo la funcion del efecto. Siempre frente a la ejecución de una accion, voy a tener una limpieza. 1 efecto → 1 limpieza / 2 efectos → 2 limpiezas.

//SINTAXIS
useEffect(() => {
    console.log("HOLA A VOS/USTEDES")

    return() =>{
        console.log("limpieza")
    }
},[estado, estados])

//No siempre se neceista utilizar la limpieza.


//EJERCICIO CONTADOR DE VUELTAS VOD 1:45hs - CLASE 5 - 1:46




//setInterval()
//Funcion que setea la accion que voy a ejecutar cada X tiempo que yo defina.
//Se le pasan DOS argumentos
//1) La accion a ejecutar.
//2) El tiempo, que se define en milisegundos.

//SINTAXIS
setInterval(() =>{
    console.log("hola") //accion a ejecutar
}, 1000) //tiempo (1000 ms = 1s)


//clearInterval()
//A veces es conveniente poner el setInterval() dentro de una variable, por si quiero ejectutar el clearInterval(intervalId).
//Reinicia el intervalo de tiempo
