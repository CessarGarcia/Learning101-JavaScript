let inner = function() {
    console.log('Tercer paso');
}

let outer = function(callback) {
    console.log('Segundo paso');
    callback();
    console.log('Cuarto paso');
}

console.log('Primer paso');
outer(inner);
console.log('Quinto paso');

let sumar = (a,b) => a+b;
console.log(sumar(3,5)); 