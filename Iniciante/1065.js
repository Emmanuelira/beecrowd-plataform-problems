const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

let v1 = parseInt(lines.shift());
let v2 = parseInt(lines.shift());
let v3 = parseInt(lines.shift());
let v4 = parseInt(lines.shift());
let v5 = parseInt(lines.shift());

const valores = [v1, v2, v3, v4, v5];
let valoresPares = 0;

for(let v of valores) {
    if(v % 2 === 0) {
        valoresPares++;
    }
}

console.log(`${valoresPares} valores pares`);