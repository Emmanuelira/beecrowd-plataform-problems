const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const idade = parseInt(lines.shift());

const referenciaInt = [365, 30, 1];
const referenciaStr = ["ano(s)", "mes(es)", "dia(s)"];
let resultado = "";

let resto = idade;
for(let i in referenciaStr) {
    console.log(`${parseInt(resto / referenciaInt[i])} ${referenciaStr[i]}`);
    resto = resto % referenciaInt[i];
}