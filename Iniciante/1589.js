var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const loop = parseInt(lines.shift());

for(let i = 0; i < loop; i++) {
    const values = lines.shift().split(" ");
    const r1 = parseInt(values[0]);
    const r2 = parseInt(values[1]);
    console.log(r1 + r2)
}
