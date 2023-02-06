const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

let quantidadeCasos = parseInt(lines.shift());
while(quantidadeCasos > 0) {
    const valores = lines.shift().split(" ");
    let pA = parseInt(valores[0]);
    let pB = parseInt(valores[1]);
    const cpA = parseFloat(valores[2])/100;
    const cpB = parseFloat(valores[3])/100;
    
    let quantidadeAnos = 0;
    
    while(quantidadeAnos <= 100 && pB >= pA) {
        pA = parseInt(pA + pA * cpA);
        pB = parseInt(pB + pB * cpB);
        ++quantidadeAnos;
    }
    
    if(quantidadeAnos > 100) {
        console.log("Mais de 1 seculo.");
    } else {
        console.log(`${quantidadeAnos} anos.`);
    }
    
    --quantidadeCasos;
}
