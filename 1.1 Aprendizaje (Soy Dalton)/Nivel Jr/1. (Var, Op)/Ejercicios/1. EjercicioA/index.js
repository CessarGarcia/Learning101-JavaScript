//Cantidad de dinero 
let dineroRoberto = 1.5;
let dineroPedro = 1.87;
let dineroCofla = 3;

montoTotal = dineroRoberto + dineroPedro + dineroCofla; 

document.write(`Tienen un total de  ${montoTotal} <br>`);

//Lista de precios
let paletaAgua = 0.6;
let paletaLeche = 1;
let paletaConfeti = 2.9;

let heladoHeladix = 1.6;
let heladoGeladovich  = 1.7;
let heladoHelardo  = 1.8;

let heladoMedio = 1.8;
let heladoLitro = 2.9;


//Inciso A
if(montoTotal >= 2.9){
    document.write("Tu puedes comprar el helado de Litro o paletaConfeti");
}else if(montoTotal >= 1 && montoTotal < 2.9 ){
    document.write("Tu puedes comprar el helado de paletaLeche o heladoHeladix o heladoGeladovich o heladoHelardo o heladoMedio");
}else if(montoTotal > 0 && montoTotal < 1){
    document.write("Tu puedes comprar la paleta de agua");
}else{
    document.write("No tienen dinero")
}


//Inciso B
let compra = paletaAgua + paletaLeche + paletaConfeti + heladoHelardo;
let cambio = montoTotal - compra;
document.writeln(`<br> Se seleccionaron los productos: paletaAgua, paletaLeche, la paletaConfeti y el heladoHelardo con un gasto de: ${compra}`);
document.writeln(`<br> Con un cambio de ${cambio}`);