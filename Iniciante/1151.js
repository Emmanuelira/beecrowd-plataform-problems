const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const n = parseInt(lines.shift());
let resultado = "";
let valores = [];

for(let i = 0; i < n; i++) {
    if(i <= 1) {
        valores.push(i);
        resultado += `${i} `;
    } else {
        let valor = valores[i-2] + valores[i-1];
        valores.push(valor);
        resultado += `${valor} `;
    }
}

console.log(resultado.trim());