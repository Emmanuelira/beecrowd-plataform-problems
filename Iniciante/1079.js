const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const quantidadeValores = parseInt(lines.shift());

for(let i = 0; i < quantidadeValores; i++) {
    const valores = lines.shift().split(" ");
    const v1 = parseFloat(valores[0]);
    const v2 = parseFloat(valores[1]);
    const v3 = parseFloat(valores[2]);
    
    let mediaPonderada = ((v1 * 2) + (v2 * 3) + (v3 * 5)) / 10;
    console.log(mediaPonderada.toFixed(1));
}