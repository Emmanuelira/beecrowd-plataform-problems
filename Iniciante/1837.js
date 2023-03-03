var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const values = lines.shift().split(" ");
const a = parseInt(values[0]);
const b = parseInt(values[1]);

let quociente = Math.floor(a/b);
let resto = a - (b * quociente);
if(resto < 0) {
    quociente = Math.ceil(a/b);
    resto = a - (b * quociente);
}

console.log(`${quociente} ${resto}`);
