//ubicar elementos dentro del DOM
const citas = document.querySelector('#citas');
/*
const botones = document.querySelectorAll('#contenedor nav a');
botones[0]...
*/
const boton = document.querySelector('#boton');

//objeto.addEventListener( 'evento', acción );
boton.addEventListener(
        'click',
        function()
        {
            citas.innerText = 'hiciste click!';
        }
);
boton.addEventListener(
        'mouseover',
        function()
        {
            citas.innerText = 'mouse sobre';
        }
);
boton.addEventListener(
        'mouseout',
        function()
        {
            citas.innerText = 'mouse fuera';
        }
);