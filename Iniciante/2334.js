/*
Cinco patinhos foram passear. Além das montanhas. Para brincar. A mamãe gritou: quá, quá, quá, quá. Mas só quatro patinhos voltaram de lá. Quatro patinhos foram passear. Além das montanhas. Para brincar. A mamãe gritou: quá, quá, quá, quá. Mas só três patinhos voltaram de lá. Três patinhos foram passear. Além das montanhas. Para brincar. A mamãe gritou: quá, quá, quá, quá. Mas só dois patinhos voltaram de lá. Dois patinhos foram passear. Além das montanhas. Para brincar. A mamãe gritou: quá, quá, quá, quá. Mas só um patinho voltou de lá. Um patinho foi passear. Além das montanhas. Para brincar. A mamãe gritou: quá, quá, quá, quá. Mas nenhum patinho voltou de lá.

A mamãe patinha ficou tão triste naquele dia que resolveu pedir sua ajuda para procurar além das montanhas, na beira do mar, quantos patinhos não voltaram de lá.

Entrada
Haverá vários casos de testes, a primeira linha de cada caso de teste contém um inteiro (0 ≤ P ≤ 1019) representando a quantidade total de patos, a entrada termina com P = -1.

Saída
O arquivo de saída deve conter a quantidade de patinhos que retornaram.
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// SOLUÇÃO MANIPULANDO STRING
let running = true;
while(running) {
    let quantity = lines.shift();
    let reference = parseInt(quantity);
    if(reference === -1) running = false;
    else {
        if(reference <= 9007199254740992) {
            console.log(reference === 0 ? 0 : reference - 1);
        } else {
            quantity = quantity.replace('\r', '');
            let refIndex;
            let condition = true;

            for(let i = quantity.length - 1; i >= 0 && condition; i--) {
                if(quantity[i] != 0) {
                    refIndex = i;
                    condition = false;
                }
            }

            for(let i = refIndex; i < quantity.length; i++) {
                const value = quantity[i] != 0 ? parseInt(quantity[i]) - 1 : 9;
                quantity = quantity.slice(0, i) + value + quantity.slice(i + 1, quantity.length);
            }

            if(quantity[0] == 0) quantity = quantity.slice(1);

            console.log(quantity);
        }
    }
}

// SOLUÇÃO MANIPULANDO ARRAY
let running = true;
while(running) {
    let quantity = lines.shift();
    let reference = parseInt(quantity);
    if(reference === -1) running = false;
    else {
        if(reference <= 9007199254740992) {
            console.log(reference === 0 ? 0 : reference - 1);
        } else {
            quantity = quantity.split('').map(n => parseInt(n));
            if(isNaN(quantity[quantity.length - 1])) quantity = quantity.slice(0, -1);
            let refIndex;
            let condition = true;

            for(let i = quantity.length - 1; i >= 0 && condition; i--) {
                if(quantity[i] !== 0) {
                    refIndex = i;
                    condition = false;
                }
            }

            for(let i = refIndex; i < quantity.length; i++) {
                if(quantity[i] !== 0) quantity[i] -= 1; 
                else quantity[i] = 9;
            }

            condition = true;
            for(let i = 0; i < quantity.length && condition; i++) {
                if(quantity[i] !== 0) condition = false;
                else quantity.shift();
            }

            console.log(quantity.join(''));
        }
    }
}
