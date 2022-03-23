const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

let n = parseInt(lines.shift());

for(let i = 1; i <= n; i++) {
    if(i % 2 === 0) {
        console.log(`${i}^2 = ${Math.pow(i,2)}`);
    }
}