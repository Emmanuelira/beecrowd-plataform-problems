var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const quantity = parseInt(lines.shift());
const values = lines.shift().split(" ");
let result = 1;

for(let i = 1; i < quantity; i++) {
    if(values[i] < values[result - 1]) result = i + 1; 
}

console.log(result);
