const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

let s = 0;

for(let i = 1; i <= 100; i++) {
    s += 1/i;
}

console.log(s.toFixed(2));