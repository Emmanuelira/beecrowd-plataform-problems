/*
Leia um valor de ponto flutuante com duas casas decimais. Este valor representa um valor monetário. A seguir, calcule o menor número de notas e moedas possíveis no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2. As moedas possíveis são de 1, 0.50, 0.25, 0.10, 0.05 e 0.01. A seguir mostre a relação de notas necessárias.

Entrada
O arquivo de entrada contém um valor de ponto flutuante N (0 ≤ N ≤ 1000000.00).

Saída
Imprima a quantidade mínima de notas e moedas necessárias para trocar o valor inicial, conforme exemplo fornecido.

Obs: Utilize ponto (.) para separar a parte decimal.
*/

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
