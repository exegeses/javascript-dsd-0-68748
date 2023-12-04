const costosFijos = document.querySelector('#costosFijos');
const precioVenta = document.querySelector('#precioVenta');
const costosVariables = document.querySelector('#costosVariables');
const boton = document.querySelector('#boton');
const citas = document.querySelector('#citas');

/*
    fórmula:  
    cv = costosFijos / precioVenta - costosVariables
 */

boton.addEventListener( 
        'click', 
        function()
        {
            let valorCostosFijos = costosFijos.value;
            let valorPrecioVenta = precioVenta.value;
            let valorCostosVariables = costosVariables.value;
            let cv = valorCostosFijos / ( valorPrecioVenta - valorCostosVariables );

            //imprimimos resultado
            citas.innerText = 'Resultado: ' + cv;
        } 
);