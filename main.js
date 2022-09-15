let espacio=parseInt(prompt('Ingrese el espacio del proyectil'));
let tiempo=parseInt(prompt('Ingrese el tiempo del proyectil'));

let velocidad = (espacio*1000)/(tiempo*60);

document.getElementById('velocidad').innerHTML=velocidad