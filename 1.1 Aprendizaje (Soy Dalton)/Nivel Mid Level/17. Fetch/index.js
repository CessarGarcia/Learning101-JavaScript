//Metodo Get
// fetch("https://reqres.in/api/unknown/2")
//     .then(res => res.blob())
//     .then(res => console.log(res))

//Metodo Post
// fetch("https://reqres.in/api/users",{
//     method: "POST",
//     body: `{"nombre" : "Cessar","apellido": "Garcia"}`,
//     headers: {"Content-type" : "application/json"}
// })
//     .then(res => res.json())
//     .then(res => console.log(res))

const imagen = document.querySelector(".imagen");

fetch("https://th.bing.com/th/id/R.acbb8ebec0c84c68eadbe3013fab8e32?rik=15VfqBAGzBJ0Eg&pid=ImgRaw&r=0")
    .then(res=>res.blob())
    .then(img=>imagen.src = URL.createObjectURL(img))