//Forma de declarar un objeto

//Uso de funciones en objetos
let persona = {
    nombre: "César", 
    apellido: "García",
    edad: 22,
    correo: "cessar_garcia13@hotmail.com",
    idioma: "Es_mx",
    nombreCompleto: function(titulo, semestre){
        return titulo + ': '+ this.nombre + ' ' + this.apellido+ ' ' + semestre+ ' semeste';
    },
    get datosCompletos(){
        return this.nombre + ' ' + this.apellido + ' ' + this.edad + ' ' + this.correo;
    },
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    }
}

let alumno = {
    nombre: "Juan",
    apellido: "Perez"
}

// Uso de Apply Op1
let datosFaltesPersona = ["Lic. ", "7mo"]
console.log(persona.nombreCompleto.apply(alumno, datosFaltesPersona));
// Uso de Apply Op2
console.log(persona.nombreCompleto.apply(alumno, ["ing", "9no"]));


//Todo: Uso de call 
console.log(persona.nombreCompleto.call(alumno, "Ing", "5to"));

persona.tel = "8033756530"; //Crear una nueva propiedad
persona.tel = "8033756562"; //Actualizar su valor

console.log(persona);
console.log(persona.nombreCompleto("Lic", "6to"));

delete persona.tel;
console.log(persona);

//Otra forma de llamar a la funcion con get
console.log(persona.datosCompletos);

//llamando a lang
console.log(persona.lang);

//Haciendo uso de set
persona.lang = "en";
console.log(persona.idioma);



//Todo: Forma de acceder a un objeto
// 1. Concatenar cada propiedad 
console.log(persona.nombre + ', ' + persona.apellido);

// 2. Con Objet.values
let datosPersona = Object.values(persona);
console.log(datosPersona);


// 3. Con JSON.stringify 
let personData = JSON.stringify(persona);
console.log(personData);






//Todo: Otra forma de crear un objeto
let animales = new Object();
    animales.nombre = "Manchas";
    animales.edad = 3;
    animales.especie = "Perro";
console.log(animales["nombre"]);


//Todo: Funcion constructor
function Alumno(nombre, apellido, semestre, materias){
    this.nombre = nombre;
    this.apellido = apellido;
    this.semestre = semestre;
    this.materias = materias;
    this.infoCompleta = function(){
        return this.nombre + ' ' + this.semestre + ' semestre '+ this.materias;
    }
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let alumno1 = new Alumno('Juan', 'Gutierrez', '7mo', 'Matematicas');
Alumno.prototype.tel = "4455035";
console.log(alumno1.tel);

console.log(alumno1);
console.log(alumno1.infoCompleta());