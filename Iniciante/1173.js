const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

let valor = parseInt(lines.shift());
for(let i = 0; i < 10; i++) {
    console.log(`N[${i}] = ${valor}`);
    valor *= 2;
}
