const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

let salario = parseFloat(lines.shift());

let taxa;

if(salario <= 400) {
    taxa = 15;
} else if(salario > 400 && salario <= 800) {
    taxa = 12;
} else if(salario > 800 && salario <= 1200) {
    taxa = 10;
} else if(salario > 1200 && salario <= 2000) {
    taxa = 7;
} else {
    taxa = 4;
}

const reajuste = salario * (taxa / 100);
const novoSalario = salario + reajuste;

console.log(`Novo salario: ${novoSalario.toFixed(2)}`);
console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`);
console.log(`Em percentual: ${taxa} %`);