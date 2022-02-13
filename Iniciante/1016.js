const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const distancia = parseInt(lines.shift());

const tempo = distancia * 2;

console.log(`${tempo} minutos`);