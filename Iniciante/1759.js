var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const quantity = parseInt(lines.shift());
let line = "";
for(let i = 0; i < quantity; i++) {
    line += "Ho ";
}
if(quantity) line = line.trim() + "!";
console.log(line);
