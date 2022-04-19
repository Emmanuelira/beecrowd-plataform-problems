const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const quantidadeCasos = parseInt(lines.shift());

for(let i = 0; i < quantidadeCasos; i++) {
    const valores = lines.shift().split(" ");
    let x = parseInt(valores[0]);
    let y = parseInt(valores[1]);
    
    let contador = 0;
    let acumulador = 0;
    while(contador < y) {
        if(x % 2 !== 0) {
            acumulador += x;
            contador++;
        }
        x++;
    }
    console.log(acumulador);
}