//CLASE5 - COMPONENTES II
const { useState } = require("react")


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