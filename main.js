let sueldo = parseInt(prompt('Ingrese el sueldo del empleado'));
let venta1 = parseInt(prompt('Ingrese el precio de la venta 1'));
let venta2 = parseInt(prompt('Ingrese el precio de la venta 2'));
let venta3 = parseInt(prompt('Ingrese el precio de la venta 3'));

let comision1=venta1*0.10;
let comision2=venta2*0.10;
let comision3=venta3*0.10;
let sueldoTotal=sueldo+comision1+comision2+comision3;

document.getElementById('comision1').innerHTML=comision1;
document.getElementById('comision2').innerHTML=comision2;
document.getElementById('comision3').innerHTML=comision3;
document.getElementById('sueldo').innerHTML=sueldoTotal;