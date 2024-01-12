    let nombre = prompt("Ingrese su nombre");
   let calificacion = prompt("Ingrede la calificacion en numero obtenida");

//    let calificacion = 5;

    if(calificacion >= 9){
        document.write(`La calificacion de ${nombre} es de A`);
    }else if(calificacion >= 7 || calificacion <= 8){
        document.write(`La calificacion de ${nombre} es de B`);
    }else{
        document.write(`La calificacion de ${nombre} es de F`);
    }

