let resultado = sumarTotal(5, 4, 3, 10, 2);

function sumarTotal(){
    let suma = 0;
    for(let i=0; i<arguments.length; i++){
        suma += arguments[i];
    }
    return suma;
}
console.log(resultado);