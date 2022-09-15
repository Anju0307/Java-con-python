let a = parseInt(prompt('Ingrese el valor de A'));
let b = parseInt(prompt('Ingrese el valor de B'));
let c = parseInt(prompt('Ingrese el valor de C'));

let total = (a+7*c)/(b+2-a)+2*b;

document.getElementById('expresion').innerHTML=total;