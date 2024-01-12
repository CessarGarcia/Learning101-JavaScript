let str = "123";
let n1 = +str;
let n2 = -str;
let n3 = -n2;
let n4 = +"abcd";

console.log(`let str -> valor: ${str}y  tipo: ${typeof str}`); // -> 123 : string
console.log(`let n1 -> valor: ${n1} y  tipo: ${typeof n1}`);  // -> 123 : number
console.log(`let n2 -> valor: ${n2} y  tipo: ${typeof n2}`); // -> -123 : number
console.log(`let n3 -> valor: ${n3} y  tipo: ${typeof n2}`); // -> 123 : number
console.log(`let n4 -> valor: ${n4} y  tipo: ${typeof n2}`); // -> NaN : number

//Todo: Pre-Post Incremento 
let num1 = 10;
let num2 = 10;

console.log(num1); //10
//hacemos el postincremento
console.log(num1++);
//hasta que no se vuelve a utilizar la variable num1 valdra 11
console.log(num1);

console.log(num2);
//hacemos el preincremento
console.log(++num2);
//Como se asgina el valor de 11 a la var num2, cuando volvemos a llamarla sigue teniendo el valor de 11
console.log(num2);


//Todo: pre-post Decremento
let num3 = 20;
let num4 = 20;
console.log(num3); //20
//hacemos el preincremento
console.log(--num3); //19
//Como se le asgino el valor de 19 a la var num3, cuando volvemos a llamarla conserva el valor de 19
console.log(num3); //19

console.log(num4); //20
//hacemos el postincremento
console.log(num4--); //permanece en 20
//Cuando lo volvemos a llamar, pasa a 19
console.log(num4); //19

//Operador logico and
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false

//Operador logico or
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false

console.log(!true); //false
console.log(!false); //true

console.log(!!true); //false
console.log(!!false); //true

let a = false;
let b = true;
let c = false;
let d = true;

console.log(a && b && c || d);
console.log(a && b && (c || d));


console.log(true && 1991); // -> 1991
console.log(false && 1991); // -> false
console.log(2 && 5); // -> 5
console.log(0 && 5); // -> 0
console.log("Alice" && "Bob"); // -> Bob
console.log("" && "Bob"); // -> empty string

console.log(true || 1991); // -> true
console.log(false || 1991); // -> 1991
console.log(2 || 5); // -> 2
console.log(0 || 5); // -> 5
console.log("Alice" || "Bob"); // -> Alice
console.log("" || "Bob"); // -> Bob

let x = 0;
let y = 0;
console.log(x++ && y++); // -> 0
console.log(x); // -> 1
console.log(y); // -> y == 0


let z = true;
console.log(z); // -> true
z &&= false;
console.log(z); // -> false

console.log(8+2 * 5**2);
console.log(8-2 + 5**2);
console.log(8*2 + 5*2);

let names = ["Carolina", "Abigail"];
let nombre = names[0];
console.log(names instanceof Array); //true

console.log(nombre instanceof Array); //No es un array (false)
console.log(typeof nombre); //Es de tipo string

myfunction = () =>{
    return 2;
}

let resultado = 10 + myfunction() **2;
console.log(resultado); 

myObjet = new Object({num: 2});
let operacion = myObjet.num + 10;
console.log(operacion);

// let anchura = prompt("Ingresa la anchura",20)
// let altura = prompt("Ingresa la altura", 10);
// let longitud = prompt("Ingresa la longitud", 50);

// if(anchura=="" && altura =="" && longitud == ""){
//     console.log("Ingresa los valores correctamente");
// }else{
//     let volumen = anchura * altura * longitud;
//     console.log("El volumen es: " + volumen);
// }

let nr = "1"
let yy = (nr == 1)
yy