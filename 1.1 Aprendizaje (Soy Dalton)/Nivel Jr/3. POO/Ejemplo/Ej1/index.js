/* Se quiere comprar un nuevo cel, mostrar las particularidades de 3 
    celulares, se debe tener: marca, color, peso, camara, y memoria Ram

    Debe tener las cualidades de: prender, reiniciar, tomar fotos
 */

class celulares{
    constructor(marca, color, costo, camara, memoriaRam) {
        this.marca = marca;
        this.color = color;
        this.peso = costo;
        this.camara = camara;
        this.memoriaRam = memoriaRam;
        this.encendido = false;
        this.info = `<br> <b>Marca: </b> ${this.marca}, <b>Color:</b> ${this.color}, 
                    <b>Costo: </b>${this.peso}, <b> Camara:</b> ${this.camara}, 
                    <b> memoria Ram:</b> ${this.memoriaRam}`;
    }
    verInfo(){
        document.write(this.info);
    }
    encender(){
        if(this.encendido == false){
            document.write("<br> El celular se esta encendiendo");
            this.encendido = true;
        }else{
            document.write("<br> Celular apagado")
            this.encendido = false;
        }
    }
}

class funcionesCelular extends celulares {
    constructor(marca, color, costo, camara, memoriaRam, bateria){
        super(marca, color, costo, camara, memoriaRam);
        this.bateria = bateria;
    }
    reiniciar(){
        if(this.encendido = true){
            document.write("<br>" + "El celular " + this.marca + " se esta reiniciando");
        }else{
            document.write("<br> El celular esta apagado")
        }
    }
    tomarFoto(){
        document.write("<br>" + "El celular " + this.marca + " esta tomando una foto");
    }
    set setBatery(batery){
        this.bateria = batery;
    }
    get getBatery(){
        return this.bateria;
    }
}

class celularAltaGama extends celulares{
    constructor(marca, color, costo, camara, memoriaRam, camaraExtra){
        super(marca, color, costo, camara, memoriaRam);
        this.camaraExtra = camaraExtra;
    }
    grabarVideoLento(){
        document.write("Se esta grabando en camara lenta");
    }
    reconocimientoFacial(){
        document.write("Reconocimiento facial");
    }
    infoGamaAlta(){
        document.write("<br>" + this.verInfo() + ` <b>Resolucion de camara extra: </b>${this.camaraExtra}`);
    }
}

const Samsung = new celulares("Samsung", "Negro", "30,000", "4k", "5 Gb");
document.write(Samsung.info);
Samsung.encender();

document.write("<br>");
const samsungGalaxy = new funcionesCelular("Samsung Galaxy", "Blanco", "35, 000", "4k", "10 GB");
samsungGalaxy.verInfo();


document.write("<br>");


const Huawuei = new funcionesCelular("Huawei", "Blanco", "5,000", "2k", "3 Gb");
Huawuei.verInfo();
Huawuei.reiniciar();


document.write("<br>");


const LG = new funcionesCelular("LG", "Cafe", "7,000", "4k", "10 Gb");
LG.verInfo();
LG.tomarFoto();
LG.setBatery = "4000 maH"
document.write("<br>" + LG.getBatery);


document.write("<br>");


const iphone = new celularAltaGama("iphone", "Rojo", "45,000", "4k", "20Gb", "Full HD");
iphone.infoGamaAlta();
const Samsung2 = new celularAltaGama("Samsung Prime", "Negro", "25,000", "4k", "20Gb", "Full HD");
Samsung2.infoGamaAlta();
