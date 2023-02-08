const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

let quantidadeCasos = parseInt(lines.shift());
while(quantidadeCasos > 0) {
    const numero = parseInt(lines.shift());

    let ehPrimo = true;
    let contador = 2;
    
    while(contador <= (numero/2)) {
        if(numero % contador === 0) {
            ehPrimo = false;
        }
        contador++;
    }

    ehPrimo ?
        console.log(`${numero} eh primo`) :
        console.log(`${numero} nao eh primo`);
    
    --quantidadeCasos;
}
