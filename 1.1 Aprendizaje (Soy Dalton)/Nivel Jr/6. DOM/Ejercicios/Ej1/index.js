/*
    Crear un sistema que:
        - Indicar las 20 llaves posibles con sus 4 img y se debe
            seleccionar cual llave usar
        - Una vez seleccionada enviar los datos al servidor y 
            que otro programador se encargue
*/

const contenedor = document.querySelector(".flex-container");

let contador = 0;

function crearLlave(nombre, modelo, precio){
    contador++;
    img = `<img class="img" src="https://3.bp.blogspot.com/-Nmpj8R2sNO4/W0kxp_nokvI/AAAAAAAIiHk/-FjZr7D7oKYumug_nSKjFMeHjMBBbRPggCLcBGAs/s1600/key-security.png">`;
    nombre = `<p><b> Nombre: </b> ${nombre} </p>`;
    modelo = `<p class="modelo" id="${modelo}"><b>Modelo: </b>${modelo} </p>`;
    precio = `<p> <b>Precio: </b> <span class="precio"> $${precio}</span> </p>`;
    return[nombre,modelo,precio, img];
}

let docFragment = document.createDocumentFragment();

for(i=1; i<21; i++){
    let modeloRandom = Math.round(Math.random()*1000);
    let precioRandom = Math.round(Math.random()*10+30);
    let llave1 = crearLlave(`llave ${i}`, modeloRandom, precioRandom);

    let div = document.createElement("DIV");
    div.addEventListener("click", ()=>{
        document.querySelector(".key-data").value = modeloRandom;
    })
    div.tabIndex = i;
    div.classList.add(`item-${i}`, `flex-item`);
    div.innerHTML = llave1[0] + llave1[1] + llave1[2] + llave1[3];

    docFragment.appendChild(div);
}

contenedor.appendChild(docFragment);