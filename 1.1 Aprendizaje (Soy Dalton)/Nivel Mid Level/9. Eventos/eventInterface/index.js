// const img = document.querySelector("imagen");
const input = document.querySelector(".input_preba");
const contenedor = document.querySelector(".seleccionado")
// img.addEventListener("load",()=>{
//     console.log("ha sucedido un error");
// })

window.addEventListener("scroll",()=>{
    console.log("Se ha scrolleado");
})

input.addEventListener("select",(e)=>{
    let start = e.target.selectionStart;
    let end = e.target.selectionEnd;
    let textoCompleto = input.value;
    contenedor.innerHTML = textoCompleto.substring(start,end);
})