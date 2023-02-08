const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

let quantidadeCasos = parseInt(lines.shift());
while(quantidadeCasos > 0) {
    const numero = parseInt(lines.shift());
    
    let somaDivisores = 0;
    let contador = 1;
    
    while(contador <= (numero/2)) {
        if(numero % contador === 0) {
            somaDivisores += contador;
        }
        contador++;
    }

    somaDivisores === numero ?
        console.log(`${numero} eh perfeito`) :
        console.log(`${numero} nao eh perfeito`);
    
    --quantidadeCasos;
}
