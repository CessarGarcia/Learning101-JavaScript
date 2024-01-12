let a=5, valmin=0,valMax=10;

//Todo: con el operador or (||) con que cumpla uno u la otra condicion entonces es verdadero
if(a>= valmin || a<= valMax){
    console.log("El valor de a esta entre 0 y 10");
}else{
    console.log("El valor no esta dentro de 0 y 10");
}

//Todo: con el operador and (&&) ambas evaluaciones deben ser verdaderas
if(a>= valmin && a<= valMax){
    console.log("El valor de a esta entre 0 y 10");
}else{
    console.log("El valor no esta dentro de 0 y 10");
}

let resultado = (3>2)? "Verdadero" : "Falso";
console.log(resultado);