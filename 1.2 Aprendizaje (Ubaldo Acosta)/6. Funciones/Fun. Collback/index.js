//Todo: Funciones de tipo collback
function resultado(resultado){
    console.log(resultado);
}

function sumar(num1, num2, functionCollback){
    let res = num1+num2;
    functionCollback(res);
}

sumar(5,3,resultado);

//Todo: Llamadas async con uso setTimeOut
// function miFuncionCallback(){
//     console.log("Saludos asincrono despues de 3 seg");
// }
// setTimeout(miFuncionCallback, 3000);

// setTimeout(()=> console.log("Funcion asincrona despues de 4 segundos"), 4000);

//Todo: Llamadas async con el uso de setInterval
// let reloj = ()=>{
//     let fecha = new Date();
//     console.log(` ${fecha.getHours()} : ${fecha.getMinutes()} : ${fecha.getSeconds()}`);
// }

// setInterval(reloj, 1000);