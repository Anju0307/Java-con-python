let base = parseInt(prompt('Ingrese la base del triangulo'));
let altura = parseInt(prompt('Ingrese la altura del triangulo'));

let area= (base*altura)/2;

document.getElementById('area').innerHTML=area;