let year = 1990;
console.log(typeof year);

const name = "César";
console.log(typeof name);

console.log(typeof false);

let a = 0x10; //hexadecimal
let b = 0o10; //Octal
let c = 0b10; //binario
let d = 9e3; //Exponencial

console.log(a); //16
console.log(b); //8
console.log(c); //2
console.log(d); //9000

let e = 1/0;
console.log(e); //Infinity

const numero = BigInt(5)+ 5n;
console.log(numero); //10n
console.log(typeof numero);

let f = 7n/4n;
console.log(f);

let mensaje = "El bucle \'Mars\' hizo escala en el puerto";
console.log(mensaje);

let nombre = "César";
x = nombre + (2+4);
console.log(x) //César6

let edad = 22;
console.log(`Hola soy ${nombre} y tengo ${edad} años`);

let river = "Mekong";
let character = river.charAt(2);
console.log(character); //k

const string = new String("un objeto de string");
let longitud = string.length;
console.log(longitud);

let posicion5 = string.charAt(5);
console.log(posicion5);

let nuevaCadena = string.slice(0, 10);
console.log(nuevaCadena); //un objeto

let separacion = string.split(" ")
console.log(separacion);
// console.log(string);

// const bigNum = BigInt();
// console.log(bigNum);


console.log(Boolean(true));
console.log(Boolean(45));
console.log(Boolean("text"));


console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(false));


console.log(BigInt(11));
console.log(BigInt(true));
console.log(BigInt(false));

// console.log(BigInt(NaN));
// console.log(BigInt(undefined));
// console.log(BigInt(null));


const string1 = 42 + +"1";
console.log(string1);

let boolean = Boolean(0);
console.log(boolean);

let num1 = 150;
console.log(typeof num1);

let big1 = 100n;
console.log(typeof big1);

let nombree = "Hola";
console.log(typeof nombree);

let user1 = {
    name: "Calvin",
    surname: "Hart",
    age: 66,
    email: "CalvinMHart@teleworm.us"
};

user1.phone = "904-399-7557";
console.log(user1.phone);

delete user1.name;
console.log(user1.name); //undefined

let materias = [["Matematicas", "Español", "Geometria"], ["Literatura", "Programacion", "Algoritmos"]];
console.log(materias[0]); //['Matematicas', 'Español', 'Geometria']
console.log(materias[1]);
console.log(materias[1][1]);
console.log(materias[2]);

let users =[ 
    {
        name: "Calvin",
        surname: "Hart",
        age: 66,
        email: "CalvinMHart@teleworm.us"
    },
    {
        name: "Mateus",
        surname: "Pinto",
        age: 21,
        email: "MateusPinto@dayrep.com"
    }
];
console.log(users[0].name);

users[2] = {
    name: "Irene",
    surname: "Purnell",
    age: 32,
    email: "IreneHPurnell@rhyta.com"
}

console.log(users[2].name);

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
console.log(typeof days); //object
console.log(days instanceof Array); //true

console.log(days.indexOf("Sun")); //0

let names = ["Olivia", "Emma", "Mateo", "Samuel"];
names.reverse()
console.log(names);

console.log(names.length); //4
names.push("Amelia"); //Agregamos el nuevo elemento con push
console.log(names.length); //5
console.log(names); //['Oliva', 'Emma', 'Mateo', 'Samuel', 'Amelia']

names.unshift("César");
console.log(names);

names.pop()
console.log(names);

names.shift()
console.log(names);



let names2 = ["Olivia", "Emma", "Mateo", "Samuel"];
let nANames2 = names2.slice(2);
console.log(nANames2); //['Mateo', 'Samuel']

let nANames3 = names2.slice(1,3);
console.log(nANames3);

let nANames4 = names2.slice(0,-2);
console.log(nANames4);

let nANames5 = names2.slice(-2);
console.log(nANames5);

let otherNames = ["Williams", "Sandra"];
let allNames = names2.concat(otherNames);
console.log(allNames);