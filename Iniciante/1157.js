const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const valor = parseInt(lines.shift());

for(let i = 1; i <= valor; i++) {
    if(valor % i === 0) {
        console.log(i);
    }
}