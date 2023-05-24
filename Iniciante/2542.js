/*
Iu-di-oh! é um jogo de cartas que virou uma verdadeira febre entre os jovens! Todo jogador de Iu-di-oh! tem seu próprio baralho, contendo várias cartas do jogo. Cada carta contém N atributos (como força, velocidade, inteligência, etc.). Os atributos são numerados de 1 a N e são dados por inteiros positivos.

Uma partida de Iu-di-oh! é sempre jogada por dois jogadores. Ao iniciar a partida, cada jogador escolhe exatamente uma carta de seu baralho. Após as escolhas, um atributo é sorteado. Vence o jogador cujo atributo sorteado em sua carta escolhida é maior que na carta escolhida pelo adversário. Caso os atributos sejam iguais, a partida empata.

Marcos e Leonardo estão na grande final do campeonato brasileiro de Iu-di-oh!, cujo prêmio é um Dainavision (que é quase um Plaisteition 2!). Dados os baralhos de ambos, a carta escolhida por cada um e o atributo sorteado, determine o vencedor!

Entrada
A entrada contém vários casos de teste. A primeira linha de cada caso contém um inteiro N (1 ≤ N ≤ 100), o número de atributos de cada carta. A segunda linha contém dois inteiros M e L (1 ≤ M, L ≤ 100), o número de cartas no baralho de Marcos e de Leonardo, respectivamente.

As próximas M linhas descrevem o baralho de Marcos. As cartas são numeradas de 1 a M, e a i-ésima linha descreve a i-ésima carta. Cada linha contém N inteiros ai,1,ai,2,..., ai,N (1 ≤ ai,j ≤ 109). O inteiro ai,j indica o atributo j da carta i. As próximas L linhas descrevem o baralho de Leonardo. As cartas são numeradas de 1 e L e são descritas de maneira análoga.

A próxima linha contém dois inteiros CM e CL (1 ≤ CM ≤ M, 1 ≤ CL ≤ L), as cartas escolhidas por Marcos e Leonardo, respectivamente. Por fim, a última linha contém um inteiro A (1 ≤ A ≤ N) indicando o atributo sorteado.

A entrada termina com fim-de-arquivo (EOF).

Saída
Para cada caso de teste, imprima uma linha contendo “Marcos” se Marcos é o vencedor, “Leonardo” se Leonardo é o vencedor, ou “Empate” caso contrário (sem aspas).
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const ref = [];
while(lines.length > 0) {
    const values = lines.shift().split(' ');
    values.forEach(v => {
        v = parseInt(v);
        if(!isNaN(v)) ref.push(v);
    });
}

let obj = {n: 0, m: 0, l: 0, mCards: [], lCards: [], cm: 0, cl: 0, a: 0};
let arrayRef = ['n', 'm', 'l', 'mCards', 'lCards', 'cm', 'cl', 'a'];
let index = 0;
let indexArrayRef = 0;

while(index < ref.length) {
    if(arrayRef[indexArrayRef] === 'mCards') {
        for(let i = 0; i < obj['m']; i++) {
            let arrayTemp = [];
            for(let j = 0; j < obj['n']; j++) arrayTemp.push(ref[index++]);
            obj['mCards'].push(arrayTemp);
        }
    } else if(arrayRef[indexArrayRef] === 'lCards') {
        for(let i = 0; i < obj['l']; i++) {
            let arrayTemp = [];
            for(let j = 0; j < obj['n']; j++) arrayTemp.push(ref[index++]);
            obj['lCards'].push(arrayTemp);
        }
    } else {
        obj[arrayRef[indexArrayRef]] = ref[index];
        index++;
    }
    indexArrayRef++;

    if(!arrayRef[indexArrayRef]) {
        const [marcos, leonardo] = [obj['mCards'][obj['cm'] - 1][obj['a'] - 1], obj['lCards'][obj['cl'] - 1][obj['a'] - 1]];
        if(marcos > leonardo) {
            result = 'Marcos';
        } else if(leonardo > marcos) {
            result = 'Leonardo';
        } else {
            result = 'Empate';
        }
        
        console.log(result);
        indexArrayRef = 0;
        [obj['mCards'], obj['lCards']] = [[], []];
    }
}
