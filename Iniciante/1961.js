var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const [ jump, numberOfPipes ] = lines.shift().split(' ');
const pipes = lines.shift().split(' ');
let result = 'YOU WIN';

for(let i = 1; i < numberOfPipes; i++) {
    if(Math.abs(pipes[i] - pipes[i - 1]) > jump) {
        result = 'GAME OVER';
        break;
    }
}

console.log(result);
