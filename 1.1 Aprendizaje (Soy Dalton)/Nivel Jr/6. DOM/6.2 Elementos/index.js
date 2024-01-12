//Todo: Los objetos se definen con const y las variables con let

const contenedor = document.querySelector(".contenedor");

// const item = document.createElement("LI");
// document.write(item);

// item.innerHTML = "Este es un item de la lista";

// const textItem = document.createTextNode("Este es un item de la lista");
// item.appendChild(textItem);
// contenedor.appendChild(item)
// console.log(item);

// const fragmento = document.createDocumentFragment();
// for (i=0; i<10; i++) {
//     const item = document.createElement("LI");
//     item.innerHTML = "Este es un item de la lista";
//     fragmento.appendChild(item);
// }
// contenedor.appendChild(fragmento)

// for (i=0; i<10; i++) {
//     const item = document.createElement("LI");
//     item.innerHTML = "Este es un item de la lista";
//     contenedor.appendChild(item);
// }

// const primerHijo = contenedor.firstChild;
// const primerHijo = contenedor.lastChild;
// const primerHijo = contenedor.firstElementChild;
// const primerHijo = contenedor.lastElementChild;
const primerHijo = contenedor.lastElementChild;
// const hijos = contenedor.childNodes;
const hijos = contenedor.children;
console.log(primerHijo);

for(hijo of hijos){
    console.log(hijo);
}

// console.log(hijos);
// hijos.forEach(hijo => console.log(hijo));

// console.log(fragmento);
// console.log(item);

const parrafo = document.createElement("P").innerHTML = "parrafo";
const h2_nuevo = document.createElement("H2");
// h2_nuevo.innerHTML ="Titulo";

const h2_anterior = document.querySelector(".h2");


//Todo: Metodos de child
//Todo: Primero el nuevo y despues el antiguo
// contenedor.replaceChild(h2_nuevo, h2_anterior);
// contenedor.removeChild(h2_anterior);

// let respuesta = h2_anterior.hasChildNodes();

// if(respuesta)document.write("El elemento tiene hijos")
// else document.write("El elemento no tiene hijos")


//Todo: Propiedades de parents (Padre)
console.log(contenedor.parentElement); // body
console.log(contenedor.parentNode); // body


//Todo: Propiedades de Siblings (Hermanos)
console.log(h2_anterior.nextSibling);
console.log(h2_anterior.previousSibling);
console.log(h2_anterior.nextElementSibling);
console.log(h2_anterior.previousElementSibling);


//Todo: Nodos extras
const div3 = document.querySelector(".div-3");
console.log(div3.closest(".div-2"));