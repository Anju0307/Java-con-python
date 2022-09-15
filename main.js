const x = 3;

let a = parseInt(prompt('Ingrese el valor de a'));
let b = parseInt(prompt('Ingrese el valor de b'));
let c = parseInt(prompt('Ingrese el valor de c'));

let raiz = a * x**2 + b * x + c;

document.getElementById('raiz').innerHTML=raiz;