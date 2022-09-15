let parcial1 = parseInt(prompt('Ingrese la nota del parcial 1'));
let parcial2 = parseInt(prompt('Ingrese la nota del parcial 2'));
let parcial3 = parseInt(prompt('Ingrese la nota del parcial 3'));
let examenF = parseInt(prompt('Ingrese la nota del examen final'));
let trabajoF = parseInt(prompt('Ingrese la nota del trabajo final'));

let nota = (((parcial1+parcial2+parcial3)/3)*0.55)+(examenF*0.3)+(trabajoF*0.15);

document.getElementById('nota').innerHTML= nota;