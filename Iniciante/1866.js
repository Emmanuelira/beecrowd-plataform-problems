var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const quantity = parseInt(lines.shift());

for(let i = 0; i < quantity; i++) {
    const value = parseInt(lines.shift());
    console.log(value % 2 === 0 ? 0 : 1); 
}
