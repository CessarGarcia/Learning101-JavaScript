// let myPromess = new Promise((resolve, reject)=>{
//    let expresion = false;
//    if(expresion){
//         resolve("Se resolvio correctamente");
//    }else{
//         reject("Se produjo un error");
//    }
// });

// myPromess.then(valor => console.log(valor), error => console.log(error));
// myPromess.then(valor => console.log(valor)).catch(error => console.log(error));


let promesa = new Promise((resolve) => {
    setTimeout(() => resolve("Saludos con promesa"), 3000);
})

// promesa.then(valor => console.log(valor));

async function miFuncProm(){
    return `Saludos con promesa y async`;
}

// miFuncProm().then(valor => console.log(valor));

async function funcionPromesaAwait(){
    let miPromesa = new Promise(resolve => {
        resolve("Promesa con await");
    });
    console.log(await miPromesa);
}
funcionPromesaAwait();

//Todo: Promesas, await, async y setTimeout
async function funPromAwaitTimeout(){
    console.log("Inicio de la funcion");
    let miPromesa = new Promise(resolve => {
        setTimeout(() => resolve("Promesa con await y TimeOut"), 3000);
    });
    console.log(await miPromesa);
    console.log("Fin de la funcion");
}

funPromAwaitTimeout();