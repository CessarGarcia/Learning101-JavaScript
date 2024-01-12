let a=3, b=2, c="3";

//3=2 => falso
let comparacion = a==b;
console.log(comparacion); 

//3=3? => verdadero
comparacion= a==c;
console.log(comparacion);

//Estrictamente igual, verifica si el valor & el tipo es igual
comparacion= a===c;
console.log(comparacion);

//Verifica si los datos son diferentes, en su valor y tipo
comparacion= a!==c;
console.log(comparacion);

//Verifica si son diferentes
comparacion= a!=c;
console.log(comparacion);


//Todo Mayor que o menor que
//Mayor => 3>2
comparacion = a>b;
console.log(comparacion);

//Menor => 3<2
comparacion = a<b;
console.log(comparacion);

//Mayor o igual => 3>=3
comparacion = a>=c;
console.log(comparacion);

//Menor o igual => 3<=3
comparacion = a<=c; 
console.log(comparacion);