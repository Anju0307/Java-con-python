let notaF=0;
for (let i=1; i<=4;i++){
    let nota = parseInt(prompt(`Digite la nota ${i}`));
    notaF=nota+notaF;
}
let promedio=notaF/4;

document.getElementById('promedio').innerHTML=promedio;