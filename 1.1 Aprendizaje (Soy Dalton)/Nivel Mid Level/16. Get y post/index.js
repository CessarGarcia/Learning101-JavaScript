let peticion;
if(window.XMLHttpRequest){
    peticion = new XMLHttpRequest();
}else{
    peticion = new ActiveXObject("Microsoft.XMLHTTP")
}

peticion.addEventListener("load", () => {
    if (peticion.readyState === XMLHttpRequest.DONE) {
        let respuesta;
        if (peticion.status === 200 || peticion.status === 201) {
            respuesta = peticion.response;
        } else {
            respuesta = "No se ha completado la petición correctamente";
        }
        console.log(JSON.parse(respuesta));
    }
});

peticion.open("POST","https://reqres.in/api/users");

peticion.setRequestHeader("Content-type", "application/json;charset=UTF-8")

peticion.send(JSON.stringify({
    "nombre": "morfeo",
    "trabajo": "lider"
}));
