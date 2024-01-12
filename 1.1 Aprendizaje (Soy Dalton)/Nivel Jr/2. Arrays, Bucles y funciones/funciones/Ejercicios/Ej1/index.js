let free = false;

const validarCliente = (time) =>{
    let edad = prompt("¿Ingresa tu edad?");
    if(edad >= 18){
        if(time >= 2 && time <7 && free == false){
            alert("Bienvenido, puedes pasar gratis");
            free = true;
        }else{
            alert("Puedes pasar, pero debes pagar la entrada")
        }
    }else{
        alert("Lo siento, eres menor de edad, no puedes entrar");
    }
}

validarCliente(2);
validarCliente(23);
validarCliente(5);