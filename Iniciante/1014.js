const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const distancia = parseInt(lines.shift());
const totalGasto = parseFloat(lines.shift());

const consumo = distancia / totalGasto;

console.log(`${consumo.toFixed(3)} km/l`);