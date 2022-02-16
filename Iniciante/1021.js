const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const valor = parseFloat(lines.shift())+0.001;
let resto = valor;
const notas = [100, 50, 20, 10, 5, 2];
const moedas = [1, 0.5, 0.25, 0.1, 0.05, 0.01]; 

console.log("NOTAS:");
for(let i in notas) {
    console.log(`${parseInt(resto/notas[i])} nota(s) de R$ ${notas[i].toFixed(2)}`);
    resto = resto % notas[i];
}

console.log("MOEDAS:");
for(let i in moedas) {
    console.log(`${parseInt(resto/moedas[i])} moeda(s) de R$ ${moedas[i].toFixed(2)}`);
    resto = resto % moedas[i];
}