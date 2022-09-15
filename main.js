alert('Programa para calcular media');
let media=0
for (let i=0;i<4;i++){
    let numero = parseInt(prompt('Ingrese un numero'));
    media=numero+media;
}

document.getElementById('media').innerHTML=media/4