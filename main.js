alert('Programa para calcular la longitud y el area de una circunferencia');

let radio=parseInt(prompt('Ingrese el radio de la circunferencia'));

let longitud= 2*Math.PI*radio;
let area=Math.PI * Math.pow(radio,2);

document.getElementById('longitud').innerHTML=longitud;
document.getElementById('area').innerHTML=area;