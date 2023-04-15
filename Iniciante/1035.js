/*
Leia 4 valores inteiros A, B, C e D. A seguir, se B for maior do que C e se D for maior do que A, e a soma de C com D for maior que a soma de A e B e se C e D, ambos, forem positivos e se a variável A for par escrever a mensagem "Valores aceitos", senão escrever "Valores nao aceitos".

Entrada
Quatro números inteiros A, B, C e D.

Saída
Mostre a respectiva mensagem após a validação dos valores.
*/

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const valores = lines.shift().split(" ");
const a = parseInt(valores[0]);
const b = parseInt(valores[1]);
const c = parseInt(valores[2]);
const d = parseInt(valores[3]);

if(b > c 
   && d > a 
   && (c+d) > (a+b) 
   && c > 0 
   && d > 0 
   && a % 2 == 0) {
    console.log("Valores aceitos");
} else {
    console.log("Valores nao aceitos")
}
