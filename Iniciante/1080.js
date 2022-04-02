const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const valores = [];

for(let i = 0; i < 100; i++) {
    const valor = parseInt(lines.shift());
    valores.push(valor);
}

let maiorNumero = valores[0];
let posicaoMaior = 0;

for(let indice in valores) {
    if(valores[indice] > maiorNumero) {
        maiorNumero = valores[indice];
        posicaoMaior = parseInt(indice) + 1;
    }
}

console.log(maiorNumero);
console.log(posicaoMaior);