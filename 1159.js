const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

let rodarPrograma = true;
while(rodarPrograma) {
    let x = parseInt(lines.shift());
    let acumulador = 0;
    let contador = 0;
    if(x !== 0) {
        while(contador < 5) {
            if(x % 2 === 0) {
                acumulador += x;
                contador++;
            }
            x++;
        }
        console.log(acumulador);
    } else {
        rodarPrograma = false;
    }
}