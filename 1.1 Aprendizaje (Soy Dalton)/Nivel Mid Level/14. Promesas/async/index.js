// const objeto = {
//     propiedad1: "valor1",
//     propiedad2: "valor2",
//     propiedad3: "valor3",
// };

const obtenerInfo = (text)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{resolve(text)}, 1000)
    })
}
// obtenerInfo().then(resultado => console.log(resultado));

const mostrarResultado = async () => {
    data1 = await obtenerInfo("1: Primero");
    data2 = await obtenerInfo("2: Segundo");
    data3 = await obtenerInfo("3: Tercero");
    console.log(data1);
    console.log(data2);
    console.log(data3);
}

mostrarResultado();