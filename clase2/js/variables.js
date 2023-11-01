/*
    para declarar variables utilizamos
    la palabra reservada "let"
*/
let numero = 42;
let frase = 'Hola Mundo';

//imprimimos en el span
document.getElementById('texto').innerText = numero;

//sobreescribimos el valor de la variable
numero = 73;
document.getElementById('texto').innerText = numero;

/*
    para declarar constantes utilizamos
    la palabra reservada "const"
*/
const nombre = 'Marcos';
document.getElementById('texto').innerText = nombre;
//nombre = 'abacaxí'; //no se puede sobreescribir una constante
