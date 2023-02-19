var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const operation = lines.shift();
const matrix = [];
let finalValue = 0;
let quantity = 0;

for(let i = 0; i < 12; i++) {
    const array = [];
    for(let i = 0; i < 12; i++){
        array.push(parseFloat(lines.shift()));
    }
    matrix.push(array);
}

let ref = 11;
for(let i = 0; i < matrix.length; i++) {
    const array = matrix[i];
    for(let j = 0; j < ref; j++) {
        finalValue += array[j];
        quantity++;
    }
    ref--;
}

if(operation === 'M') {
    finalValue /= quantity;
}

console.log(finalValue.toFixed(1));
