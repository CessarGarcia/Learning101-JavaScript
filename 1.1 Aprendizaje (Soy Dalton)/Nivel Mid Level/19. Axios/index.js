//Metodo get (default)
// axios("informacion.txt")
//     .then(res=>console.log(res.data));

//Metodo post
// axios.post("https://reqres.in/api/users",{
//     "nombre": "Rancio",
//     "apellido": "Mygo"
// })
//     .then(res=>console.log(res));

//Metodo Post Op2
axios("https://reqres.in/api/users",{
    method: "post",
    data: {
        "nombre": "Jose",
        "apellido": "Miguel"
    }
})
    .then(res=>console.log(res));