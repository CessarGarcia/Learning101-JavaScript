/*  
1) Se debe crear un objeto que describa un boleto de tren, el objeto se debe crear usando {}
    y guardarlo en la variable ticket, por ultimo muestra los valores de todos los campos 
    por consola 
    el objeto debe tener 3 campos:
        Estacion inicial (from)
        Estacion final (to) 
        Precio del boleto (price)
*/

const ticket = {
    from: "Estacion de inicio",
    to: "Estacion destino",
    price: 250
}

let detalles = `from: ${ticket.from}, to: ${ticket.to}, price: $${ticket.price}`;
console.log(detalles);