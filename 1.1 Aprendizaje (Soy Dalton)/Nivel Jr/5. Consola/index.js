console.clear();

text = "hola";
console.log(text);

console.groupCollapsed();
console.group();
console.assert(5<4);
console.table([1,2,3,4,5,6]);
console.dir([1,2,3,4,5,6]);

console.group("info, error, warn");
console.info("Muy buen trabajo");
console.error("Haz hecho algo mal");
console.warn("Cuidado");

console.group("count");
console.count();
console.count();
console.countReset();
console.count();

console.groupEnd();
console.groupEnd();
console.groupEnd();
console.groupEnd();

console.time();
console.timeLog();
console.timeEnd();

console.log("%cHola Mundo", "color: red; background: green; font-size: 20px;");