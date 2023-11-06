//ubicamos elemento dentro del DOM
const citas = document.getElementById('citas');

/*
    hacer una pregunta al usuario
    almacenar la respuesta en memoria
*/
let respuesta = prompt('¿Qué seleccionado ganó la copa Qatar 2022?');

if ( respuesta.toLowerCase() == 'argentina' ) {
    citas.innerHTML = '<img src="imgs/ok.png">';
}
else {
    citas.innerHTML = '<img src="imgs/error.png">';
}