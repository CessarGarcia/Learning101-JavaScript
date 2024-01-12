let costoBoleto = 10;
let dinero = prompt('Cuanto dinero tienes');

//Hacemos una variable para obtener la cantidad de boletos que podemos comprar 
// y dividimos la cantidad de dinero que tiene entre el costo del boleto
let cantidadBoletos = dinero / costoBoleto
//convertimos el dato a entero
cantidadBoletos = parseInt(cantidadBoletos)
//Hacemos la operacio del cambio
let cambio = dinero - cantidadBoletos * costoBoleto

document.writeln(`La cantidad de boletos que puedes comprar son: ${cantidadBoletos}`);
document.writeln(`<br> Con un cambio de ${cambio}`);

alert(`La cantidad de boletos que puedes comprar son: ${cantidadBoletos}`);
alert(`Con un cambio de ${cambio}`);
