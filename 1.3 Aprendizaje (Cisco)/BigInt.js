const x = Number.MAX_SAFE_INTEGER +1;
const y = Number.MAX_SAFE_INTEGER +2;

let resultado = Number.MAX_SAFE_INTEGER * Number.EPSILON;
console.log(resultado);

console.log(x);
console.log(y);

console.log(Number.MAX_SAFE_INTEGER);

const num = 2n**53n;
console.log(num);

const numero = BigInt(5)+ 5n;
console.log(numero);


//Todo: Metodo asIntN de BigInt
console.log(BigInt.asIntN(2, -3n));
console.log(BigInt.asIntN(2, -2n));
console.log(BigInt.asIntN(2, -1n));
console.log(BigInt.asIntN(2, -0n));


//Todo: Metodo asUintN de BigInt
console.log(BigInt.asUintN(2, 2n));