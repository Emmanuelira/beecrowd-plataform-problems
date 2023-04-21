/*
Leia 3 valores de ponto flutuante A, B e C e ordene-os em ordem decrescente, de modo que o lado A representa o maior dos 3 lados. A seguir, determine o tipo de triângulo que estes três lados formam, com base nos seguintes casos, sempre escrevendo uma mensagem adequada:
se A ≥ B+C, apresente a mensagem: NAO FORMA TRIANGULO
se A2 = B2 + C2, apresente a mensagem: TRIANGULO RETANGULO
se A2 > B2 + C2, apresente a mensagem: TRIANGULO OBTUSANGULO
se A2 < B2 + C2, apresente a mensagem: TRIANGULO ACUTANGULO
se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO
se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES
Entrada
A entrada contem três valores de ponto flutuante de dupla precisão A (0 < A) , B (0 < B) e C (0 < C).

Saída
Imprima todas as classificações do triângulo especificado na entrada.
*/

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

let valores = lines.shift().split(" ");
valores.sort(function(a, b) {
  return a - b;
});

const a = parseFloat(valores[2]);
const b = parseFloat(valores[1]);
const c = parseFloat(valores[0]);

if(a >= (b + c)) {
    console.log('NAO FORMA TRIANGULO');
} else {
    if(Math.pow(a,2) === (Math.pow(b,2) + Math.pow(c,2))) {
        console.log('TRIANGULO RETANGULO');
    } 
    if(Math.pow(a,2) > (Math.pow(b,2) + Math.pow(c,2))) {
        console.log('TRIANGULO OBTUSANGULO');
    } 
    if(Math.pow(a,2) < (Math.pow(b,2) + Math.pow(c,2))) {
        console.log('TRIANGULO ACUTANGULO');
    } 
    if(a === b && a === c) {
        console.log('TRIANGULO EQUILATERO');
    } else {
        if(a === b || a === c || b === c) {
            console.log('TRIANGULO ISOSCELES');
        }
    }
}
