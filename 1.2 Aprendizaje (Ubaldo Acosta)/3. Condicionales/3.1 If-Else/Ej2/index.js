/* Ejercicio:
    Dado el sector del arco [1,6] se quiere verificar si un jugador a anotado gol o no
        Indicar por donde fue el gol:
            Si fue por la izquierda (1 o 6)
            Si fue por el centro (2 o 5)
            Si fue por la derecha (3 o 4)
*/

let gol = prompt("¿Anoto un gol ingrese 1?");

if(gol == 1){
    let posicion = prompt(`Ingrese la posicion del gol, si fue a la izquierda ingrese 1 o 6, 
                            si fue al centro ingrese 2 o 5, si fue a la derecha ingrese 3 o 4`);
    if(posicion == 1 || posicion == 6){
        document.write("El gol fue por la izquierda");
    }else if (posicion == 2 || posicion == 5){
        document.write("El gol fue por el centro");
    }else if (posicion == 3 || posicion == 4){
        document.write("El gol fue por la derecha");
    }
}else{
    document.write("Aun no anota un gol");
}