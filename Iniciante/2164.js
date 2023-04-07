/*
A fórmula de Binet é uma forma de calcular números de Fibonacci.
Sua tarefa é, dado um natural n, calcular o valor de Fibonacci(n) usando a fórmula acima.

Entrada
A entrada é um número natural n (0 < n ≤ 50).

Saída
A saída é o valor de Fibonacci(n) com 1 casa decimal utilizando a fórmula de Binet dada.
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const number = parseInt(lines.shift());
const result = ( (((1 + Math.sqrt(5))/2) ** number) - (((1 - Math.sqrt(5))/2) ** number) ) / Math.sqrt(5);
console.log(result.toFixed(1));
