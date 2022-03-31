const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

while(true) {
    const valores = lines.shift().split(" ");
    const m = parseInt(valores[0]);
    const n = parseInt(valores[1]);
    
    if(m <= 0 || n <= 0) {
        break;
    }
    
    let menorNumero = m;
    let maiorNumero = n;
    
    if(m > n) {
        menorNumero = n;
        maiorNumero = m;
    }
    
    let acumulador = '';
    let soma = 0;
    
    for(let i = menorNumero; i <= maiorNumero; i++) {
        soma += i;
        acumulador += `${i} `;
    }
    
    console.log(`${acumulador}Sum=${soma}`);
}