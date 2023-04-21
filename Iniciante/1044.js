/*
Leia 2 valores inteiros (A e B). Após, o programa deve mostrar uma mensagem "Sao Multiplos" ou "Nao sao Multiplos", indicando se os valores lidos são múltiplos entre si.

Entrada
A entrada contém valores inteiros.

Saída
A saída deve conter uma das mensagens conforme descrito acima.
*/

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const valores = lines.shift().split(" ");
const a = parseInt(valores[0]);
const b = parseInt(valores[1]);

if(a === 0 || b === 0 || a === b) {
    console.log('Sao Multiplos');
} else if(a > b) {
    const condicao = a % b === 0 ? console.log('Sao Multiplos') : console.log('Nao sao Multiplos');
} else {
    const condicao = b % a === 0 ? console.log('Sao Multiplos') : console.log('Nao sao Multiplos');
}
