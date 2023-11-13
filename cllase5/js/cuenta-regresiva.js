// ubicamos elementos dentro del DOM
const txtDias = document.querySelector('#txtDias');
const txtHoras = document.querySelector('#txtHoras');
const txtMinutos = document.querySelector('#txtMinutos');
const txtSegundos = document.querySelector('#txtSegundos');
const h1 = document.querySelector('h1');

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

    //imprimos en los span
    txtDias.innerText =  dias;
    txtHoras.innerText =  horas;
    txtMinutos.innerText =  minutos;
    txtSegundos.innerText =  segundos;
}

//invocamos la función
countdown();
// actualizamos el llamado a la función
setInterval( countdown );


