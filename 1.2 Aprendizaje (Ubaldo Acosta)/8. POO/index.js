/* Se debe crear dos clases llamadas: 
    ► Empleado 
        Contendra: nombre, sueldo
        metodos: Obtener detalles
    ► Gerente
        contendra: nombre, sueldo
        metodos: Obtener detalles
*/

class Empleado{
    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }
    obtenerDetalles(){
        return `Nombre: ${this._nombre}, Sueldo: ${this._sueldo}`
    }
}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this._departamento = departamento;
    }
    obtenerDetalles(){
        return `${super.obtenerDetalles()}, Ocupacion: Gerente, Departamento: ${this._departamento}`;
    }
}

function imprimir(tipo){
    console.log(tipo.obtenerDetalles());
    if(tipo instanceof Gerente){
        console.log("Es un objeto de tipo Gerente");
    }
}

let empleado1 = new Empleado("Juan", "3000");
// console.log(empleado1.obtenerDetalles());
let gerente1 = new Gerente("Carlos", "5000", "Sistemas");
// console.log(gerente1.obtenerDetalles());

imprimir(empleado1);
imprimir(gerente1);