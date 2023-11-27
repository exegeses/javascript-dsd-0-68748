//ubicamos elemento dentro del DOM
const citas = document.querySelector('#citas');

let numero = 0;
let intervalo = '';

//declaramos funciones de control
function timer()
{
    numero++; // numero = numero + 1;
    citas.innerText = numero;
}
//invocamos la función timer()
//timer();
//actualizamos el llamado a la función 
//setInterval( timer, 1 );
function iniciar()
{
    intervalo = setInterval( timer );
}
function detener()
{
    clearInterval( intervalo );
}
