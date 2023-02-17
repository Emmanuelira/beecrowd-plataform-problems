var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const line = parseInt(lines.shift());
const operation = lines.shift();
const matrix = [];

for(let i = 0; i < 12; i++) {
    const array = [];
    for(let i = 0; i < 12; i++){
        array.push(parseFloat(lines.shift()));
    }
    matrix.push(array);
}

let finalValue = matrix[line].reduce((accumulator, value) => accumulator + value);

if(operation === 'M') {
    finalValue = finalValue / 12;
}

console.log(finalValue.toFixed(1));
