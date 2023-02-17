var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const size = parseInt(lines.shift());
const array = lines.shift().split(" ").map(v => v = Number(v));
let smallestValue = array[0];
let position = 0;

for(let i = 1; i < size; i++) {
    if(array[i] < smallestValue) {
        smallestValue = array[i];
        position = i;
    }
}

console.log(`Menor valor: ${smallestValue}`);
console.log(`Posicao: ${position}`);
