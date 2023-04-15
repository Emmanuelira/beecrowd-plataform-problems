/*
Um treinador de voleibol gostaria de manter estatísticas sobre sua equipe. A cada jogo, seu auxiliar anota quantas tentativas de saques, bloqueios e ataques cada um de seus jogadores fez, bem como quantos desses saques, bloqueios e ataques tiveram sucesso (resultaram em pontos). Seu programa deve mostrar qual o percentual de saques, bloqueios e ataques do time todo tiveram sucesso.

Entrada
A entrada é dada pelo número de jogadores N (1 ≤ N ≤ 100), seguido pelo nome de cada um dos jogadores. Abaixo do nome de cada jogador, seguem duas linhas com três inteiros cada. Na primeira linha S, B e A (0 ≤ S,B,A ≤ 10000) representam a quantidade de tentativas de saques, bloqueios e ataques e na segunda linha, S1, B1 e A1 (0 ≤ S1 ≤ S; 0 ≤ B1 ≤ B; 0 ≤ A1 ≤ A) com o número de saques, bloqueios e ataques deste jogador que tiveram sucesso.

Saída
A saída deve conter o percentual total de saques, bloqueios e ataques do time todo que resultaram em pontos, conforme mostrado no exemplo.
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const quantity = parseInt(lines.shift());
let counter = 0;
let sumOfAttempts = [0, 0, 0];
let sumOfSuccess = [0, 0, 0];
while(counter < quantity) {
    const name = lines.shift();
    const attempts = lines.shift().split(' ').map(v => parseInt(v));
    const successes = lines.shift().split(' ').map(v => parseInt(v));
    for(let i = 0; i < 3; i++) {
        sumOfAttempts[i] += attempts[i];
        sumOfSuccess[i] += successes[i];
    }
    counter++;
}

console.log(`Pontos de Saque: ${(100 * sumOfSuccess[0] / sumOfAttempts[0]).toFixed(2)} %.`);
console.log(`Pontos de Bloqueio: ${(100 * sumOfSuccess[1] / sumOfAttempts[1]).toFixed(2)} %.`);
console.log(`Pontos de Ataque: ${(100 * sumOfSuccess[2] / sumOfAttempts[2]).toFixed(2)} %.`);
