var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const number = parseInt(lines.shift());

function recursive(ref) {
    if(ref === 1) return 1/6;
    else return 1/(6 + recursive(--ref));
}

let result = 3;
if(number > 0) result += recursive(number);
console.log(result.toFixed(10));
