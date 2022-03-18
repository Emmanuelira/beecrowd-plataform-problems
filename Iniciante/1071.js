const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

let v1 = parseInt(lines.shift());
let v2 = parseInt(lines.shift());

let somaImpares = 0;
let referencia = 0;
let fim = 0;

if(v1 > v2) {
    referencia = v2 + 1;
    fim = v1;
} else if(v1 < v2) {
    referencia = v1 + 1;
    fim = v2;
}

while(referencia < fim) {
    if(referencia % 2 !== 0) {
        somaImpares += referencia;
    }
    referencia++;
}

console.log(somaImpares);