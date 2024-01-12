const input = document.querySelector(".input");

input.addEventListener("keydown", (e) => {
    console.log("una tecla fue presionada");
});

input.addEventListener("keypress", (e) => {
    console.log("un usuario preciono una tecla y la solto");
});

input.addEventListener("keyup", (e) => {
    console.log("una tecla fue soltada");
});