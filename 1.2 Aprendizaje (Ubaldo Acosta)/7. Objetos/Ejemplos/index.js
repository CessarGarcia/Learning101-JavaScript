/* Ejemplo de herencia
    Debemos crear la clase Persona, con los atributos idPersona, nombre, apellido, edad.
    El cual debe tener un contador de personas.
    Los metodos que tendra la clase son:  getIdPersona, setNombre, 
    Tendra 2 clases hijas de 
        1. Empleado: id_Empleado, sueldo, con los metodos:  setSueldo
        2. Cliente: id_Cliente y fecha de registro
*/

class Persona{
    static contadorPersonas = 0;
    static get Max_Obj(){
        return 5;
    }
    constructor(nombre, apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        
        if(Persona.contadorPersonas < Persona.Max_Obj){
            this._idPersona = ++Persona.contadorPersonas;
        }else{
            console.log("Se ha superado el limite de objetos que se pueden crear ");
        }
    }
    get idPersona(){
        return this._idPersona;
    }
    set editNombre(nombre){
        this._nombre = nombre
    }
    toString(){
        return `IdPersona: ${this._idPersona}, nombre: ${this._nombre}, apellido: ${this._apellido}, edad: ${this._edad}`;
    }
}

class Empleado extends Persona{
    static contadorEmpleados = 0;
    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._idEmpledo = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }
    set EditSueldo(sueldo){
        this._sueldo = sueldo;
    }
    toString(){
        return super.toString() + ', idEmpleado '+ this._idEmpledo + ', Sueldo ' + this._sueldo;
    }
}

class Cliente extends Persona{
    static contadorClientes = 0;
    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad);
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fechaRegistro;
    }
    toString(){
        return super.toString() + ', idCliente '+ this._idCliente + ', Fecha Registro: ' + this._fechaRegistro;
    }
}

//Todo: creamos un objeto de Persona
let persona1 = new Persona("Carlos", "Ramirez", 23);
//Imprimimos los datos
console.log(persona1.toString());
//Uso de get idPersona()
console.log(persona1.idPersona);

//Hacemos uso de set editarNombre
let editarNombre = persona1.editNombre= "Jose"
console.log(editarNombre);




//Todo: Creamos un objeto de la clase empleado
let empleado1 = new Empleado("Pepe", "Tijuana", 23, "$300");
console.log(empleado1.toString());

let empleado2 = new Empleado("Laura", "Gomez", 25, "$250");
console.log(empleado2.toString());


//Todo: Creamos un objeto de la clase cliente
let cliente1 = new Cliente("Maria", "Lara", 16, new Date());
console.log(cliente1);

let cliente2 = new Cliente("Maria", "Lara", 16, new Date());
console.log(cliente2.toString());

