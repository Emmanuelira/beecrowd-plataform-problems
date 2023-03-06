var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const quantity = parseInt(lines.shift());

for(let i = 0; i < quantity; i++) {
    const values = lines.shift().split(" ");
    const name = values[0];
    console.log(name === 'Thor' ? 'Y' : 'N');  
}
