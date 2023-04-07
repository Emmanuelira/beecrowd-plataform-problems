/*
O microblog Twitter é conhecido por limitar as postagens em 140 caracteres. Conferir se um texto vai caber em um tuíte é sua tarefa.

Entrada
A entrada é uma linha de texto T (1 ≤ |T| ≤ 500).

Saída
A saída é dada em uma única linha. Ela deve ser "TWEET" (sem as aspas) se a linha de texto T tem até 140 caracteres. Se T tem mais de 140 caracteres, a saída deve ser "MUTE".
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const tweet = lines.shift();
const result = tweet.length > 140 ? 'MUTE' : 'TWEET';
console.log(result);
