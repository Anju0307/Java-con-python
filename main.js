let radio = parseInt(prompt('Ingrese el radio de la esfera'))

let volumen = 4/3 * Math.PI * radio**3;

document.getElementById('volumen').innerHTML=volumen;