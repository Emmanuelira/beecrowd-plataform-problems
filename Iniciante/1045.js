const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

let valores = lines.shift().split(" ");
valores.sort(function(a, b) {
  return a - b;
});

const a = parseFloat(valores[0]);
const b = parseFloat(valores[1]);
const c = parseFloat(valores[2]);

// INCOMPLETA