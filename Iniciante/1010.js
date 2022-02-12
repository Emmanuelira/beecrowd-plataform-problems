const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const valores1 = lines.shift().split(" ");
const codigo1 = parseInt(valores1[0]);
const numeroPecas1 = parseInt(valores1[1]);
const valorUnitario1 = parseFloat(valores1[2]);

const valores2 = lines.shift().split(" ");
const codigo2 = parseInt(valores2[0]);
const numeroPecas2 = parseInt(valores2[1]);
const valorUnitario2 = parseFloat(valores2[2]);

const total = numeroPecas1*valorUnitario1 + numeroPecas2*valorUnitario2;

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);