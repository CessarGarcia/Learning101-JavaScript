/*  Imaginate que reprobaste 2 materias, para esto se debe de enviar un
    formulario para registrarse a la materia que debes con los datos:
        nombre, mail, materia Reprobada
        validar mail, nombre
    Enviar al servidor los datos
*/

const fullname = document.getElementById("fullname");
const mail = document.getElementById("mail");
const subject = document.getElementById("subject");
const envio = document.getElementById("envio");
const resultado = document.querySelector(".resultado");

envio.addEventListener("click",(e)=>{
    e.preventDefault();
    let error = validarCampos();
    if(error[0]){
        resultado.innerHTML = error[1];
        resultado.classList.add("red");
    }else{
        resultado.innerHTML = "Solicitud enviada correctamente";
        resultado.classList.add("green");
        resultado.classList.remove("red");
    }
})

const validarCampos = () =>{
    let error = [];
    if(fullname.value.length < 5){
        error[0] = true;
        error[1] = "Error, la longitud de caractes debe ser mayor a 5"
        return error;
    }else if(fullname.value.length >20){
        error[0] = true;
        error[1] = "Error, la longitud de caractes debe ser menor a 20"
        return error;
    }else if(mail.value.length < 5 || mail.value.length >40 || mail.value.indexOf("@") == -1 || mail.value.indexOf(".") == -1){
        error[0] = true;
        error[1] = "Error al ingresar el email";
        return error;
    }else if(subject.value.length <5 || subject.value.length >20){
        error[0] = true;
        error[1] = "Error al ingresar el nombre de la materia";
        return error;
    }
    error[0] = false;
    return error;
}