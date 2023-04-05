var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const word = lines.shift();
const result = word.length > 80 ? 'NO' : 'YES';
console.log(result); 
