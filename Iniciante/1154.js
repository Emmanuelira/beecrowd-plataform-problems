const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

let rodarPrograma = true;
let quantidade = 0;
let somatorio = 0;

while(rodarPrograma) {
    const input = parseInt(lines.shift());
    if(input < 0) {
        rodarPrograma = false;
    } else {
        somatorio += input;
        quantidade++;
    }
}

const media = somatorio !== 0 ? (somatorio/quantidade) : 0;

console.log(media.toFixed(2));