//ciclo do-while

let contador = 0;
do{
    console.log(contador);
    contador++;
}while(contador <=5);

let frutas = ["Manzana", " Platano", " Guayava"];
for(fruta in frutas){
    console.log(fruta);
}

let nums = [1, 2, 3, 4, 5];
for(num of nums){
    if(num ==4){
        break;
    }
    console.log(num);
}

inicio:
for(let i =1; i<=10; i++){
    if(i%2 !== 0){
        continue inicio;
    }
    console.log(i);
}