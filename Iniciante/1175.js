const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const vetor = [];
for(let i = 0; i < 20; i++) {
    const valor = parseInt(lines.shift());
    vetor.push(valor);
}

for(let i = 0; i < vetor.length/2; i++) {
    const temp = vetor[i];
    vetor[i] = vetor[(vetor.length-1)-i];
    vetor[(vetor.length-1)-i] = temp; 
}

vetor.forEach((value, index) => console.log(`N[${index}] = ${value}`));
