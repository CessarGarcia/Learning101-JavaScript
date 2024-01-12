//Se declaran 3 variables: rosas, lirios, tulipanes
let cantRosas = 70;
let precioRosas = 8;
let valorRosas = cantRosas * precioRosas;

let cantLirio = 50;
let precioLirio = 10;
let valorLirio = cantLirio * precioLirio;

let cantTilipan = 120;
let precioTulipan = 2;
let valorTulipan = cantTilipan * precioTulipan;

let total = valorRosas+valorLirio+valorTulipan;

let salida = `Rosas: precio unitario: ${precioRosas}, cantidad: ${cantRosas}, valor: ${valorRosas} <br>
            Lirio: precio unitario: ${precioLirio}, cantidad: ${cantLirio}, valor: ${valorLirio} <br>
            Tulipán: precio unitario: ${precioTulipan}, cantidad: ${cantTilipan}, valor: ${valorTulipan} <br>
            Total: ${total}`;
console.log(salida);

console.log("<br>");

//Ahora disminuye las rosas en 20, lirios en 30 vuelve a mostrar todo por consola
cantRosas -=20;
cantLirio -=30;

console.log("Cantidad de rosas ahora: " + cantRosas);
console.log("Cantidad de Lirios ahora: " + cantLirio);

valorRosas = cantRosas * precioRosas;
valorLirio = cantLirio * precioLirio;
valorTulipan = cantTilipan * precioTulipan;
total = valorRosas+valorLirio+valorTulipan;

salida = `Rosas: precio unitario: ${precioRosas}, cantidad: ${cantRosas}, valor: ${valorRosas} <br>
            Lirio: precio unitario: ${precioLirio}, cantidad: ${cantLirio}, valor: ${valorLirio} <br>
            Tulipán: precio unitario: ${precioTulipan}, cantidad: ${cantTilipan}, valor: ${valorTulipan} <br>
            Total: ${total}`;
console.log(salida);