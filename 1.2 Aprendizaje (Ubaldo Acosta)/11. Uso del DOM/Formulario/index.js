function mostrarValores(){
    let formulario = document.forms["formaulario"];
    let texto = "";
    let nombre = formulario["nombre"];
    let apellido = formulario["apellido"];
    texto = nombre.value + `<br/>` + apellido.value;

    // for(let elemento of formulario){
    //     texto += elemento.value + `<br/>`;
    // }
    // console.log(texto);
    document.getElementById("valores").innerHTML = texto;
}

function cambiarTitulo(){
    document.getElementById("titulo").innerHTML = "Nuevo Titulo";
}

function cambiarImagen(){
    document.getElementById("imagen").src = "html5.png"
}

function cambiarColorTexto(){
    document.getElementById("titulo").style.color = "blue";
}