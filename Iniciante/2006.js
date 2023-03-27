var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const winner = parseInt(lines.shift());
const answers = lines.shift().split(' ');
let counter = 0;
answers.forEach(a => { if(winner === parseInt(a)) counter++ });
console.log(counter);
