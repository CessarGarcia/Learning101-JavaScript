class Persona {
    constructor(nombre, email) {
        this._nombre = nombre;
        this._email = email;
    }
};

const data = [
    ["Céssar", "cessar@hola.com"],
    [,"alonso@hola.com"],
    ["fidel", "fidel@hola.com"],
    ["Lucas", "lucas@hola.com"],
];

const personas = [];

for (let i = 0; i < data.length; i++) {
    personas[i] = new Persona(data[i][0], data[i][1])
    // console.log(Persona[1]);
}

const getPersona = (id, cb) => {
    if (personas[id] == undefined) {
        cb("No se ha encontrado la persona");
    } else {
        cb(null, personas[id],id)
    }
}

const obtenerEmail = (id,cb) =>{
    if (personas[id]._email == undefined) {
        cb("No se ha encontrado el email");
    } else {
        cb(null, personas[id]._email)
    }
}

const obtenerNombre= (id, cb) =>{
    if(personas[id]._nombre == undefined){
        cb("No se ha encontrado el nombre");
    }else{
        cb(null, personas[id]._nombre)
    }
}

getPersona(1, (err, persona,id) => {
    if (err) {
        console.log(err);
    } else {
        console.log(persona._nombre);
        obtenerEmail(id, (err, email )=>{
            if(err){
                console.log(err);
            }else{
                console.log(email);
            }
        });

        obtenerNombre(id, (err)=>{
            if(err){
                console.log(err);
            }
        })
    }
})

