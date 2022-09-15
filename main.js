let numero1 = prompt("Ingrese el primer numero")
let numero2 = prompt("Ingrese el segundo numero")

let suma = parseInt(numero1) + parseInt(numero2);
let resta = parseInt(numero1) - parseInt(numero2);
let multiplicacion = parseInt(numero1) * parseInt(numero2);
let division = parseInt(numero1) / parseInt(numero2);

document.getElementById('suma').innerHTML=suma
document.getElementById('resta').innerHTML=resta
document.getElementById('multiplicacion').innerHTML=multiplicacion
document.getElementById('division').innerHTML=division