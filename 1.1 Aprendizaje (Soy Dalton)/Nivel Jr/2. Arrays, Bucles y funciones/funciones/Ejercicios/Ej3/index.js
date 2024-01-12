const sumar = (num1, num2) => {
    return parseInt(num1) + parseInt(num2);
}
const restar = (num1, num2) => {
    return parseInt(num1) - parseInt(num2);
}
const multiplicar = (num1, num2) => {
    return parseInt(num1) * parseInt(num2);
}
const dividir = (num1, num2) => {
    return parseInt(num1) / parseInt(num2);
}

alert("¿Que operacion quieres realizar?");
let operacion = prompt("1. Sumar 2. Restar 3. Multiplicar 4. Dividir");

if(operacion == 1){
    let number1 = prompt("Ingrese el primer numero");
    let number2 = prompt("Ingrese el Segundo numero");
    res = sumar(number1, number2);
    alert(`Tu resultado es: ${res}`);    
}
if(operacion == 2){
    let number1 = prompt("Ingrese el primer numero");
    let number2 = prompt("Ingrese el Segundo numero");
    res = restar(number1, number2);
    alert(`Tu resultado es: ${res}`);
}
if(operacion == 3){
    let number1 = prompt("Ingrese el primer numero");
    let number2 = prompt("Ingrese el Segundo numero");
    res = multiplicar(number1, number2);
    alert(`Tu resultado es: ${res}`);
}
if(operacion == 4){
    let number1 = prompt("Ingrese el primer numero");
    let number2 = prompt("Ingrese el Segundo numero");
    res = dividir(number1, number2);
    alert(`Tu resultado es: ${res}`);
}
else{
    alert("No se ha encontrado la operacion");
}