const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const tempo = parseInt(lines.shift());

const referencia = [3600, 60];
let resultado = "";

let resto = tempo;
for(let i in referencia) {
    resultado += `${parseInt(resto / referencia[i])}:`
    resto = resto % referencia[i];
}
resultado += `${resto}`;

console.log(resultado);