var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const quantity = parseInt(lines.shift());
for(let i = 0; i < quantity; i++) {
    const word = lines.shift().replace('\r', '');
    console.log((word.length * 0.01).toFixed(2));
}
