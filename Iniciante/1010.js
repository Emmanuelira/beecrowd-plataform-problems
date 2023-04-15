/*
Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago.

Entrada
O arquivo de entrada contém duas linhas de dados. Em cada linha haverá 3 valores, respectivamente dois inteiros e um valor com 2 casas decimais.

Saída
A saída deverá ser uma mensagem conforme o exemplo fornecido abaixo, lembrando de deixar um espaço após os dois pontos e um espaço após o "R$". O valor deverá ser apresentado com 2 casas após o ponto.
*/

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
