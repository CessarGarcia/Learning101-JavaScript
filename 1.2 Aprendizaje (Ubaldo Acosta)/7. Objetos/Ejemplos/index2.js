/* EJERCICIO 2:
    Se debe crear un sistema de ventas que contenga 3 clases:
        Orden: idOrden, productos[], contadorProductosAgregados, contador de ordenes, max_product, min_Product
            metodos: agregar producto, calcular total, 
        Productos: idProducto, nombre, precio, contadorProductos
            metodos: producto(nombre, precio), getIdProducto, getNombre, setNombre, getPrecio, setPrecio, 
*/

class Orden{
    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._productos = [];
        this._idOrden = ++ Orden.contadorOrdenes;
    }
    get idOrden(){
        return this._idOrden;
    }
    agregarProduct(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
        }else{
            console.log("Se ha superado la cantidad maxima de productos agregados");
        }
    }
    total(){
        let totalVenta = 0;
        for(let producto of this._productos){
            totalVenta += producto.precio;
        }
        return totalVenta + ' \n';
    }

    mostrarOrden(){
        let productosOrden = '';
        for(let producto of this._productos){
            productosOrden += '\n{' +producto.toString() + '} ';
        }
        console.log(`Orden: ${this._idOrden} Total: $${this.total()} \n Productos: ${productosOrden}`);
    }
}

class Productos{
    static contadorProductos = 0;

    constructor(nombre, precio){
        this._nombre = nombre;
        this._precio = precio;
        this._idProduct = ++Productos.contadorProductos;
    }
    get idProduct (){
        return this._idProduct;
    }
    get nombreProduct(){
        return this._nombre;
    }
    set nombreProduct(nombre){
        this._nombre = nombre;
    }
    get precio(){
        return this._precio;
    }
    set precio(precio){
        this.precio = precio;
    }
    toString(){
        return `idProdcto: ${this._idProduct}, nombre: ${this._nombre}, precio: $${this._precio} `
    }
}

let producto1 = new Productos("Pantalon", 200);
let producto2 = new Productos("Camisa", 100);
let producto3 = new Productos("Camisa", 100);

console.log(producto1.toString());
console.log(producto2.toString());

let orden1 = new Orden();
orden1.agregarProduct(producto1);
orden1.agregarProduct(producto2);
orden1.agregarProduct(producto3);
orden1.mostrarOrden();

let orden2 = new Orden();
let producto4 = new Productos("cinturon", 50);
let producto5 = new Productos("Zapatos", 450);
orden2.agregarProduct(producto1);
orden2.agregarProduct(producto2);
orden2.agregarProduct(producto2);
orden2.agregarProduct(producto5);
orden2.agregarProduct(producto4);
orden2.mostrarOrden();