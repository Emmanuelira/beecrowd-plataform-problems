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