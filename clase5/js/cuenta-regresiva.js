// ubicamos elementos dentro del DOM
const txtDias = document.querySelector('#txtDias');
const txtHoras = document.querySelector('#txtHoras');
const txtMinutos = document.querySelector('#txtMinutos');
const txtSegundos = document.querySelector('#txtSegundos');
const h1 = document.querySelector('h1');

let intervalo = '';


function agregar0( numero )
{
    if( numero < 10 ){
        numero = '0' + numero;
    }
    return numero;
}

function countdown()
{
    //creamos objetos de fecha
    const actual = new Date();
    const final = new Date(2023, 11, 8);
    /* 
        calculamos la diferencia
            expresado en milisegundos
     */
    let diferencia = final - actual;
    console.log( `diferencia: ${diferencia}` );

    /*###  convertimos unidades de timspo  ###*/
    //obtenemos la diferencia expresada en segundos
    let segundos =  Math.trunc( diferencia / 1000 ); 
    //console.log( 'segundos:' + segundos  );
    console.log( `segundos: ${segundos}` );

    //obtenemos la diferencia expresada en minutos
    let minutos = Math.trunc( segundos / 60 );
    console.log( `minutos: ${minutos}` );

    //obtenemos la diferencia expresada en horas
    let horas = Math.trunc( minutos / 60 );
    console.log( `horas: ${horas}` );
    
    //obtenemos la diferencia expresada en dias
    let dias = Math.trunc( horas / 24 );
    console.log( `dias: ${dias}` );


    /* cualculamos los tiempos sobrantes */
    horas = horas % 24;
    minutos = minutos % 60;
    segundos = segundos % 60;

    if( 
        dias <= 0 &&
        horas <= 0 &&
        minutos <= 0 &&
        segundos <= 0
      ){
        h1.innerText = 'Oferta finalizada!';
        clearInterval( intervalo );
    }

    dias = agregar0( dias );
    horas = agregar0( horas );
    minutos = agregar0( minutos );
    segundos = agregar0( segundos );

    //imprimos en los span
    txtDias.innerText =  dias;
    txtHoras.innerText =  horas;
    txtMinutos.innerText =  minutos;
    txtSegundos.innerText =  segundos;
}

//invocamos la función
countdown();
// actualizamos el llamado a la función
intervalo = setInterval( countdown, 1000 );


