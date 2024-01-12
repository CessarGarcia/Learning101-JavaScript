function cambiarTexto(titulo){
    titulo.innerHTML = "Cambiamos el titulo";
}

document.getElementById("titulo").onclick = cambiarTextoo;

function cambiarTextoo(){
    document.getElementById("titulo").innerHTML = "Cambiamos a un texto simple";
    document.getElementById("mostrar").innerHTML = "Nuevo Contenido";
}

function entrar(){
    // alert("Entrando a la pagina web");
    let coockiesEnabled = "";
    if(navigator.cookieEnabled){
        coockiesEnabled = "Coockies estan habilitadas";
    }else{
        coockiesEnabled = "Coockies estan deshabilitadas";
    }

    console.log(coockiesEnabled);
}

function browserLanguage() {
    let lenguaje = navigator.language;
    document.getElementById("lenguaje-navegador").textContent = "Lenguaje del navegador: " + lenguaje;
}

browserLanguage();

function rojo(titulo){
    titulo.style.color ="red";
}

function negro(titulo){
    titulo.style.color = "black";
}

function azul(titulo){
    titulo.style.color = "blue";
}

// function convertMayus(nombreInput){
//     nombreInput.value = nombreInput.value.toUpperCase();
// }

// function cambiarFondo(apellido){
//     apellido.style.background = "yellow";
// }

// function blanco(apellido){
//     apellido.style.background = "white";
// }

// document.getElementById("nacionalidad").addEventListener("focus", cambiarYellow);
// document.getElementById("nacionalidad").addEventListener("blur", cambiarWhite);
// function cambiarYellow(evento){
//     let even = evento.target;
//     even.style.background ="yellow";
// }

// function cambiarWhite(evento){
//     let even = evento.target;
//     even.style.background = "white";
// }

// document.getElementById("edad").addEventListener("focus", (evento)=>{
//     evento.target.style.background= "yellow";
// });

// document.getElementById("edad").addEventListener("blur", (evento)=>{
//     evento.target.style.background= "white";
// });

const formu = document.getElementById("formulario");
formu.addEventListener("focus", (evento)=>{
    evento.target.style.background= "yellow";
}, true);

formu.addEventListener("blur", (evento)=>{
    evento.target.style.background= "white";
}, true);