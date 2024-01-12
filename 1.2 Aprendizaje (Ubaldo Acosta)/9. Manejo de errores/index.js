//Todo: Manejo de errores try-catch
'use strict'
let resultado = "ahsgha";

try {
    x=10;
    if(isNaN(resultado)) throw "No es un numero"
} catch (error) {
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}finally{
    console.log("Termina la revision de errores");
}

console.log("continuamos");