const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const v1 = parseInt(lines.shift());
const v2 = parseInt(lines.shift());

console.log(`PROD = ${v1 * v2}`);