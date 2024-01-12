/* Se debe crear una interfaz donde se debe introduccir una nota de calificacion 
    validar que la nota no contenga errores 
    promediar nota con trabajos
    
    Mostrar si aprobo, cuando el promedio sea mayor a 7/10
*/

const sendBtn = document.getElementById("btn-enviar");

sendBtn.addEventListener("click",()=>{
    let resultado, mensaje;
    try{
        prevResu = parseInt(document.getElementById("nota").value);
        if(isNaN(prevResu)){
            throw "error";
        }
        mensaje = definirMensaje(prevResu);
        resultado = validarAprobacion(8,5,prevResu);
    }catch(error){
        resultado = "Error";
        mensaje = "Favor de ingresar solo numeros";
    }
    abrirModal(resultado, mensaje);
})

const definirMensaje = (pr)=>{
    let resultado;
    switch(pr){
        case 1: resultado = "Obtuviste 1 de calificacion";
            break;
        case 2: resultado = "Obtuviste 2 de calificacion";
            break;
        case 3: resultado = "Obtuviste 3 de calificacion";
            break;
        case 4: resultado = "Obtuviste 4 de calificacion";
            break;
        case 5: resultado = "Obtuviste 5 de calificacion";
            break;
        case 6: resultado = "Obtuviste 6 de calificacion";
            break;
        case 7: resultado = "Obtuviste 7 de calificacion";
            break;
        case 8: resultado = "Obtuviste 8 de calificacion";
            break;
        case 9: resultado = "Obtuviste 9 de calificacion";
            break;
        case 10: resultado = "Felicidades, obtuviste la calificacion mas alta";
            break;
        default: resultado = null;
    }
    return resultado;
}

const validarAprobacion=(nota1, nota2, prevResu)=>{
    let promedio = (nota1+nota2+prevResu) / 3;
    if(promedio >= 7){
        return ["<span class='green'>APROBADO </span>", Math.round(promedio)];
    }else{
        return ["<span class='red'>REPROBADO</span>", Math.round(promedio)];
    }
}

const abrirModal = (res, msg)=>{
    document.querySelector(".resultado").innerHTML = res;
    document.querySelector(".mensaje").innerHTML = msg;
    let modal = document.querySelector(".modal-background");
    modal.style.display = "flex";
    modal.style.animation = "aparecer 1s forwards";
}

let modal = document.querySelector(".modal-background");
let close = document.getElementById("close");
close.addEventListener("click", function(){
    modal.style.display = "none";
})