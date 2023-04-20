/*
Com base na tabela abaixo, escreva um programa que leia o código de um item e a quantidade deste item. A seguir, calcule e mostre o valor da conta a pagar.



Entrada
O arquivo de entrada contém dois valores inteiros correspondentes ao código e à quantidade de um item conforme tabela acima.

Saída
O arquivo de saída deve conter a mensagem "Total: R$ " seguido pelo valor a ser pago, com 2 casas após o ponto decimal.
*/

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const valores = lines.shift().split(" ");
const codigo = parseInt(valores[0]);
const quantidade = parseInt(valores[1]);

const tabela = [
    {
        codigo: 1,
        preco: 4.00
    },
    {
        codigo: 2,
        preco: 4.50
    },
    {
        codigo: 3,
        preco: 5.00
    },
    {
        codigo: 4,
        preco: 2.00
    },
    {
        codigo: 5,
        preco: 1.50
    }
];

const preco = tabela.find(comida => comida.codigo === codigo).preco;

const total = quantidade * preco;

console.log(`Total: R$ ${total.toFixed(2)}`);
