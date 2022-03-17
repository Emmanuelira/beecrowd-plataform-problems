const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

let valor = parseInt(lines.shift());
let contador = 0;
while(contador < 6) {
    if(valor % 2 !== 0) {
        console.log(valor);
        contador++;
    }
    valor++;
}