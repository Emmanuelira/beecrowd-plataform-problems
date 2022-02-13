const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const tempo = parseInt(lines.shift());
const velocidade = parseInt(lines.shift());

const distancia = velocidade * tempo;
const litros = distancia / 12;

console.log(litros.toFixed(3));