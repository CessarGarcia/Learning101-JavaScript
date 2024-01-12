/*  Se requiere programar un juego de azar, de acuerdo a la opción que el usuario elija mostrará si gano o no,
    el truco esta en que la opción b gana el premio mayor y las demás opciones no ganan nada,
    desarrolla el código para lograr esto
*/

let opcion = prompt("Elige la puerta a, b o c");
let ganador = false;

switch(opcion){
    case "a":
    case "A":{
        let mensaje = "Lo siento, la puerta A no es la puerta ganadora";
        alert(mensaje);
        break;
    }

    case "b":
    case "B":{
        let mensaje = "¡Felicidades!, la puerta B contiene el premio mayor";
        alert(mensaje);
        ganador = true;
        break;
    }

    case "c":
    case "C":{
        let mensaje = "Lo siento, la puerta C no es la puerta ganadora";
        alert(mensaje);
        break;
    }
    
    default:
        alert("No existe la Puerta " + String(opcion));
}

if(ganador){
    alert("¡Ganador!");
}
