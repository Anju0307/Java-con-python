let cantidadMed=parseInt(prompt('Ingrese la cantidad de medicamentos'));
let totalMed=0;
for (let i=0;i<cantidadMed;i++){
    let precioMed=parseInt(prompt(`Ingrese el precio del producto ${i+1}`));
    totalMed=precioMed+totalMed;
}

let descuento = totalMed*0.10;
let precioFin = totalMed-descuento;
console.log(descuento)
document.getElementById('descuento').innerHTML= descuento;
document.getElementById('precio').innerHTML=precioFin;