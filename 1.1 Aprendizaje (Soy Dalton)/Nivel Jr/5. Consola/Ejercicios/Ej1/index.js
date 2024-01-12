/* Solicitar datos y mencionar si aprueba
    - Apreba +7 pts
    - Contar con al menos 90% asistencia
    - Tener 75% de trabajos

    Si no aprueba mostrarlo con rojo, 
    estructurar los datos en tabla por consola
*/

let materias = {
    // [Asistencia] [Promedio] [tareas]
    fisica: [90, 7.5, 4, "fisica"],
    matematicas: [50, 8.8, 2, "matematicas"],
    programacion: [80, 5.5, 3, "programacion"],
    logica: [100, 8.7, 3, "logica"]
}

const aprobo = () => {
    for(materia in materias){
        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let tareas = materias[materia][2];

        if(asistencias >= 90 && promedio>=7 && tareas >= 3){
            console.log(`Aprobaste la materia de: ${materias[materia][3]}`);
            console.log("%cAprobado", "color:green");
        }else{
            console.log(`Reprobaste la materia de: ${materias[materia][3]}`);
            console.log("%cReprobado", "color:red");
        }
    }
}

aprobo()