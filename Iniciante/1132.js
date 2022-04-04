const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const v1 = parseInt(lines.shift());
const v2 = parseInt(lines.shift());

let soma = 0;
let menorNumero = v1;
let maiorNumero = v2;

if(v1 > v2) {
    menorNumero = v2;
    maiorNumero = v1;
}

for(let i = menorNumero; i <= maiorNumero; i++) {
    if(i % 13 !== 0) {
        soma += i;
    }
}

console.log(soma);