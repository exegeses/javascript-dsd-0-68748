// ubicamos elementos dentro del DOM
const caja = document.querySelector('#caja');
const boton = document.querySelector('#boton');
/*
    generar un número aleatorio
    entre el 1 y el 6 (sin decimales)
    
    insertar en el contenedor #caja
    la imagen con la cara del dado 
    ( que coincida con el número aleatorio obtenido )

    reproducir el audio
*/

function aleatorio()
{
    let numeroRandom = Math.random();
    //un número aleatorio entre 0~1 (con decimales);
    console.log('numeroRandom: ', numeroRandom);

    let numeroPor5 = numeroRandom * 5;
    console.log( 'Numero por 5: ', numeroPor5 );
    /* el multiplicar por 5
       obtenemos lña posibilidad de un número entre 0~5
       ( con decimales )
    */
   
    // le sumamos 1 y retornamos 
    let numero = Math.round(numeroPor5) + 1;
    return numero;

    /* Math.round( Math.random() *5 +1 ) */
}

function mostarImagen( numero )
{
    //caja.innerHTML = '<img src="red/dice-'+ numero +'.png">';
    caja.innerHTML = `<img src="red/dice-${numero}.png">`;
}

function reproducirAudio()
{
    let sonidoDado = new Audio('audio/dice.mp3');
    sonidoDado.play();
}

boton.addEventListener(
        'click',
        function()
        {
            let numero = aleatorio();
            mostarImagen( numero );
            reproducirAudio();
        }
);