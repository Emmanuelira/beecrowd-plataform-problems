const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const raio = parseInt(lines.shift());

const volume = (4/3) * 3.14159 * Math.pow(raio,3);

console.log(`VOLUME = ${volume.toFixed(3)}`);