var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let quantity = parseInt(lines.shift());
let phrase = 'LIFE IS NOT A PROBLEM TO BE SOLVED';

console.log(phrase.slice(0, quantity));
