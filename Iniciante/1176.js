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
        fib = [0, 1];
        for(let i = 2; i <= posicao; i++) {
            fib.push(fib[i-2] + fib[i-1]);
        }
        valor = fib[fib.length - 1];
    }

    console.log(`Fib(${posicao}) = ${valor}`);
    --quantidadeCasos;
}
