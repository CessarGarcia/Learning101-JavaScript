/* 
    Estamos creando una biblioteca, por el momento tenemos solo 3 libros y queremos preparar una lista de ellos
    almacenaremos 3 datos de cada libro: {El titulo, el autor y el numero de paginas}
        1. Speaking JavaScript, Axel Rauschmayer, 460.
        2. Programming JavaScript Applications, Eric Elliott, 254.
        3. Understanding ECMAScript 6, Nicholas C. Zakas, 352.

    Se debe crear solo un arreglo que almacene los 3 objetos con las 3 propiedades anteriormente mencionadas
    posteriormente agregar un nuevo libro con los datos de ( Learning JavaScript Design Patterns, por Addy Osmani, 254 páginas)
        utilizar el metodo apropiado para adjuntar el libro al final del arreglo
        muestra la logintud del arreglo 
        Muestra todos los nombres de los libros 
        Utiliza el metodo slice para mostrar solo los 2 ultimos libros 
        Elimina el primer libro de la coleccion, muestra el nuevo longitud del arreglo y todos los nombres de los libros de la nueva coleccion 
        Suma todas las paginas de los libros 
*/

//Hemos optado por utilizar [] puesto que nos ayudara mas adelante a acceder a las propiedades
let libros = [
    [
        titulo = "Speaking JavaScript",
        autor = "Axel Rauschmayer",
        paginas = 460
    ],
    [
        titulo = "Programming JavaScript Applications",
        autor = "Eric Elliott",
        paginas = 254
    ],
    [
        titulo = "Understanding ECMAScript 6",
        autor = "Nicholas C. Zakas",
        paginas = 352
    ]
]

//Agrega un nuevo libro al final
libros[3] = [
    titulo = "Learning JavaScript Design Patterns",
    autor = "Addy Osmani",
    paginas = 254
]


//muestra la logintud del arreglo
console.log(libros.length);

//Muestra todos los libros de la lista
console.log(libros);

//Muestra todos los nombres de los libros
let libro1 = libros[0][0];
let libro2 = libros[1][0];
let libro3 = libros[2][0];
let libro4 = libros[3][0];

let namesBooks = `
                Libro 1: ${libro1} <br> 
                Libro 2: ${libro2} <br>
                Libro 3: ${libro3} <br>
                Libro 4: ${libro4} <br>
                `;
console.log(namesBooks);


//mostrar solo los 2 ultimos libros
console.log(libros.slice(2, 4));

//Elimina el primer libro de la coleccion, muestra el nuevo longitud del arreglo y todos los nombres de los libros de la nueva coleccion 
let eliminar1erLibro = libros.shift();
console.log(libros.length);
console.log(libros);

//Suma todas las paginas de los libros 
//Nota: Como el ejercicio anterior eliminamos el libro1, aqui empezamos a contar las paginas a partir del libro2
let paginasLibro2 = libros[0][2];
let paginasLibro3 = libros[1][2];
let paginasLibro4 = libros[2][2];

let totalPaginas = paginasLibro2 + paginasLibro3 + paginasLibro4;
console.log(totalPaginas);


let contacts = [
    {
        name: "Maxwell Wright",
        phone: "(0191) 719 6495",
        email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    },
    {
        name: "Raja Villarreal",
        phone: "0866 398 2895",
        email: "posuere.vulputate@sed.com"
    },
    {
        name: "Helen Richards",
        phone: "0800 1111",
        email: "libero@convallis.edu"
    }
];

contacts[3] = [
    name = " Maisie Haley",
    phone = "0913 531 3030",
    email = "risus.Quisque@urna.ca"
]

console.log(contacts[3]);
let primeroYUltimo = contacts.slice(0,-3);
console.log(primeroYUltimo);

let x = 0x21;
console.log(x);

let y = "abcdefg".slice(2,4)
console.log(y);

let altura = 180;
{
    let altura = 200;
    altura += 10;
}

console.log(altura);

let num = 10/100;
console.log(typeof(x));