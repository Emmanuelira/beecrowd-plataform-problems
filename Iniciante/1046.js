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