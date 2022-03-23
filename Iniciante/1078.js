const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const n = parseInt(lines.shift());

for(let i = 1; i <= 10; i++) {
    console.log(`${i} x ${n} = ${i*n}`);
}