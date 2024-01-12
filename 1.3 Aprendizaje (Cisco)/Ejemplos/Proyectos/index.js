class Dato {
    constructor(nombre, telefono, correo) {
        this._nombre = nombre;
        this._telefono = telefono;
        this._correo = correo;
    }
}

const Datos = [
    new Dato("Maxwell Wright", "(0191) 719 6495", "Curabitur.egestas.nunc@nonummyac.co.uk"),
    new Dato("Raja Villarreal", "0866 398 2895", "posuere.vulputate@sed.com"),
    new Dato("Helen Richards", "0800 1111", "libero@convallis.edu")
];

let genera_tabla = () => {
    let datoHTML = "";
    for (let dato of Datos) {
        datoHTML += crearTablaHTML(dato);
    }
    document.getElementById("lista-tabla").innerHTML = datoHTML;
}


const crearTablaHTML = (Dato) => {
    let datoHTML = `
    <tr>
        <td>${Dato._nombre}</td>
        <td>${Dato._telefono}</td>
        <td>${Dato._correo}</td>
    </tr>
    `;
    return datoHTML;
}