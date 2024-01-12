// Ejercicio que verifica si es mayor de edad
// PD: una persona mayor de edad es mayor o igual a 18

nombre = prompt("Cual es su nombre");
edad = prompt("Cual es su edad");

if(edad >= 18){
    document.write("Muy bien " + nombre + " es Mayor de edad, por lo que puede pasar");
}else{
    document.write("Lo siento " + nombre + " es menor de edad, por lo que NO puede pasar");
}