/*
Há muito tempo atrás, em uma galáxia muito, muito distante...

Após o declínio do Império, sucateiros estão espalhados por todo o universo procurando por um sabre de luz perdido. Todos sabem que um sabre de luz emite um padrão de ondas específico: 42 cercado por 7 em toda a volta. Você tem um sensor de ondas que varre um terreno com N x M células. Veja o exemplo abaixo para um terreno 4 x 7 com um sabre de luz nele (na posição (2, 4)).



Você deve escrever um programa que, dado um terreno N x M, procura pelo padrão do sabre de luz nele. Nenhuma varredura tem mais do que um padrão de sabre de luz.

Entrada
A primeira linha da entrada tem dois números positivos N e M, representando, respectivamente, o número de linhas e de colunas varridos no terreno (3 ≤ N, M ≤ 1000). Cada uma das próximas N linhas tem M inteiros, que descrevem os valores lidos em cada célula do terreno (-100 ≤ Tij ≤ 100, para 1 ≤ i ≤ N e 1 ≤ j ≤ M).

Saída
A saída é uma única linha com 2 inteiros X e Y separados por um espaço. Eles representam a coordenada (X,Y) do sabre de luz, caso encontrado. Se o terreno não tem um padrão de sabre de luz, X e Y são ambos zero.
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const [ rows, columns ] = lines.shift().split(' ').map(v => parseInt(v));
const land = [];
let rowResult = 0;
let columnResult = 0;

for(let i = 0; i < rows; i++) land.push(lines.shift().split(' ').map(v => parseInt(v)));

let running = true;
for(let i = 0; i < rows && running; i++) {
    for(let j = 0; j < columns && running; j++) {
        const ref = land[i][j];
        if(ref === 42 && (i - 1) >= 0 && (i + 1) < rows
            && (j - 1) >= 0 && (j + 1) < columns) {
            let result = true;
            for(let k = i - 1; k <= i + 1 && result; k++) {
                for(let l = j - 1; l <= j + 1 && result; l++) {
                    if(land[k][l] !== 7 && !(k === i && l === j)) result = false;
                }
            }
            if(result) {
                rowResult = i + 1;
                columnResult = j + 1;
                running = false;
            }
        }
    }
}

console.log(`${rowResult} ${columnResult}`);
