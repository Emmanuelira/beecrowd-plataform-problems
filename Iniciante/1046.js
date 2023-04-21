/*
Leia a hora inicial e a hora final de um jogo. A seguir calcule a duração do jogo, sabendo que o mesmo pode começar em um dia e terminar em outro, tendo uma duração mínima de 1 hora e máxima de 24 horas.

Entrada
A entrada contém dois valores inteiros representando a hora de início e a hora de fim do jogo.

Saída
Apresente a duração do jogo conforme exemplo abaixo.
*/

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

let valores = lines.shift().split(" ");
const horaInicial = parseInt(valores[0]);
const horaFinal = parseInt(valores[1]);

let total;

if(horaInicial === horaFinal) {
    total = 24;
} else if(horaInicial < horaFinal) {
    total = horaFinal - horaInicial;
} else {
    total = 24 - horaInicial + horaFinal;
}

console.log(`O JOGO DUROU ${total} HORA(S)`);
