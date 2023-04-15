/*
Leia os quatro valores correspondentes aos eixos x e y de dois pontos quaisquer no plano, p1(x1,y1) e p2(x2,y2) e calcule a distância entre eles, mostrando 4 casas decimais após a vírgula, segundo a fórmula:

Distancia =

Entrada
O arquivo de entrada contém duas linhas de dados. A primeira linha contém dois valores de ponto flutuante: x1 y1 e a segunda linha contém dois valores de ponto flutuante x2 y2.

Saída
Calcule e imprima o valor da distância segundo a fórmula fornecida, com 4 casas após o ponto decimal.
*/

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const valores1 = lines.shift().split(" ");
const x1 = parseFloat(valores1[0]);
const y1 = parseFloat(valores1[1]);

const valores2 = lines.shift().split(" ");
const x2 = parseFloat(valores2[0]);
const y2 = parseFloat(valores2[1]);

const distancia = Math.sqrt( Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) );

console.log(distancia.toFixed(4));
