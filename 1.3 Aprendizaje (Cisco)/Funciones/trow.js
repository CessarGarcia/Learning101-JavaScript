let numbers = [10, 40, 0, 20, 50];

function dividir(a,b){
    if(b == 0){
        throw new RangeError("No se puede dividir entre 0");
    }else{
        let res = a/b; 
        return res;
    }
}

dividir();

for (let i=0; i< numbers.length; i++) {
    let resultado;
    try {
        resultado = dividir(1000, numbers[i]);
    } catch (err) {
        resultado = err;
    }
    console.log(resultado);
}