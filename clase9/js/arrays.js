// ubicamos elemento dentro del DOM
const citas = document.querySelector('#citas');

// declaramos el array
const marcas = [
                'Hermés', 'Zara', 'Boss', 
                'Aeropostale', 'Tommy', 'Hollister',
                'Kingpin', 'Gola', 'Old Navy'
                ];
console.log(marcas);
                
//document.write(marcas);
citas.innerText = marcas[4];

