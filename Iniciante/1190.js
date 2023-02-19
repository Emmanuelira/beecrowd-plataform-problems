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

let startRef = 11;
let contador = 1;
while(contador < matrix.length - 1) {
    const array = matrix[contador];
    for(let j = startRef; j < array.length; j++) {
        finalValue += array[j];
        quantity++;
    }
    if(contador < 5) {
        startRef--;
    } else if(contador > 5) {
        startRef++;
    }
    contador++;
}

if(operation === 'M') {
    finalValue /= quantity;
}

console.log(finalValue.toFixed(1));
