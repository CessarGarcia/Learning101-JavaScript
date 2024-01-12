// Todo: Calcular potencias, raices cuadradas y cubicas



alert("¿Que operacion desea realizar?")
let operacion = prompt("1: Potencia, 2: Raiz Cuadrada, 3: Raiz Cubica")

if (operacion === "1") {
    let num = prompt("Ingresa un numero para calcular la potencia");
    potencia = num ** 2;
    alert("La potencia de " + num + " es: " + potencia);
} else if (operacion === "2") {
    let num = prompt("Ingresa un numero para calcular Raiz cuadrada");
    alert("La raíz cuadrada de " + num + " es " + Math.sqrt(num));
} else if (operacion === "3") {
    let num = prompt("Ingresa un numero para calcular Raiz cubica");
    alert("La raíz cúbica de " + num + " es " + Math.cbrt(num));
}