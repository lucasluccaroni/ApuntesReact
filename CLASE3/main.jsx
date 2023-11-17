// CLASE 3 - FUNCIONAMIENTO Y CARACTERISTICAS DE JSX



// STYLING EN JSX
// Esto es para usar estilos en linea, dentro del archivo JSX sin tener uno aparte de CSS
// Los estilos se definen a traves de un objeto
// Se reemplazan las comillas para nombres compuestos de propiedades CSS por camelCase
// Los numeros se pasan directo sin "px"

let estilos = {
    borderColor: "#456",
    paddingTop: "10"
}

//El objeto stlyes se pasa al ATRIBUTO style que tiene la etiqueta, y asi se efectua el CSS definido dentro del objeto en la etiqueta
const jsx = (
    <div style={estilos}>
        Hola Coders
    </div>
)


//Los estilos tambien se pueden modificar inLine dentro del mismo atributo, con doble llave {{}} y siguiendo las reglas anteriores.
//La primer llave {} es para avisarle a JSX que lo que se va a escribir ahi dentro es JS puro. Luego la segunda llave {} es para escribir el objeto con propiedad: valor
const Saludo = () => <p style={{marginLeft: 15}}> Hola Mundo </p>



// REGLAS GENERALES
//Si el elemento / etiqueta no tiene hijos, debe ser idealmente auto-cerrado

// // <img src="" alt="" /img> ← No esta mal, es mejorable
// <img src="" alt="" /> ← FORMA CORRECTA. generalmente se autocompleta solo, pero es para tener en cuenta



// CLASES
//Las clases van a estar definidas con el atributo className (Class es palabra reservada para crear clases en Js)
//Se definen como cadena de caracteres

//EJ:
const ejemplo = (
    <div className= "contenedor">

    </div>
)



// EVENTOS DEL DOM / PROPIEDADES DE CSS / NOMBRES DE VARIABLES / FUNCIONES
// Tambien se van a escribir con camelCase
//Ej: onClick, onChange, onKeyDown, paddingTop, saludarPersona(), etc.




//COMPONENTES
//Dentro de la carpeta "src" se crea la carpeta "components"
//Ahi van a estar todos los componentes del proyecto
//Cada componente va a tener su propia carpeta y el nombre de la misma es la del componente en camelCase CON LA PRIMER LETRA MAYUSCULA - Component
//Cada carpeta va a tener un archivo .jsx y su nombre es el del componente en camelCase CON LA PRIMER LETRA MAYUSCULA - Component.jsx
//Tambien va a haber un archivo de estilado .css por cada componente. El nombre es Component.module.css





/*
REPASO CLASE 3

main.jsx  -> Punto de conexion entre DOM real y VirtualDOM. 
App.jsx   -> Componente principal a partir del cual se va a generar el Virtual DOM





*/


