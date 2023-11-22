//ubicamos elemento dentro del DOM
const caja = document.querySelector('#caja');
const picker = document.querySelector('#picker');

//declaramos funciones
function saludar( nombre )
{
    console.log( 'hola '+ nombre );
}
function pintar( codigoColor )
{
    caja.style.backgroundColor = codigoColor;
}
function colorear()
{
    //obtenemos el código de color
    //que seleccione el usuario
    //en el picker
    let colorSeleccionado = picker.value;
    //invocamos la función pintar()
    pintar( colorSeleccionado );
}


//invocamos la función
saludar( 'Marcos' );
saludar( 'Rick' );
saludar( 'Morty' );