const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const n = parseInt(lines.shift());
let resultado = 1;

for(let i = n; i > 0; i--) {
    resultado *= i; 
}

console.log(resultado);