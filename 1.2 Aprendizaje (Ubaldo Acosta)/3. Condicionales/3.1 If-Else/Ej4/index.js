/* Ejercicio:
    Dado el mes del año, verificar la estacion del año
        Si el mes es entre marzo, abril y mayo entonces es primavera
        Si el mes es entre junio, julio y agosto entonces es verano
        Si el mes es entre sep, oct, nov entonces es otoño
        Si el mes es entre dic, ene, feb entonces es invierno
*/

let mes = "noviembre";
let estacion;

if(mes == "marzo" || mes == "abril" || mes == "mayo"){
    estacion = "primavera";
}else if(mes == "junio" || mes == "julio" || mes == "agosto"){
    estacion = "verano";
}else if(mes == "septiembre" || mes == "octubre" || mes == "noviembre"){
    estacion = "otoño"
}else if(mes == "diciembre" || mes == "enero" || mes == "febrero"){
    estacion = "invierno"
}else{
    console.log("Mes ingresado incorrecto");
}

console.log("esta en la estacion de " + estacion );