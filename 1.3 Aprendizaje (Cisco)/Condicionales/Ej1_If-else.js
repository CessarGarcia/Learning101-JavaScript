/*
    En una página de comercio, desea saber si el costo de envió será gratis o será con costo de 9.99,
    él envió gratis aplica si el usuario es mayor de edad (>=18), si lo es también tendrá que validar 
    si el valor del carrito es mayor o igual a 300 o si cuenta con puntos mayor o igual a 500,
    imprime al final si el usuario podrá tener envió gratis o no 
*/

let shippingCost = 9.99;
let userAge = 23;
let cartValue = 350;
let points = 500;

if (userAge >= 18) {
    if (cartValue >= 300 || points >= 500) {
        shippingCost = 0;
        console.log(`El costo de envio será de: ${shippingCost}`);
    }
} else {
    console.log("Lo siento es menor de edad");
}

