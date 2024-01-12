/* Proyecto 1:
    Se realizara una calculadora, ingresando 2 elementos 
    el operando A y el operando B y se tendra un boton 
    que al precionarlo regresará el resultado.
*/


function sumar(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let suma = parseInt(num1) + parseInt(num2);

    let res = (isNaN(suma))? 
    document.getElementById("resultado").innerHTML = "Favor de ingresar los numeros" : 
    document.getElementById("resultado").innerHTML = "Resultado: " + suma;
}

