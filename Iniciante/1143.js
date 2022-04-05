const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const quantidadeLinhas = parseInt(lines.shift());

for(let i = 1; i <= quantidadeLinhas; i++) {
    console.log(`${i} ${i*i} ${i*i*i}`);
}