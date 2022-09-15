let iva = parseInt(prompt('Ingrese el iva del producto sin %'));
let producto = parseInt(prompt('Ingrese el precio del producto'));

let ivaP=producto*(iva/100);
let total=producto+ivaP;

document.getElementById('pagar').innerHTML=total;
document.getElementById('iva').innerHTML=ivaP;