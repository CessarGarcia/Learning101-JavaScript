/* Ejercicio:
    Se quiere jugar al tiro al blanco y de acuerdo a la posicion que acierte se le ortorgará un premio
        Si la distancia es menor o igual a 10, se le ortara un premio de $80
        Si la distancia es mayor a 10, pero menor o igual a 40, se le dara el premio de $60
        si la distancia es mayor a 40, pero menor o igual a 70, se le dara el premio de $40
        si la distancia es mayor a 70, no se gana ningun premio, indicar que salio del circulo
*/

let distancia = prompt("Ingrese una distancia");

if(distancia <= 10 ){
    document.write("Haz ganado el premio de $80");
}else if(distancia <=40){
    document.write("Haz ganado el premio de $60");
}else if(distancia <=70){
    document.write("Haz ganado el premio de $40");
}else{
    document.write("Lo siento, no haz ganado ningun premio");
}