/*
Samu Elmito adora criar jogos peculiares para desafiar seus amigos. Desta vez, ele inventou um jogo chamado "Jogo do Operador", em que ele cria expressões básicas e cada jogador deve escolher uma expressão e preencher a lacuna com o operador correto para validá-la. Os jogadores poderão escolher operadores de somente três tipos: adição, subtração e multiplicação. Porém, se o jogador achar que não há operador entre os três tipos que valide a expressão, poderá responder Impossível.

Sua tarefa é simples: dadas as expressões e as respostas dos jogadores, determinar os jogadores que não passarão para a outra fase do jogo.

Entrada
A entrada é composta por um inteiro T (2 ≤ T ≤ 50) que indica a quantidade de expressões e de jogadores. Cada caso de teste é composto por T expressões na forma "X Y=Z", indicando que X operador Y (0 ≤ X, Y ≤ 103) é igual a Z (-103 ≤ Z ≤ 106), seguido de T jogadores e suas respectivas respostas na forma "N E R", sendo N o nome do jogador (até 50 caracteres e sem espaços), E o índice da expressão escolhida (1 ≤ E ≤ T) e R a resposta (+, -, * ou I, indicando Impossível). A entrada termina com EOF (fim de arquivo).

Saída
Para cada caso de teste, se todos os jogadores passarem, imprima "You Shall All Pass!"; se nenhum jogador passar, imprima "None Shall Pass!"; caso contrário, imprima, em ordem lexicográfica e entre espaços, o nome dos jogadores que erraram a resposta e, desta forma, não passarão para a próxima fase do jogo.
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function condition(array, operator) {
    if(operator === '+') return array[0] + array[1] !== array[2];
    else if(operator === '-') return array[0] - array[1] !== array[2];
    else if(operator === '*') return array[0] * array[1] !== array[2];
    else {
        return !(condition(array, '+') 
            && condition(array, '-') 
            && condition(array, '*')); 
    }
}

while(lines.length > 0) {
    const t = parseInt(lines.shift());

    if(!isNaN(t)) {
        const expressions = {};

        for(let i = 1; i <= t; i++) {
            const [x, temp] = lines.shift().replace('\r', '').split(' ');
            const [y, z] = temp.split('=');
            expressions[i] = [parseInt(x), parseInt(y), parseInt(z)]; 
        }

        let count = 0;
        let result = [];
        
        for(let i = 1; i <= t; i++) {
            const [n, e, r] = lines.shift().replace('\r', '').split(' ');
            if(condition(expressions[e], r)) {
                result.push(n);
                count++;
            }
        }

        if(count > 0) {
            if(count === t) console.log('None Shall Pass!');
            else console.log(result.sort().join(' '));
        } else console.log('You Shall All Pass!');
    }
}
