/*
    Se debe dividir el tiempo de actividades de 2 semanas
        - 24hr estudiar - 103
        - 24h trabajos practicos - 103
        - 56h trabajar  - 240
        - 8h tareas domesticas - 35 casa
        - 10 descanso
*/

let estudio = "103 minutos de estudio";
let tp = "103 minutos de trabajo practico";
let trabajar = "240 minutos de trabajo";
let td = "35 minutos de tareas domesticas";
let descanso = "10 minutos de descanso";

console.log("ACTIVIDADES");

for (var i=0; i<14; i++) {
    if (i == 0) {
		console.group("semana 1")
	}
    console.groupCollapsed("dia " + (i+1));
    console.log(trabajar);
    console.log(descanso);
    console.log(estudio);
    console.log(tp);
    console.log(td);
    console.groupEnd();

    if(i == 6){
        console.groupEnd();
        console.groupCollapsed("Semana 2");
    }
}

console.groupEnd();
console.groupEnd();