let nombre = prompt('Ingrese el nombre del empleado');
let horas = parseInt(prompt('Ingrese las horas trabajadas por el empleado'));

let pagar=horas*15300;

document.getElementById('nombre').innerHTML=nombre;
document.getElementById('horas').innerHTML=horas;
document.getElementById('pagar').innerHTML=pagar;