//ubicamos elemento dentro del DOM
const caja = document.querySelector('#caja');

function ocultar()
{
    //caja.style.opacity = 0;
    //caja.style.visibility = 'hidden';
    caja.style.display = 'none';
}
function mostrar()
{
    //caja.style.opacity = 1;
    //caja.style.visibility = 'visible';
    caja.style.display = 'block';
}
