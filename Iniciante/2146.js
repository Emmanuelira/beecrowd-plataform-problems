var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

while(lines.length > 0) {
    const number = parseInt(lines.shift());
    if(!isNaN(number)) console.log(number - 1);
}
