const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const valores = [];
for(let i = 0; i < 5; i++) {
    let valor = parseInt(lines.shift());
    valores.push(valor);
}

let quantidadePares = 0;
let quantidadeImpares = 0;
let quantidadePositivos = 0;
let quantidadeNegativos = 0;

for(let valor of valores) {
    if(valor % 2 === 0) {
        quantidadePares++;
    } else {
        quantidadeImpares++;
    }
    
    if(valor > 0) {
        quantidadePositivos++;
    } else if(valor < 0) {
        quantidadeNegativos++;
    }
}

console.log(`${quantidadePares} valor(es) par(es)`);
console.log(`${quantidadeImpares} valor(es) impar(es)`);
console.log(`${quantidadePositivos} valor(es) positivo(s)`);
console.log(`${quantidadeNegativos} valor(es) negativo(s)`);