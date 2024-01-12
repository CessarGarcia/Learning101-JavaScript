class Persona{
    constructor(nombre,email){
        this.nombre = nombre;
        this.email = email; 
    }
};

const data = [
    ["Camila Nesa"],
    ["Robertico", "Robertico@mail.com"],
    ["RancioRmirez", "RancioRamirez@mail.com"],
    ["Cofla mesta", "Cofla@mail.com"],
];

const personas = [];

for(let i=0; i<data.length;i++){
    personas[i] = new Persona(data[i][0], data[i][1]);
}

const obtenerPersona = (id)=>{
    return new Promise((resolve,reject)=>{
        if(personas[id] == undefined) reject("No se ha encontrado a la persona");
        else {
            resolve(personas[id])
        }
    })
}

const obtenerEmail = (id) =>{
    return new Promise((resolve,reject)=>{
        if(personas[id].email == undefined) reject("no se ha encontrado el email");
        else resolve(personas[id].email)
    })
}

const obtenerNombre = (id) =>{
    return new Promise((resolve, reject)=>{
        if(personas[id].nombre == undefined) reject("no se ha encontrado el nombre");
        else resolve(personas[id].nombre)
    })
}

let id = 1;
obtenerPersona(id).then((persona)=>{
    console.log(persona.nombre);
    return obtenerEmail(id);
}).then((email)=>{
    console.log(email);
}).catch(e=>{
    console.log(e);
})