const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const quantidadeCasos = parseInt(lines.shift());

for(let i = 0; i < quantidadeCasos; i++) {
    const valores = lines.shift().split(" ");
    const v1 = parseInt(valores[0]);
    const v2 = parseInt(valores[1]);
    
    let somaImpares = 0;
    let menorNumero = v1;
    let maiorNumero = v2;
    
    if(v1 > v2) {
        menorNumero = v2;
        maiorNumero = v1;
    }
    
    for(let j = menorNumero + 1; j < maiorNumero; j++) {
        if(j % 2 !== 0) {
            somaImpares += j;
        }
    }
    
    console.log(somaImpares);
}