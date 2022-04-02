const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const quantidadeCasos = parseInt(lines.shift());

for(let i = 0; i < quantidadeCasos; i++) {
    const valores = lines.shift().split(" ");
    const v1 = parseInt(valores[0]);
    const v2 = parseInt(valores[1]);
    
    if(v2 === 0) {
        console.log("divisao impossivel");
    } else {
        const resultado = v1 / v2;
        console.log(parseFloat(resultado).toFixed(1));
    }
}