/*
No crepúsculo, a cidade de Portland fica cheia de vampiros e lobisomens. Entretanto, nenhum deles quer ser visto enquanto passeiam pelo centro.

Vão ser instaladas câmeras de vigilância em cada esquina do centro de Portland. A cada mês, um mapa atualizado com as câmeras já em funcionamento é disponibilizado no site da prefeitura.

Uma quadra é considerada segura se existem câmeras em, pelo menos, duas de suas quatro esquinas. No centro de Portland todas as quadras são quadrados de mesmo tamanho.

Sua tarefa é, dado o mapa das câmeras em funcionamento nas esquinas, indicar o status de todas as quadras do centro.

Entrada
A primeira linha da entrada tem um inteiro positivo N (1 ≤ N ≤ 100). Nas próximas N+1 linhas, existem N+1 números, que indicam, para cada esquina, a presença ou ausência de uma câmera de vigilância em funcionamento. O número 1 indica que existe uma câmera funcionando na esquina, enquanto o número zero indica que não há câmera funcionando.

Saída
A saída é dada em N linhas. Cada linha tem N caracteres, indicando se a quadra correspondente é segura ou insegura. Se uma quadra é segura, mostre o caractere S; se não é segura, mostre o caractere U.
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const n = parseInt(lines.shift());
const list = [];

for(let i = 0; i < n + 1; i++) {
    list.push(lines.shift().split(' ').map(v => parseInt(v)));
}

for(let i = 1; i < n + 1; i++) {
    let result = '';
    for(let j = 1; j < n + 1; j++) {
        const temp = list[i-1][j-1] + list[i-1][j] + list[i][j-1] + list[i][j];
        result += temp >= 2 ? 'S' : 'U';
    }
    console.log(result);
}
