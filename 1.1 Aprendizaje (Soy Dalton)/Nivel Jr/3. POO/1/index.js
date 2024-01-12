class animal {
    constructor(especie, sexo, edad, color){
        // especie, sexo, edad y color son los parametros 
        this.especie = especie;
        this.sexo = sexo;
        this.edad = edad;
        this.color = color;
        // Con this haces mencion al objeto
        this.informacion = `<br> Soy un ${this.especie}, tengo ${this.edad} año y soy de color ${this.color}`;
    }
    /* Todo: Al estar dentro de la clase, es un metodo
            Si esta a fuera de la clase, es una funcion
            los metodos no pueden tener flecha => 
    */
    verInfo(){
        document.write(this.informacion)
    }
}

const gato = new animal("gato", "Macho", 3, "atigrado");
const perro = new animal("perro", "Hembra",1, "blanco");
const conejo = new animal("conejo", "Macho", 4, "cafe");

console.log(gato);
document.write(gato.color);

// document.write(gato.informacion);
// document.write(perro.informacion);
// document.write(conejo.informacion);

gato.verInfo();
perro.verInfo();
conejo.verInfo();