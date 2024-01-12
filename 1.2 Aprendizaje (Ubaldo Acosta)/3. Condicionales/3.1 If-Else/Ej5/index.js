/* Dato una hora del día saludar 
        Si la hora es entre 6am a 11am Saludar = Buenos días
        Si la hora es entre 12pm a 18pm Saludar = Buenos Tardes
        Si la hora es entre 19pm a 24pm Saludar = Buenas Noches
*/

let hora = 24;
if(isNaN(hora)){
    console.log("Ingrese una hora en numero");
}else{
    if(hora <=11){
        console.log("Hola, Buenos días");
    }else if( hora<=18){
        console.log("Hola, Buenas tardes");
    }else if(hora <=24){
        console.log("Hola, Buenas noches");
    }else{
        console.log("Ingrese una hora");
    }
}
