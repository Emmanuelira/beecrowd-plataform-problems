var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const [ quantity, size ] = lines.shift().split(" ");
console.log(quantity * size);
