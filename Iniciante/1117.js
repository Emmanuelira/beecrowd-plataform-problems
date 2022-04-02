const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

let quantidadeNotas = 0;
let somaNotas = 0;

while(quantidadeNotas < 2) {
    const nota = parseFloat(lines.shift());
    if(nota < 0 || nota > 10) {
        console.log("nota invalida");
    } else {
        somaNotas += nota;
        quantidadeNotas++;
    }
}

const media = somaNotas / 2;

console.log(`media = ${media.toFixed(2)}`);