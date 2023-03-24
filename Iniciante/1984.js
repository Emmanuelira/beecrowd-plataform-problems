var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let numbers = String(parseInt(lines.shift()));
const reference = numbers.indexOf('e');
if(reference !== -1) numbers = numbers.slice(0, reference);
numbers = numbers.split('').reverse();
const result = numbers.reduce((acc, value) => acc + value);
console.log(result);
