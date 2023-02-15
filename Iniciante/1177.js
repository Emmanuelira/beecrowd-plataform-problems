const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const referencia = parseInt(lines.shift()) - 1;
let valor = 0;

for(let i = 0; i < 1000; i++) {
    console.log(`N[${i}] = ${valor}`);
    valor === referencia ? valor = 0 : valor++;
}
