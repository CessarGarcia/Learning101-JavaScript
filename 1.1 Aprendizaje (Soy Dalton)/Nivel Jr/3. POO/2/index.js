class Animal {
    constructor(especie, sexo, edad, color){
        this.especie = especie;
        this.sexo = sexo;
        this.edad = edad;
        this.color = color;
        this.informacion = `<br> Soy un ${this.especie}, tengo ${this.edad} año y soy de color ${this.color}`;
    }
    verInfo(){
        document.write(this.informacion);
    }
    // TODO: A esto se le conoce polimorfismo 
    // Cualidad que un objeto puede tener multiples comportamiento
    // ladrar(){
    //     if(this.especie == "perro"){
    //         document.write("<br>" + "waw")
    //     }else{
    //         document.write("<br>" + "No puede ladrar ya que es un " + this.especie)
    //     }
    // }
}

// Todo: Herencia
//No se puede tener un objeto con la misma clase
class Perro extends Animal {
    constructor(especie, sexo, edad, color, raza) {
        super(especie, sexo, edad, color);
        this.raza = null;
    }
    // Todo: Meotodo Estaticos
    // No se utilizan los parametros 
    static ladrar() {
        alert(this.especie + " Wow");
    }
    set setRaza(newRaza){
        this.raza = newRaza;
    }
    get getRaza(){
        return this.raza;
    }
}

// Todo: Los objetos se definen con const 
// El orden de crear las variables importan, primero se crean la clase principal
// posteriormente el de la herencia, de otro modo no funcion el metodo verInfo()
const gato = new Animal("gato", "Macho", 3, "atigrado");
const conejo = new Animal("conejo", "Macho", 4, "cafe");
const perro = new Animal("Perro", "Hembra", 2, "Negro");
const dog = new Perro("Perro", "macho", 3, "marrón", "Labrador");
const miPerro = new Perro("Perro", "Hembra", 1, "Beige", "chihuahua");

console.log(gato);
document.write(gato.color + "<br>");

// document.write(gato.informacion);
// document.write(perro.informacion);
// document.write(conejo.informacion);

gato.verInfo();
conejo.verInfo();
perro.verInfo();

// Puesto que dog esta incluido en la clase Perro y este a su vez de 
// la clase Animal puede utilizar el metodo verInfo()
dog.verInfo();

// gato.ladrar();
// dog.ladrar();

// Al no utilizar los parametros, this.especie muestra undefined
// Perro.ladrar();

miPerro.setRaza = "Bug Dog";
document.write("<br>" + miPerro.raza)

document.write("<br>" + miPerro.getRaza);