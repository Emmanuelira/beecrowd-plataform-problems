const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

while(true) {
    const valores = lines.shift().split(" ");
    const x = parseInt(valores[0]);
    const y = parseInt(valores[1]);
    
    if(x === y) {
        break;
    }
    
    let ordem = '';
    
    if(x < y) {
        ordem = 'Crescente';
    } else {
        ordem = 'Decrescente';
    }
    
    console.log(ordem);
}