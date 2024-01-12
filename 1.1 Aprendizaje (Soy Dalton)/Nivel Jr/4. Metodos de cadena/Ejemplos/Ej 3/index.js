
/*  - Preguntar en que materia se quiere escribir
    - Si ya hay 20 inscriptos, negarle la inscripcion
    - Si hay menos de 20, inscribirlo y añadirlo a la lista de personas
*/

let materias = {
    fisica: ["Jose", "Pedro", "Maria", "César"],
    matematicas: ["César", "Pedro", "Juan", "Pepito"],
    programacion: ["Dalton", "Pedro", "Juan", "Maria", "César"],
    logica: ["Rodriguez", "Pedro", "Juan", "Maria", "César"],
}

const inscribir = (alumno,materia) =>{
    personas = materias[materia];

    if(alumno.length >= 21){
        document.write(`Lo siento <b style="color: blue">${alumno}</b>, el cupo para la materia de <b style="color: blue">${materia}</b> ya esta llena`);
    }else {
        personas.push(alumno);
        if(materia == "fisica"){
            materias = {
                fisica: personas,
                matematicas: materias['matematicas'],
                programacion: materias['programacion'],
                logica: materias['logica'],
            }
        }else if (materia == "matematicas"){
            materias = {
                fisica: materias['fisica'],
                matematicas: personas,
                programacion: materias['programacion'],
                logica: materias['logica'],
            }
        }else if (materia == "programacion"){
            materias = {
                fisica: materias['fisica'],
                matematicas: materias['matematicas'],
                programacion: personas,
                logica: materias['logica'],
            }
        }else if(materia == "logica"){
            materias = {
                fisica: materias['fisica'],
                matematicas: materias['matematicas'],
                programacion: materias['programacion'],
                logica: personas,
            }
        }
        document.write(`Felicidades <b style="color: blue">${alumno}</b>, 
                    te has inscrito a la materia de
                    <b style="color: blue">${materia}</b> correctamente`);
    }
}

document.write(materias['fisica'] + "<br>");

inscribir("Juan", "fisica");

document.write("<br>" + materias['fisica']);