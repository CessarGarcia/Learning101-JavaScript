const nombre = "Céssar García";

let edad;
edad = 21;

let num = 10;
num +=5;
// document.write(num);

//Definicion de variables
let numero1 = 1, numero2 = 2, numero3 = 3;

//Operadores aritmeticos
let number1 = 15, num2 = 2;
res = number1 + num2;
//document.write(res);

//Op Booleano
MayorEdad = true;

// alert(nombre);

//Solicitar datos con prompt y mostrar alert
//let apellido = prompt("Ingresa tu apellido");
//alert("Hola Sr. " + apellido);

//document.write("El usuario " + nombre + " Tiene " + edad + " años de edad");
// document.write(`Hola soy ${nombre} y tengo ${edad} años de edad`);



            //Operadores logicos
//true = verdadero
//false = falso
document.writeln(numero3 == 15); //Comparando igualdad
let num4 = 10;
document.writeln(num4 != num4); //Verifica si son diferentes

//Verifica si el tipo de variable & su valor es exactamente igual
document.writeln(numero2 === num2); 
//Como numero2 su tipo de variable es numerica y su valor es 2 al igual que 
//num2 el tipo de var es numerica y su valor tambien es dos, nos debe aparecer como true (verdad)

let num5 = "5", num6 = 5;
//Negacion del estrictamente igual
document.writeln(num6 !== num5); 
//Sucede lo mismo que en el anterior caso, aunque tiene la mismo valor, pero no el mismo tipo de dato nos deberia de dar true (verdadero)



            //Operadores relacionales
let texto1 = true;
let texto2 = true;
let texto3 = false;

document.writeln(texto1 && texto2); //True && true = true
document.writeln(texto1 || texto3); //True || false = true
document.writeln(!texto1)



            //Condicionales
let myEdad = 1;
if (myEdad >= 18){
    alert("Es mayor de edad");
}else if (myEdad < 18){
    alert("Es menor de edad");
}else{
    alert("No esta definida tu edad ");
}