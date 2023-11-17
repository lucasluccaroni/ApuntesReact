// CALSE 3
// SUGAR SINTAX



//OPERADOR TERNARIO
// const edad = 24
// console.log(edad > 26 ? "pase" : "no pasas");



//SPREAD OPERATOR
//const nums1 = [1,2,3,4]
// const nums2 = [1,2,3,4]
// console.log(nums1 === nums2); //NO SON IGUALES. CADA VEZ QUE SE ABREN CORCHETES, EL ARRAY ES OTRO POR MAS QUE TENGA LO MISMO ADENTRO
// const nums3 = nums1 // ESTO NO ES UN ARRAY NUEVO, ES UNA FLECHA QUE APUNTA A NUMS1
// console.log(nums3 == nums1); //true


//forma incorrecta
// const nums2 = nums1.push(5)
// console.log(nums2);

//forma incorrecta
// const nums2 = nums1
// nums2.push(5)
// console.log(nums2);
// console.log(nums1);

//forma correcta
// const nums2 = nums1.concat(5)
// console.log(nums2);
// console.log(nums1);

//forma correcta
// const nums1 = [1,2,3,4]
// const nums2 = [...nums1, 5]

// console.log(nums1);
// console.log(nums2);



// SPREAD OPERATOR CON OBJETOS
// const persona1 = {
//     nombre: "Lucas",
//     edad: 24
// }

// const persona2 = {
//     ...persona1,
//     nombre: "Eduardo"
// }

// console.log(persona1);
// console.log(persona2);


// DESESCTUCTURACION DE OBJETOS
// const persona1 = {
//     nombre: "Lucas",
//     edad: 24
// }

// const persona2 = {
//     ...persona1,
//     nombre: "Eduardo"
// }



// DESESTRUCTURACION DE PROPIEDADES
// const {nombre: nombrePersona1, edad: edadPersona1} = persona1
// const {nombre: nombrePersona2, edad: edadPersona2} = persona2

// console.log(nombrePersona1);
// console.log(nombrePersona2);
// console.log(edadPersona1);



// DESESCTRUCTURACION ARRAYS
// const  nums1 = [19,24,33,44]

// const [edadMatias, edadLucas] = nums1

// console.log(edadMatias);
// console.log(edadLucas);



//PROPIEDADES DINAMICAS
// const variable = 1

// const persona = {
//     ['nombre' + variable]: "Lucas"
// }

// console.log(persona.nombre1);




//RETROCOMPATIBILIDAD Y POLYFILLS

Number.prototype.multiplicar = function (number) {  //AHORA EXISTE EL METODO MULTIPLICAR EN MI CODIGO
    return number * this
}

const num1 = 5

const result = num1.multiplicar(10)
console.log(result);


