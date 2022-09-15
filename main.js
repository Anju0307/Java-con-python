let grados = parseInt(prompt('Ingrese los grados en celcius'));

let conversion = (grados*9/5)+32;

document.getElementById('conversion').innerHTML=conversion;