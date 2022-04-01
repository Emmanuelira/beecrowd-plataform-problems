const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

let permitirDigitar = true;

while(permitirDigitar) {
    const valores = lines.shift().split(" ");
    const x = parseInt(valores[0]);
    const y = parseInt(valores[1]);
    
    if(x === 0 || y === 0) {
        permitirDigitar = false;
    } else {
        if(x > 0 && y > 0) {
            console.log('primeiro');
        } else if(x < 0 && y > 0) {
            console.log('segundo');
        } else if(x < 0 && y < 0) {
            console.log('terceiro');
        } else {
            console.log('quarto');
        }
    }
}