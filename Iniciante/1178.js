// Devido a imprecisão das casas decimais do JS, não foi aprovado no Beecrowd, mas a lógica é essa.

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

let valor = parseFloat(lines.shift());

for(let i = 0; i < 100; i++) {
    console.log(`N[${i}] = ${valor.toFixed(4)}`);
    valor /= 2;
}
