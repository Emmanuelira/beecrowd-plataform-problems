const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const valores = lines.shift().split(" ");
const n1 = parseFloat(valores[0]);
const n2 = parseFloat(valores[1]);
const n3 = parseFloat(valores[2]);
const n4 = parseFloat(valores[3]);

let media = (n1*2 + n2*3 + n3*4 + n4*1) / 10;

console.log(`Media: ${media.toFixed(1)}`);

if(media >= 7) {
    console.log('Aluno aprovado.');
} else if(media < 5) {
    console.log('Aluno reprovado.');
} else {
    console.log('Aluno em exame.');
    const notaExame = parseFloat(lines.shift());
    console.log(`Nota do exame: ${notaExame.toFixed(1)}`);
    
    media = (media + notaExame) / 2;
    
    if(media >= 5) {
        console.log('Aluno aprovado.');
    } else {
        console.log('Aluno reprovado.');
    }
    console.log(`Media final: ${media.toFixed(1)}`);
}