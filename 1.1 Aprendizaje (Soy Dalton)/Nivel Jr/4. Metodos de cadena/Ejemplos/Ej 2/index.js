/*  - La funcion debe devolver:
        Profesor asignado, nombre de los alumnos
    - Funcion que nos indique en cuantas clases esta un alumno
    - Nombre de las clases y sus profesores
*/

const obtenerInfo = (materia) => {
    materias = {
        fisica: ["Jose", "Pedro", "Maria", "César"],
        matematicas: ["César", "Pedro", "Juan", "Pepito"],
        programacion: ["Dalton", "Pedro", "Juan", "Maria", "César"],
        logica: ["Rodriguez", "Pedro", "Juan", "Maria", "César"],
    }
    if(materias[materia] !== undefined){
        return [materias[materia],materia,materias];
    }else{
        // document.write("La materia no existe");
        return materias;
    }
}


const viewInfo = (materia) => {
    let info = obtenerInfo(materia);

    if(info !== false){
        let Profesor = obtenerInfo(materia)[0][0];
        let alumnos = obtenerInfo(materia)[0];
        alumnos.shift();
        document.write(`Alumnos inscritos en la materia <b style="color: blue"> ${info[1]}: </b> <b style="color: green"> ${alumnos}, </b> con el profesor <b style="color: red">${Profesor}</b><br>`);
    }
}

const cantidadAlumClases = (alumno) => {
    let informacion = obtenerInfo();
    let clasesPresentes = [];
    let totalAlumnos = 0;

    for (info in informacion){
        if(informacion[info].includes(alumno)){
            totalAlumnos++;
            clasesPresentes.push(" " + info);
        }
    }
    return `<b style="color: blue"> ${alumno}</b> esta en 
            <b style="color: red">${totalAlumnos} </b> clases:
            <b style="color: blue">${clasesPresentes}</b>`;
}

viewInfo("fisica");
viewInfo("matematicas");
viewInfo("programacion");
viewInfo("logica");

document.write(cantidadAlumClases("Maria"));