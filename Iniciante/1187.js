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

let startRef = 1;
let endRef = 11;
let contador = 0;
while(contador < matrix.length && startRef < endRef) {
    const array = matrix[contador];
    for(let j = startRef; j < endRef; j++) {
        finalValue += array[j];
        quantity++;
    }
    startRef++;
    endRef--;
    contador++;
}

if(operation === 'M') {
    finalValue /= quantity;
}

console.log(finalValue.toFixed(1));
