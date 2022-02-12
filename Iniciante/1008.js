const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const numero = parseInt(lines.shift());
const horas = parseInt(lines.shift());
const valorPorHora = parseFloat(lines.shift());

const salario = horas * valorPorHora;

console.log(`NUMBER = ${numero}`);
console.log(`SALARY = U$ ${salario.toFixed(2)}`);