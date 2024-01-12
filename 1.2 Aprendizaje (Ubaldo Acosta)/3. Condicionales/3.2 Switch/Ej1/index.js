/*
    Verificar la estacion del año como el ejercicio 4, de la seccion 3.1,
    pero ahora con la estructura Switch
*/

let mes = 1 //mes: junio
let estacion;

switch(mes){
    case 1: case 2 : case 12:
        estacion = "Invierno";
        break;
    case 3: case 4: case 5: 
        estacion = "Primavera";
        break;
    case 6: case 7: case 8: 
        estacion = "Verano";
        break;
    case 9: case 10: case 11: 
        estacion = "Otoño";
        break;
    default:
        estacion = "Ingrese un mes entre 1 y 12"
        break; //Opcional
}

console.log("Estamos en la estacion de " + estacion);