/*  Cofla quiere comprar una nueva computadora, debe revisar que
    => la pantalla debe ser FullHD
    => Al momento de comprarla preguntar si esta seguro 
*/

let alto = window.screen.availHeight;
let ancho = window.screen.availWidth;

let comprar = confirm(`El alto es ${alto} y el ancho es: ${ancho}`);

if(comprar == true){
    let seguro = confirm("Estas seguro de quererla comprar?");
    if(seguro == true){
        alert("Felicidades, haz comprado la computadora");
    }else{
        alert("Lo siento, seguiremos mostrandote mas computadoras");
    }
}else{
    alert("Lo siento, seguiremos mostrandote mas computadoras");
}