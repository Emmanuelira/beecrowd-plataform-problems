var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const numbers = lines.shift().split(' ');
const before = parseFloat(numbers[0]);
const after = parseFloat(numbers[1]);

const result = (100 * (after - before)) / before;

console.log(`${result.toFixed(2)}%`);
