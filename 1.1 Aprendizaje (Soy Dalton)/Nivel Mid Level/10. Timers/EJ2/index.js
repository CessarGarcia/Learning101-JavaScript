//https://youtu.be/xOinGb2MZSk?t=13260

let alumnos = [
    {
        nombre: "César García",
        mail: "cessar@hotmal.com",
        materia: "Fisica"
    },
    {
        nombre: "Alonso Villafaña",
        mail: "alonso@hotmal.com",
        materia: "Programacion"
    },
    {
        nombre: "Lucas Dalto",
        mail: "soydalto@gmail.com",
        materia: "Matematicas"
    },
    {
        nombre: "Juan Manuel",
        mail: "juanitopanchotera@hotmal.com",
        materia: "Ingles"
    },
];

const button = document.querySelector(".btn-confirm");

for(alumno in alumnos){
    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let mail = datos["mail"];
    let materia = datos["materia"];
    let html = `
    <div class="div-item nombre">${nombre}</div>
        <div class="div-item email">${mail}</div>
        <div class="div-item materia">${materia}</div>
        <div class="div-item semana">
            <select class="semana-elegida">
                <option value="Semana 1">Semana 1</option>
                <option value="Semana 2">Semana 2</option>
            </select>
        </div>`;
    document.querySelector(".grid-container").innerHTML += html;
}

button.addEventListener("click", ()=>{
    let elementos = document.querySelectorAll(".semana");
    let semanaElegida = document.querySelectorAll(".semana-elegida");
    for(elemento in elementos){
        semana = elementos[elemento];
        semana.innerHTML = semanaElegida[elemento].value;
    }
})