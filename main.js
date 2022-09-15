let a = parseInt(prompt('Ingrese el valor de a'));
let b = parseInt(prompt('Ingrese el valor de b'));
let c = parseInt(prompt('Ingrese el valor de c'));

let volumen = (4/3) * Math.PI * a * b * c;

document.getElementById('volumen').innerHTML=volumen;