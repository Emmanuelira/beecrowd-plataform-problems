const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

let v1 = parseFloat(lines.shift());
let v2 = parseFloat(lines.shift());
let v3 = parseFloat(lines.shift());
let v4 = parseFloat(lines.shift());
let v5 = parseFloat(lines.shift());
let v6 = parseFloat(lines.shift());

const valores = [v1, v2, v3, v4, v5, v6];
let contador = 0;
let valoresPositivos = [];

for(let v of valores) {
    if(v > 0) {
        valoresPositivos.push(v);
        contador++;
    }
}

let mediaPositivos = 0;

for(let vp of valoresPositivos) {
    mediaPositivos += vp;
}

mediaPositivos /= valoresPositivos.length;

console.log(`${contador} valores positivos`);
console.log(mediaPositivos.toFixed(1));