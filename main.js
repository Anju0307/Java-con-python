const precioMin=355;

let minuto = parseInt(prompt('Ingrese la cantidad de minutos hablados'));

let pagar = minuto*precioMin+((minuto*precioMin)*0.2);

document.getElementById('pagar').innerHTML=pagar;