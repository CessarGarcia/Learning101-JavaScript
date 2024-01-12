// function saludar(){
//     respuesta = prompt("Hola como fue tu dia");
//     if(respuesta == "bien" || respuesta == "Bien"){
//         alert("Me alegro :) ");
//     }else{
//         alert("Que mal :( ");
//     }
//     return respuesta;
// }

// let saludo = saludar();

// document.write(saludo);

function sumar(num1, num2){
    let res = num1 + num2;
    return res;
}


let resultado = sumar(20,30);
document.write(resultado);


function saludar(nombre){
    document.write(`<br> Hola ${nombre} como estas`);
}

saludar("Javier")


const hola = (apellido)=> document.write(`<br> Hola Sr. ${apellido} como estas`);
hola("Garcia")