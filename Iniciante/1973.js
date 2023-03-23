var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const quantity = parseInt(lines.shift());
const sheeps = lines.shift().split(' ').map(s => parseInt(s));
const stars = {};
let ref = 0;

while(ref >=0 && ref < quantity) {
    const number = sheeps[ref];
    if(!stars[ref]) stars[ref] = true;
    if(number > 0) sheeps[ref]--;
    number % 2 === 0 ? ref-- : ref++;
}

console.log(`${Object.keys(stars).length} ${sheeps.reduce((acc, value) => acc + value)}`);
