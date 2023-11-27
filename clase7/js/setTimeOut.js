const citas = document.querySelector('#citas');

let numero = 0

function timer( textoAlerta )
{
    numero++;
    citas.innerText = numero;
    alert(textoAlerta);
}


setTimeout( timer, 2000, 'Listo!' );