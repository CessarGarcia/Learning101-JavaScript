/* Ejercicio 3: Mundo PC
    se tiene 5 clases
    
   5 → Computadora: idCompu, nombre, monitor, teclado, raton, contadorCompus
   6 → Orden: idCompu, computadoras[], contadorOrdenes
        metodos: mostrarOrden, toString
   4 → Monitor: idMonitor, marca, tamanio, contadorMonitores
        metodos: toString()

   1 ► DispositivoEntrada (Padre): tipoEntrada, marca
   2 → Raton: idRaton, contadorRatones
        metodos: toString()
   3 → Teclado: idTeclado, contadorTeclados
        metodos: toString()    
*/

class DispositivoEntrada{
     constructor(typeInput, marca){
          this._typeInput = typeInput;
          this._marca = marca;
     }
     get typeInput(){
          return this._typeInput;
     }
     get marca(){
          return this._marca;
     }
}

class Raton extends DispositivoEntrada{
     static contadorRatones = 0;
     constructor(typeInput, marca){
          super(typeInput, marca);
          this._idRaton = ++Raton.contadorRatones;
     }
     toString(){
          return `Raton: [idRaton: ${this._idRaton}, Tipo de Entrada: ${this.typeInput}, marca: ${this.marca}]`;
     }
}

class Teclado extends DispositivoEntrada{
     static contadorTeclado = 0;
     constructor(typeInput, marca){
          super(typeInput, marca);
          this._idTeclado = ++Teclado.contadorTeclado;
     }
     toString(){
          return `Teclado: [idTeclado: ${this._idTeclado}, tipo de entrada: ${this._typeInput}, marca: ${this._marca}]`
     }
}

class Monitor{
     static contadorMonitores = 0;
     constructor(marca, tamaño){
          this._idMonitor = ++Monitor.contadorMonitores;
          this._marca = marca;
          this._tamaño = tamaño;
     }
     toString(){
          return `Monitor: [idMonitor: ${this._idMonitor}, marca: ${this._marca}, tamaño: ${this._tamaño}]`;
     }
}

class Computadoras{
     static contadorCompus = 0;
     constructor(nombre, monitor, raton, teclado){
          this._idCompu = ++Computadoras.contadorCompus;
          this._nombre = nombre;
          this._monitor = monitor;
          this._raton = raton;
          this._teclado = teclado;
     }
     toString(){
          return `{\n Computadora ${this._idCompu}: ${this._nombre} \n ${this._monitor} \n ${this._raton} \n ${this._teclado} }`;
     }
}

class Orden{
     static contadorOrdenes = 0;
     constructor(){
          this._idOrden = ++ Orden.contadorOrdenes;
          this._computadoras = [];
     }
     agregarComputadora(computadora){
          this._computadoras.push(computadora);
     }
     mostrarOrden(){
          let computadorasOrden = '';
          for(let computadora of this._computadoras){
               computadorasOrden += `\n${computadora}`;
          }
          console.log(`Orden: ${this._idOrden}, Computadoras_ ${computadorasOrden}`);
     }
}

let raton1 = new Raton("USB", "Kingstom");
let raton2 = new Raton("bluetooth", "HP");
console.log(raton1.toString());
console.log(raton2.toString());


let teclado1 = new Teclado("usb", "Samsung");
let teclado2 = new Teclado("usb", "DELL");
console.log(teclado1.toString());
console.log(teclado2.toString());


let monitor1 = new Monitor("HP", "15");
let monitor2 = new Monitor("Sony", "20");
console.log(monitor1.toString());
console.log(monitor2.toString());


let computadora1 = new Computadoras("HP", monitor1, raton1, teclado1);
console.log(`${computadora1}`);
let computadora2 = new Computadoras("Armada", monitor2, raton2, teclado2);
console.log(`${computadora2}`);

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.mostrarOrden();