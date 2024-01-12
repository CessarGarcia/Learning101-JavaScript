console.log("Hola mundo");
// alert("Hola mundo");

//Todo: Tipo de dato string 
let nombre = "Cesar";
console.log(nombre);

//Todo: Tipo de dato numerico
let numero = 10;
numero = 13;
console.log(typeof numero);

//Todo: Tipo de dato booleano
let correcto = true; 
console.log(correcto);

//Todo: tipo de dato Function
function miFuncion(){
}
console.log(typeof miFuncion);

//Todo: tipo de dato Symbol
let sym1 = Symbol('foo');
console.log(sym1);

//Todo: Clase es una function
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

console.log(typeof Persona);

//Todo Tipo undefined
let x;
console.log(typeof x);

//Todo Tipo null
let y = null;
console.log(typeof y);

//Todo: Tipo de dato empty
let z = "";
console.log(z);

//Todo: Tipo de dato objeto
let objeto = {
    nombre: "César", 
    apellido: "García", 
    telefono: "55443322"
}
console.log(objeto);

//Todo: tipo de dato array
let animales = ["Perro", "Pajaro", "Gato"]
console.log(animales);

//Todo Concatenar cadenas 
let name = "Cesar";
let lestName = "García";
console.log(name + ' '+ lestName);