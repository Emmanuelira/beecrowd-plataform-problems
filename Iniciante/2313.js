/*
Dados três valores, verifique se os três podem formar um triângulo. Em caso afirmativo, verifique se ele é escaleno, isóceles ou equilátero e se trata-se de um triângulo retângulo ou não.

Entrada
A entrada consiste em três números inteiros A,B e C (0 < A,B,C < 105).

Saída
A saída deve conter a string "Invalido" se os valores lidos não formarem um triângulo. Se os valores formarem um triângulo a saída deve ser "Valido-Equilatero", "Valido-Escaleno" ou "Valido-Isoceles" de acordo com a característica do triângulo seguido de "Retangulo: S" se o triângulo for retângulo ou "Retangulo: N" se não for, conforme os exemplos.
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const [ a, b, c ] = lines.shift().split(' ').map(s => parseInt(s));
if(Math.abs(b - c) < a && a < Math.abs(b + c)
    && Math.abs(a - c) < b && b < Math.abs(a + c)
    && Math.abs(a - b) < c && c < Math.abs(a + b)) {
        let type;
        if(a !== b && a !== c && b !== c) type = 'Escaleno';
        else if(a === b && a === c && b === c) type = 'Equilatero';
        else type = 'Isoceles';

        const temp = [a, b, c];

        for(let i = 1; i < temp.length; i++) {
            let running = true;
            for(let j = i; j > 0 && running; j--) {
                if(temp[j] > temp[j - 1]) {
                    let t = temp[j];
                    temp[j] = temp[j - 1];
                    temp[j - 1] = t;
                }
            }
        }

        const rec = temp[0]**2 === temp[1]**2 + temp[2]**2 ? 'S' : 'N';

        console.log(`Valido-${type}`);
        console.log(`Retangulo: ${rec}`);
} else {
    console.log('Invalido');
}
