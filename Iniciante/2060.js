var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const quantity = parseInt(lines.shift());
const numbers = lines.shift().split(' ').map(n => parseInt(n));
const multiples = [0, 0, 0, 0];

for(let i = 0; i < quantity; i++) {
    const reference = numbers[i];
    if(reference % 2 === 0) multiples[0]++;
    if(reference % 3 === 0) multiples[1]++;
    if(reference % 4 === 0) multiples[2]++;
    if(reference % 5 === 0) multiples[3]++;
}

for(let i = 0; i < multiples.length; i++) console.log(`${multiples[i]} Multiplo(s) de ${i + 2}`);
