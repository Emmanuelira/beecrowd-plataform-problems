const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

let quantidadeCasos = parseInt(lines.shift());
while(quantidadeCasos > 0) {
    const posicao = parseInt(lines.shift());
    let valor = 0;

    if(posicao < 2) {
        if(posicao === 1) {
            valor = 1;
        }  
    } else {
        // Executar código fibonacci
    }

    console.log(`Fib(${posicao}) = ${valor}`);
    --quantidadeCasos;
}
