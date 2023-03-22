var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const quantity = parseInt(lines.shift());

for(let i = 0; i < quantity; i++) {
    const number = parseInt(lines.shift());
    console.log(`${number >= 2015 ? `${number - 2014} A.C.` : `${2015 - number} D.C.`}`);
}
