/* Ejercicio
    Se tiene el sueldo de 10 empleados y se quiere conocer cuantos 
    tienen un sueldo superior al promedio 
*/

let sueTotal=0; //Sueldo total
let sueldos=[]; //Arreglo que almacena los sueldos

//Todo: Ciclo for para ingresar y almacenar el sueldo del empleado
for (let i=0; i<10; i++) {
    let sueldo = prompt("Ingrese el sueldo del empleado " + (i + 1));
    sueldos.push(parseInt(sueldo));
    sueTotal += sueldos[i];
}

let promedio = sueTotal /10;
let contador = 0;


//Todo: Ciclo for para saber cuantos tienen sueldo mayor al promedio
for (let i = 0; i <= 10; i++) {
    if(sueldos[i] > promedio){
        contador+=1; 
    }
}

document.write("La cantidad de personas con sueldo mayor al promedio es: " +contador);