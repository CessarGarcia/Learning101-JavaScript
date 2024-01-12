/*  Cofla esta en pantalla completa
    Crear un sistema que muestre los datos del navegador
*/

let href = window.location.href;
let hostname = window.location.hostname;
let pathname = window.location.pathname;
let protocolo = window.location.protocol;
let alto = window.screen.height;
let ancho = window.screen.width;

let html = `protocolo: ${protocolo}<br>`;
html += `hostname: ${hostname} <br>`;
html += `pathname: ${pathname} <br>`;
html += `URL Completa: ${href} <br>`;

html += `alto: ${alto} <br>`;
html += `ancho: ${ancho} <br>`;

document.write(html)