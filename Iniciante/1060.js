const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const v1 = parseFloat(lines.shift());
const v2 = parseFloat(lines.shift());
const v3 = parseFloat(lines.shift());
const v4 = parseFloat(lines.shift());
const v5 = parseFloat(lines.shift());
const v6 = parseFloat(lines.shift());

const numeros = [v1, v2, v3, v4, v5, v6];
let total = 0;

for(let i in numeros) {
    if(numeros[i] > 0) {
        total++;
    }    
}

console.log(`${total} valores positivos`);