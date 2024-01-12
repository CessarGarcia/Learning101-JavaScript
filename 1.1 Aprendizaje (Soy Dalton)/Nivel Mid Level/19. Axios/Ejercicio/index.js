/*
    Cofla quiere saber cuantos cursan un semestre y cuantos no,
    esta informacion la va a obtener de una api de su universidad

*/

const getInfo = async()=>{
    let aprobados = document.querySelector(".aprobados");
    let desaprobados = document.querySelector(".desaprobados");
    try {
        resultado = await axios("informacion.txt");
        aprobados.innerHTML += resultado.data.aprobados;
        desaprobados.innerHTML += resultado.data.desaprobados;
    } catch (error) {
        aprobados.innerHTML = "La API fallo";
        desaprobados.innerHTML = "La API fallo";
    }
    
}

document.getElementById("getInfo").addEventListener("click",getInfo);