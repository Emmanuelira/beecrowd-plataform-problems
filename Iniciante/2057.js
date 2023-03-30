var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const [ hour, time, timeZone ] = lines.shift().split(' ').map(n => parseInt(n));
const loop = time + timeZone;

let result = hour;

for(let i = 1; i <= Math.abs(loop); i++) {
    loop > 0 ? result++ : result--;
    if(result === 24) result = 0;
    else if(result === -1) result = 23;
}

console.log(result);
