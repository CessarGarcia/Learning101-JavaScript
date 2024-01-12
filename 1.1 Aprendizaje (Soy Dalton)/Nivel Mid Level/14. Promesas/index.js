let nombre = "Juan";

let myPromess = new Promise((resolve,reject)=>{
    if(nombre=="Pedro"){
        resolve(nombre)
    }else{
        reject("El nombre no es pedro");
    }
});

myPromess.then(valor => console.log(valor)).catch(error=>{
    console.log(error);
})

myPromess.then(resultado=> console.log(resultado)).catch((error)=>{
    console.log(error);
})