const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const quantidadeValores = parseInt(lines.shift());
let valorIn = 0;
let valorOut = 0;
const valores = [];

for(let i = 0; i < quantidadeValores; i++) {
    let valor = parseInt(lines.shift());
    valores.push(valor);
}

for(let valor of valores) {
    if(valor >= 10 && valor <= 20) {
        valorIn++;
    } else {
        valorOut++;
    }
}

console.log(`${valorIn} in`);
console.log(`${valorOut} out`);