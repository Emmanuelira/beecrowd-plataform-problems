var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const [ a, b ] = lines.shift().split(" ").map(n => parseInt(n));
let result = a;

if(a !== b) result = a > b ? a : b;

console.log(result);
