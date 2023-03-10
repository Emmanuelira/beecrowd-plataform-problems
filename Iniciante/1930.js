var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const [ t1, t2, t3, t4 ] = lines.shift().split(" ").map(n => parseInt(n));
const result = t1 + (t2 - 1) + (t3 - 1) + (t4 - 1);
console.log(result);
