var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const number = parseInt(lines.shift());
const min = number/Math.log(number);
const max = 1.25506 * min;
console.log(`${min.toFixed(1)} ${max.toFixed(1)}`);
