/*
Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias

Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias. Nos casos de teste nunca haverá uma situação que permite 12 meses e alguns dias, como 360, 363 ou 364. Este é apenas um exercício com objetivo de testar raciocínio matemático simples.

Entrada
O arquivo de entrada contém um valor inteiro.

Saída
Imprima a saída conforme exemplo fornecido.
*/

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
