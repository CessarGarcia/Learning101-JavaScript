/* Utiliza la propiedad prompt para que el usuario pueda ingresar una determinada cantidad de nombres, 
    al final imprime todos los nombres que contenga el arreglo. */
let names = [];
let terminar = false;

while(!terminar){
    let name = prompt("Ingresa un nombre o preciona cancelar");
    if(name != null){
        //Agregamos el nombre ingresado al arreglo names[] con push
        names.push(name);
    }else{
        //El usuario preciono cancelar
        terminar = true;
    }
}

for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}