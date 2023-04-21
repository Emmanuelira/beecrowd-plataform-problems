/*
Leia a hora inicial, minuto inicial, hora final e minuto final de um jogo. A seguir calcule a duração do jogo.

Obs: O jogo tem duração mínima de um (1) minuto e duração máxima de 24 horas.

Entrada
Quatro números inteiros representando a hora de início e fim do jogo.

Saída
Mostre a seguinte mensagem: “O JOGO DUROU XXX HORA(S) E YYY MINUTO(S)” .
*/

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

let valores = lines.shift().split(" ");
const horaInicial = parseInt(valores[0]);
const minutoInicial = parseInt(valores[1]);
const horaFinal = parseInt(valores[2]);
const minutoFinal = parseInt(valores[3]);

let totalHora;
let totalMinuto;

if(horaInicial === horaFinal) {
    if(minutoInicial === minutoFinal) {
        totalHora = 24;
        totalMinuto = 0;
    } else if(minutoInicial > minutoFinal) {
        totalHora = 23;
        totalMinuto = 60 - (minutoInicial - minutoFinal);
    } else {
        totalHora = 0;
        totalMinuto = minutoFinal - minutoInicial;
    }
} else if(horaInicial < horaFinal) {
    totalHora = horaFinal - horaInicial;
    if(minutoInicial === minutoFinal) {
        totalMinuto = 0;
    } else if(minutoInicial > minutoFinal) {
        totalHora -= 1;
        totalMinuto = 60 - (minutoInicial - minutoFinal);
    } else {
        totalMinuto = minutoFinal - minutoInicial;
    }
} else {
    totalHora = 24 - horaInicial + horaFinal;
    if(minutoInicial === minutoFinal) {
        totalMinuto = 0;
    } else if(minutoInicial > minutoFinal) {
        totalHora -= 1;
        totalMinuto = 60 - (minutoInicial - minutoFinal);
    } else {
        totalMinuto = minutoFinal - minutoInicial;
    }
}

console.log(`O JOGO DUROU ${totalHora} HORA(S) E ${totalMinuto} MINUTO(S)`);
