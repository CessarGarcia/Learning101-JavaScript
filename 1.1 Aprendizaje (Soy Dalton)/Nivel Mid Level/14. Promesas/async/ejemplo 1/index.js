/* Crea un sistema que almacene la informacion de las materias y las muestre de forma ordenada */
const materiasHtml = document.querySelector(".materias");
const nombre = document.querySelector(".nombre");
const nota = document.querySelector(".nota");

const materias = [
    {
        nombre: "Fisica 1",
        nota: 7
    },
    {
        nombre: "Matematicas",
        nota: 9
    },
    {
        nombre: "Fisica 2",
        nota: 10
    },
    {
        nombre: "Quimica",
        nota: 8
    },
    {
        nombre: "Español",
        nota: 6
    },
]

const obtenerMateria = (id)=>{
    return new Promise((resolve, reject)=>{
        materia = materias[id];
        if(materia == undefined) reject("No existe la materia")
        else {
            resolve(materia)
        }
    })
}

const devolverMateria = async()=>{
    let materia = [];
    for(let i=0; i<materias.length; i++){
        materia[i] = await obtenerMateria(i);
        let html = `<div class="materia">
                    <h2 class="nombre">${materia[i].nombre}</h2>
                    <p class="nota">${materia[i].nota}</p>
                    </div>`;
        materiasHtml.innerHTML += html;
    }
}

devolverMateria()