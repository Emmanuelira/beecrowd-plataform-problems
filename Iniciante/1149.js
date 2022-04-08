const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const valores = lines.shift().split(" ");
const a = parseInt(valores[0]);
let n;
let resultado = 0;

let rodarPrograma = true;
let referencia = 1;
while(rodarPrograma) {
    let valor = parseInt(valores[referencia]);
    if(valor > 0) {
        n = valor;
        rodarPrograma = false;
    }
    referencia++;
}

for(let i = 0; i < n; i++) {
    resultado += a + i;
}

console.log(resultado);