/*
Leia 3 valores inteiros e ordene-os em ordem crescente. No final, mostre os valores em ordem crescente, uma linha em branco e em seguida, os valores na sequência como foram lidos.

Entrada
A entrada contem três números inteiros.

Saída
Imprima a saída conforme foi especificado.
*/

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const valores = lines.shift().split(" ");
const v1 = parseInt(valores[0]);
const v2 = parseInt(valores[1]);
const v3 = parseInt(valores[2]);

const listaNormal = [v1, v2, v3];
const listaOrdenada = [v1, v2, v3].sort(function (a, b) { 
    return a - b;  
});

for(let i in listaOrdenada) {
    console.log(listaOrdenada[i]);
}
console.log("");
for(let i in listaNormal) {
    console.log(listaNormal[i]);
}
