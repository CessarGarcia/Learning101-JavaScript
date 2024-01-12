let cantidad = prompt("¿Cuantos alumnos son? ");
let alumnos = [];

for(let i=0; i < cantidad; i++){
    alumnos[i] = [prompt("Nombre del alumno " + (i + 1)),0];
}

const asistencia = (nombre,p)=>{
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P"){
        alumnos[p][1]++;
    }
}

for(let i=0; i<30; i++){
    for(alumno in alumnos){
        asistencia(alumnos[alumno][0],alumno);
    }
}

for(alumno in alumnos){
    let resultado = `${alumnos[alumno][0]}: <br>
        Presentes: ${alumnos[alumno][1]} <br>
        Ausencias: ${30 - alumnos[alumno][1] }`;

    if(30 - alumnos[alumno][1] > 18){
        resultado += "Reprobado por inasistencias";
    }else{
        resultado += "<br><br>"
    }
    document.write(resultado);
}