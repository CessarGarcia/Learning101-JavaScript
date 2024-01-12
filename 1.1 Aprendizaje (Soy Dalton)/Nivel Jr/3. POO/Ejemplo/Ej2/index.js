/* Se requiere crear un sistema de descargas de apps
    cada aplicacion debe contener:
        Cantidad de descargas, puntuacion y peso
    Debe tener las funcionalidades de:
        Instalar, Abrir
*/

class Aplicaciones {
    constructor(nombre, vecesDescargado, puntuacion, peso){
        this.nombre = nombre;
        this.cantidadDescargas = vecesDescargado;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.info = `<b>Nombre:</b> ${this.nombre},
                    <b>Veces Descargado: </b> ${this.cantidadDescargas},
                    <b> Puntuacion: </b> ${this.puntuacion},
                    <b> peso: </b> ${this.peso} <br>`;
    }
    static instalar(){
        alert("Las aplicaciones se estan instalando");
    }
    abrir(){
        document.write("La aplicacion " + this.nombre + " se esta abriendo <br>")
    }
}

Aplicaciones.instalar();

const Facebook = new Aplicaciones("Facebook", "3M", "5★", "800 Mb");
document.write(Facebook.info);
Facebook.abrir();

const Instagram = new Aplicaciones("Instagram", "2M", "5★", "500 Mb");
document.write(Instagram.info);