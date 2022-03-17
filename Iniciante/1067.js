const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const valor = parseInt(lines.shift());
let referencia = 1;
while(referencia <= valor) {
    if(referencia % 2 !== 0) {
        console.log(referencia);
    }
    referencia++;
}