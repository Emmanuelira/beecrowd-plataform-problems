const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const valor = parseInt(lines.shift());
console.log(valor);

const notas = [100, 50, 20, 10, 5, 2, 1];

let resto = valor;
for(let i in notas) {
    console.log(`${parseInt(resto/notas[i])} nota(s) de R$ ${notas[i]},00`);
    resto = resto % notas[i];
}