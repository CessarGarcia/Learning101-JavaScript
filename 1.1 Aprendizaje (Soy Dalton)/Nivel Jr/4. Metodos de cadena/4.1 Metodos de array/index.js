let nombres = ["Pedro", "Maria", "Alberto", "Jorge"];
let numeros = [5,4,3,2,1]

//Todo: Metodos transformadores
// let resultado = nombres.pop();
// let resultado = nombres.shift();
// let resultado = nombres.push("César", "Roberto");
// numeros.reverse();
// nombres.unshift("Sofia");
// numeros.sort();
// nombres.sort();
//Todo: Posicion en que empieza, elementos que elimina, elementos qu eagrega
// numeros.splice(2,1,6);


//Todo: Metodos accesores
// let resultado = numeros.join("<br> Numero: ");
// let resultado = numeros.slice(0,-1);

//Todo: Metodos de repeticion
nombres.filter(nombres => document.write(nombres + "<br>"));

numeros.filter((numero) =>{
    document.write(numero + "<br>")
})

document.write("<br>");

let resultado = numeros.filter(numero => numero < 4)

// document.write(resultado[0] + "<br>");
document.write(resultado + "<br>");
// document.write(numeros + "<br>");
// document.write(nombres + "<br>");
// document.write(nombres);

