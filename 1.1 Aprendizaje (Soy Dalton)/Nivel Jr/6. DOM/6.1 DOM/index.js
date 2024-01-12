// parrafo = document.getElementsBy("parrafo");
// parrafo = document.getElementsByTagName("p");
// parrafo = document.querySelector(".parrafo");
// parrafo = document.querySelectorAll(".parrafo");

// document.write(parrafo);

// const inputText = document.querySelector(".inputText");
// inputText.setAttribute("type", "number");

// obtenerAtributo = inputText.getAttribute("type");
// document.write("<br>" + obtenerAtributo);

// const inputText = document.querySelector(".inputText");
// valorDelAtributo = inputText.removeAttribute("type");


const titulo = document.querySelector(".titulo"); 
// titulo.setAttribute("contentEditable", "true");
// titulo.setAttribute("dir", "ltr");
// titulo.setAttribute("dir", "rtl");
// titulo.setAttribute("hidden", "false");
titulo.setAttribute("tabindex", "0");
titulo.setAttribute("title", "Hola XD");

const input = document.querySelector(".input-normal"); 
document.write("<br>");
document.write(input.value);
input.type="number"

// input.acept="image/png";

const input2 = document.querySelector(".input-n");
input2.minLength = 4;
input2.placeholder = "Hola que hace";
input2.required = true;

const texto = document.querySelector(".texto");
texto.style.color ="red";
texto.style.backgroundColor ="green";
texto.style.padding ="30px";

texto.classList.add("grande");
// texto.classList.remove("grande");


// const clases = texto.classList.item(0);
// const clases = texto.classList.contains("grande");
// const clases = texto.classList.toggle("chico");
// const clases = texto.classList.remplace("chico","grande");
// document.write(clases);

const title = document.querySelector(".title");
let resultado = title.textContent;
document.write(resultado + "<br>");

// document.write("<br>")

const tittle = document.querySelector(".tittle");
let resultado2 = tittle.innerHTML;
let resultado3 = tittle.outerHTML;
alert("innerHTML: " + resultado2);
alert("outerHTML" + resultado3);