class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }
}

const personas = [
    new Persona("Juan", "Perez"),
    new Persona("Pedro", "Martinez")
];

function viewPeople(){
    let texto = "";
    for(let persona of personas){
        texto += `<li> ${persona.nombre} ${persona.apellido} </li>`;
    }
    document.getElementById("personas").innerHTML = texto;
}

function newPeople(){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;

    if(nombre != "" && apellido != ""){
        const persona = new Persona(nombre, apellido);
        personas.push(persona);
        document.getElementById("sinDatos").innerHTML = "";
        viewPeople();
    }else{
        document.getElementById("sinDatos").innerHTML = "No se puede agregar una nueva persona porque los valores estan vacios";
    }

}