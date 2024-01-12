class Persona {
    static contadorObjetosPersona = 0;
    static contadorPersona = 0;
    static get MAX_OBJ() {
        return 5;
    }
    constructor(nombre, apellido, edad) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        if (Persona.contadorPersona < Persona.MAX_OBJ) {
            this.idPersona = ++Persona.contadorPersona;
        } else {
            console.log("Se ha superado el maximo de objetos permitidos");
        }
        Persona.contadorObjetosPersona++;
        // this._info = `Nombre: ${this._nombre}, Apellido: ${this._apellido}, Edad: ${this._edad}`;
    }
    get nombreCompleto() {
        return this.idPersona + ' ' + this._nombre + ' ' + this._apellido;
    }
    set editarNombre(nombre) {
        this._nombre = nombre;
    }
    // verInfo(){
    //     console.log(this._info);
    // }
    nombreCompleto() {
        return this._nombre + ' ' + this._apellido;
    }
    toString() {
        return this.nombreCompleto();
    }
    static saludar() {
        console.log('Hola desde método static');
    }
    static saludar2(persona) {
        console.log(persona.nombreCompleto());
    }
}

let persona1 = new Persona("Sofia", "Perez", 13);
console.log(persona1.toString());

console.log(persona1.nombreCompleto);

let editarNombre = persona1.editarNombre = "Carlos";
console.log(editarNombre);

// persona1.verInfo();


//Todo: Herencia 
class Empleados extends Persona {
    constructor(nombre, apellido, edad, departamento) {
        super(nombre, apellido, edad);
        this._departamento = departamento;
    }
    get departamento() {
        return this.departamento;
    }
    set editarDepartamento(departamento) {
        return this.departamento = departamento;
    }
    //Todo: Sobreescritura 
    nombreCompleto() {
        return super.nombreCompleto() + ' ' + this._departamento;
    }
}

let persona2 = new Persona("César", "García", 13);
console.log(persona2);

let empleado1 = new Empleados("Jose", "Martinez", 33, "Maestro");
console.log(empleado1);

console.log(empleado1.nombreCompleto());
//Todo: Polimorfismo, ya que llamamos de una clase hija a una clase padre el metodo toString
console.log(empleado1.toString());

//Todo: Modo Static
// persona1.saludar();

Persona.saludar();
Persona.saludar2(persona1);
Empleados.saludar();
Empleados.saludar2(empleado1);

let contador = Empleados.contadorObjetosPersona;
console.log(contador);

console.log(Persona.contadorPersona);

//MAX_OBJ
console.log(Persona.MAX_OBJ);

//Intentamos modificar su valor
Persona.MAX_OBJ = 10;
console.log(Persona.MAX_OBJ);

let persona3 = new Persona("Maria", "Garza", 33);
let persona4 = new Persona("Martha", "Rodriguez", 13);//contador personas = 4
let persona5 = new Persona("Antonia", "Garcia", 28); //Como hemos definido que sea maximo 5, ya no nos permitira crear nuevos objetos
