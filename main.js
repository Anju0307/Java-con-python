let radio = parseInt(prompt('Ingrese el radio del cilindro'));
let altura = parseInt(prompt('Ingrese la altura del cilindro'));

let area = (2*(Math.PI*radio**2))+((2*Math.PI*radio)*altura);
let volumen = (Math.PI*radio**2)*altura;

document.getElementById('area').innerHTML=area;
document.getElementById('volumen').innerHTML=volumen;
