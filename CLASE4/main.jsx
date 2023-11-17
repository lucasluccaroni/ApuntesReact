//CLASE 4 - COMPONENTES I



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




// Desestructuracion dentro de parametros
//CLAVE
//GUIA VISUAL
//BUENA PRACITCA.


//hooks
//los ejecuto siempre arriba de todo en la funcion, es lo primero





//PROPS
// Se utilizan para pasar datos de un componente padre a un componente hijo, para que ese hijo los pueda utilizar dentro.
//Las props se escriben dentro del parametro del componente.
//El parametro recibe un objeto. Las props son objetos
//Las props se pasan como atributos del componente, dentro de la etiqueta del mismo ubicada en el componente padre




//ESTADOS
