//arrays con [] corchetes
let frutas = [" Manzana", " Platano", " Guayava"];
verduras = [" Papa", " Zanahoria", " Calavaza", frutas];
document.write(frutas[0]); //Solo se muestra el elemento que esta en la posicion 


//arrays asociativos 
let persona = {
    nombre: "César",
    apellido: "Garcia",
    edad: 21,
    nacionalidad: "mexicana",
};

document.write("<br>" +persona["nombre"]+ "<br>");


//Ciclos while
let num = 0;
while (num < 10){
    num++;
    document.write(num);
    if(num == 5){
        break;
    }
}

document.write("<br>");

//Ciclos for
for(let i=10; i >=0; i--){
    if(i==5){
        continue;
    }
    document.write(i);
}

document.write("<br>");


//Ciclo for in y for of
for(fruta in frutas){
    document.write(fruta);
}

document.write("<br>");

for(fruta in frutas){
    document.write(frutas[fruta]);
}

document.write("<br>");

for(fruta of frutas){
    document.write(fruta);
}

frutas.cantidad = 20;
document.write(frutas.cantidad)

document.write("<br><br>");

forLabel:
for(let FyV in verduras){
    if (FyV == 2) {
        for (let FyV of frutas){
            document.write(FyV);
            break forLabel;
        }
    }else{
        document.write(verduras[FyV]);
    }
}