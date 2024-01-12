const mostrarReloj = () =>{
    let fecha = new Date();
    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());

    document.getElementById("hora").innerHTML = `${hr}:${min}:${seg}`;

    const meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
    const dias = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
    let dia = dias[fecha.getDay()];
    let diaNum = fecha.getDay()
    let mes = meses[fecha.getMonth()];
    let año = fecha.getFullYear();

    document.getElementById("fecha").innerHTML = `${dia}, ${diaNum} ${mes}; ${año}`;

    document.getElementById("contenedor").classList.toggle("animar");
}

const formatoHora = (hora) => {
    if(hora <10){
        hora = "0" + hora;
    }
    return hora;
}
setInterval(mostrarReloj, 1000)