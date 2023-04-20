/*
Leia quatro números (N1, N2, N3, N4), cada um deles com uma casa decimal, correspondente às quatro notas de um aluno. Calcule a média com pesos 2, 3, 4 e 1, respectivamente, para cada uma destas notas e mostre esta média acompanhada pela mensagem "Media: ". Se esta média for maior ou igual a 7.0, imprima a mensagem "Aluno aprovado.". Se a média calculada for inferior a 5.0, imprima a mensagem "Aluno reprovado.". Se a média calculada for um valor entre 5.0 e 6.9, inclusive estas, o programa deve imprimir a mensagem "Aluno em exame.".

No caso do aluno estar em exame, leia um valor correspondente à nota do exame obtida pelo aluno. Imprima então a mensagem "Nota do exame: " acompanhada pela nota digitada. Recalcule a média (some a pontuação do exame com a média anteriormente calculada e divida por 2). e imprima a mensagem "Aluno aprovado." (caso a média final seja 5.0 ou mais ) ou "Aluno reprovado.", (caso a média tenha ficado 4.9 ou menos). Para estes dois casos (aprovado ou reprovado após ter pego exame) apresente na última linha uma mensagem "Media final: " seguido da média final para esse aluno.

Entrada
A entrada contém quatro números de ponto flutuante correspendentes as notas dos alunos.

Saída
Todas as respostas devem ser apresentadas com uma casa decimal. As mensagens devem ser impressas conforme a descrição do problema. Não esqueça de imprimir o enter após o final de cada linha, caso contrário obterá "Presentation Error".
*/

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
