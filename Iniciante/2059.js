var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const [  p, j1, j2, r, a ] = lines.shift().split(' ').map(n => parseInt(n));
let result = '';

if(r === 1) {
    if(a === 1) result = 'Jogador 2 ganha!';
    else result = 'Jogador 1 ganha!';
} else {
    if(a === 1) result = 'Jogador 1 ganha!';
    else {
        const summation = j1 + j2;
        if(summation % 2 === 0) {
            if(p === 1) result = 'Jogador 1 ganha!';
            else result = 'Jogador 2 ganha!';
        } else {
            if(p === 0) result = 'Jogador 1 ganha!';
            else result = 'Jogador 2 ganha!';
        }
    }
}

console.log(result);
