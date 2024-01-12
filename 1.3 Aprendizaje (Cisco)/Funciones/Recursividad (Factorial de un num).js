// n! = n(n-1) * (n-2) *...* x1
function factorial(n){
    let resultado =1;
    if(n==0){
        return 1;
    }else if(n<0){
        return "El factorial de un numero negativo, no existe";
    }else{
        return n * factorial(n - 1);
        // while(n>1){
        //     resultado *=n; // resultado = resultado*n
        //     n--;
        // }
        // return resultado;
    }
}

console.log(factorial(6));

