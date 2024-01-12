const intervalo = setInterval(() =>{
    document.write("hola ")
},2000)

setTimeout(() =>{
    clearInterval(intervalo)
},7000)