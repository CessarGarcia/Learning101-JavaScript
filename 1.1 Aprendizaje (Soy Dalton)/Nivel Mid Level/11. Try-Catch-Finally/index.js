try{
    throw{
        error: "error",
        info: "El tipo de error es"
    }
}catch(error){
    console.log(error.info);
}