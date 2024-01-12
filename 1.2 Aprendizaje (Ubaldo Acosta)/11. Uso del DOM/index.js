let h1 = document.getElementById("cabecero").innerHTML;
document.write(h1 + `<br>`);

let p = document.getElementById("p");
// console.log(`Valor parrafo: ${p.innerHTML}` );
p.innerHTML = "Nuevo parrafo";

let cabecero = document.getElementById("cabecero");
cabecero.innerHTML = "Nuevo cabecero";

let parrafos = document.getElementsByTagName("p");
document.write("Num. parrafos: " + parrafos.length);

let parrafosEnAzul = document.getElementsByClassName("blue");
document.write(`<br>` +"Num. parrafos en azul: " + parrafosEnAzul.length)

let p_azul = document.querySelectorAll("p.blue");
document.write(`<br>` + "Num parrafos en azul "+ p_azul.length);