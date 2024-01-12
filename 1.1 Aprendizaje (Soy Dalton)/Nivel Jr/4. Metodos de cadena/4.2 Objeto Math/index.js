document.write(Math.sqrt(25) + "<br>");
document.write(Math.cbrt(27) + "<br>");
document.write(Math.max(27, 4, 96, 245) + "<br>");
document.write(Math.min(27, 4, 96, 245) + "<br>");
// document.write(Math.random() + "<br>");


// Numero random entre 1-100
let numero = Math.random() * 100;
numero = numero.toString();
num = numero[0] + numero[1];
if (numero[1] == ".") {
    num = numero[0];
}
document.write(num + "<br>");


// Otra forma mas sencilla de un num  random entre 1-100
let numb = Math.random() * 99;
numb = Math.floor(numb + 1);
document.write(numb + "<br>")

document.write("<br>");

document.write(Math.round(1.59) + "<br>");
document.write(Math.fround(5.9) + "<br>");
document.write(Math.trunc(5.9999) + "<br>");

//Todo: Propiedades
document.write("<br>");

document.write(Math.PI + "<br>");
document.write(Math.SQRT1_2 + "<br>");
document.write(Math.SQRT2 + "<br>");


//Todo: Matematicas
document.write("<br>");

document.write(Math.E + "<br>");
document.write(Math.LN2 + "<br>");
document.write(Math.LN10 + "<br>");
document.write(Math.LOG2E + "<br>");
document.write(Math.LOG10E + "<br>");



