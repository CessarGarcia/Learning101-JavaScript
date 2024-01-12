/* Calcula la calificacion de n calificaciones, de las cuales aun no tenemos todos los resultado 
    te aconsejamos utilizar el metodo .length para obtener la cantidad de elementos del arreglo
*/
let calificaciones = [100, 80, 60, 100];
let sum = 0;

for(let i=0; i<calificaciones.length ; i++){
    sum+= calificaciones[i];
}
let promedio = sum/calificaciones.length;

console.log(promedio);