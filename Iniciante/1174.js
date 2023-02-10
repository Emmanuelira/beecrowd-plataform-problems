const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

for(let i = 0; i < 100; i++) {
    let valor = parseFloat(lines.shift());
    if(valor <= 10) {
        console.log(`A[${i}] = ${valor.toFixed(1)}`);
    }
}
