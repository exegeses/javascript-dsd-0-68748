//ubicamos elemento dentro del DOM
const texto = document.querySelector('#texto');

/*
    mostrar fecha actual
    formato:  Miércoles 08/11/2023
*/
//credamos objeto de fecha
const fecha = new Date();
console.log( fecha );

let diaSemana = fecha.getDay();
switch( diaSemana ){
    case 0:
        diaSemana = 'Domingo';
        break;
    case 1:
        diaSemana = 'Lunes';
        break;
    case 2:
        diaSemana = 'Martes';
        break;
    case 3:
        diaSemana = 'Miércoles';
        break;
    case 4:
        diaSemana = 'Jueves';
        break;
    case 5:
        diaSemana = 'Viernes';
        break;
    default:
        diaSemana = 'Sábado';
        break;
}

// obtenemos el número de día del mes 
let diaMes = fecha.getDate();
if( diaMes < 10 ){
    diaMes = '0'+ diaMes;
}
console.log(diaMes);

// obtenemos el número de mes actual
let mes = fecha.getMonth() + 1;
if( mes < 10 ){
    mes = '0'+ mes;
}
console.log( mes );

// obtenemos el número de año actual
let anio = fecha.getFullYear();
console.log( anio );

//imprimimos dentro del span concatenando
//texto.innerText = diaSemana +' '+ diaMes +'/'+ mes +'/'+ anio;

//imprimimos dentro del span interpolando
texto.innerText = `${diaSemana} ${diaMes}/${mes}/${anio}`;

