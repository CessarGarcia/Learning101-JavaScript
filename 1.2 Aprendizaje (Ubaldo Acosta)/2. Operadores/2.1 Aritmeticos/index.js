let a=3, b=2, d=1, e=4;

//Todo: Operadores aritmeticos
let c = a+b;
console.log("Resultado de la suma: " +c);

c = a-b;
console.log("Resultado de la resta: " +c);

c = a*b;
console.log("Resultado de la multiplicacion: " +c);

c = a/b;
console.log("Resultado de la division: " + c);

c = a%b; //Resto de la division (Residuo)
console.log("Residuo de la division: " +c);

c = a**b;
console.log("Exponencial: " + c);

//Preincremento
c=++a; //a tiene el valor de 3 inicialmente, pero anteriormente se incrementa a 1
console.log("Pre-Incremento: " + a);
console.log("Pre-Incremento: " + c);

//Postincremento
c=b++; // b tiene el valor de 2 inicialmente y como se incrementa despues b, la variable c sigue siendo 2
console.log("Pre-Incremento: " + b);
console.log("Post-Incremento: " + c);

//Pre Decremento
c=--a;
console.log(a);
console.log(c);

//Post Decremento
c=a--;
console.log(a);
console.log(c);


//let a=3, b=2, d=1, e=4;
//Primero se hace las * y / por orden jerarquico y despues la +
let z = a*b + e/d;
console.log(z);

z = (a+b) / e * d;
console.log(z);