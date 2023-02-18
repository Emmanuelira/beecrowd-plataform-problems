var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const column = parseInt(lines.shift());
const operation = lines.shift();
const matrix = [];
let finalValue = 0;

for(let i = 0; i < 12; i++) {
    const array = [];
    for(let i = 0; i < 12; i++){
        array.push(parseFloat(lines.shift()));
    }
    matrix.push(array);
}

matrix.forEach(array => finalValue += array[column]);

if(operation === 'M') {
    finalValue /= 12;
}

console.log(finalValue.toFixed(1));
