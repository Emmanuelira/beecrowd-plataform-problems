const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const valores = lines.shift().split(" ");
const a = parseInt(valores[0]);
const b = parseInt(valores[1]);
const c = parseInt(valores[2]);

maiorAB = (a + b + Math.abs(a - b)) / 2;
maior = (maiorAB + c + Math.abs(maiorAB - c)) / 2;

console.log(`${maior} eh o maior`);