let edad = "18";

console.log(typeof edad);

let mayorEdad = Number(edad);

if(mayorEdad <=18){
    console.log("Es menor de edad");
    console.log(typeof mayorEdad);
}

let resultado = (mayorEdad >= 18) ? "Es mayor de edad" : "Es menor de edad";
console.log(resultado);

let texto = "Hola Mundo";
let textToString = Number(texto);
console.log(textToString);

let comprobacion = (isNaN(texto)) ? "No es un numero" : "Es un numero";
console.log(comprobacion);