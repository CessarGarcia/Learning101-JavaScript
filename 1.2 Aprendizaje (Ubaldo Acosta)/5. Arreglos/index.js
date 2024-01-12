let autos = new Array("BMW", "Mercedez", "Ferrari");

autos.push("Audi");

for(let i=0; i<=autos.length -1; i++){
    console.log(autos[i]);
}

autos[0] = "tesla";
console.log(autos[0]);

autos[autos.length] = "Cadillac";
console.log(autos);

let isArreglo = Array.isArray(autos);
console.log(isArreglo);

console.log(autos instanceof Array);