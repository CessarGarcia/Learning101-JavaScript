//Todo: Primera forma de crear una funcion 

// function suma(a,b){
//     console.log("El resultado de la suma es: " + (a+b));
// }

// suma(2,7);


//Todo: Segunda forma de crear una función
// function suma(a,b){
//     return a+b;
// }

// let resultadoSuma = suma(3,5);
// console.log("El resultado de la suma es: " +resultadoSuma);



//Todo: Tercera forma de crear una funcion de tipo expresion
let suma = function(a,b) {return(a+b)};
resultadoSuma = suma(2,5);
console.log(resultadoSuma);

let multiplicar = function(c,d) {return(c*d)};
resultadoMultiplicacion = multiplicar(6,7);
console.log(resultadoMultiplicacion);

function dividir(e,f){
    console.log(arguments.length);
    return Math.trunc(e/f);
}

let resultadoDivision = dividir(7,3);
console.log("El resultado de la division es: "+resultadoDivision);


//Todo: Funciones de tipo self invoking 
(function(a,b){
    console.log("El resultado de la multiplicacion es: "+ (a*b));
})(6,2);

//Todo: Cuantos argumentos recibe nuestra funcion 
//arguments.length


//Todo: Funcion flecha 
const sumarFuncion = (a,b) => a+b;
res = sumarFuncion(7,6);
console.log(res);

//Todo: Paso por valor 
let x=10; //Tipo primitovo

function cambiarValor(a){
    a= 20;
}

//Paso por valor
cambiarValor(x);
console.log(x);


//Todo: Paso por referencia 
const Persona = {
    nombre: "César",
    apellido: "García", 
    edad: 21
}

function cambiarNombre(changeDataPerson){
    changeDataPerson.nombre = "Alonso";
    changeDataPerson.apellido = "Villafaña";
    changeDataPerson.edad = 22;
}

//Paso por referencia
cambiarNombre(Persona);
console.log(Persona);