const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

let x = parseInt(lines.shift());
let z;

let rodarPrograma = true;
while(rodarPrograma) {
    const ipt = parseInt(lines.shift());
    if(ipt > x) {
        z = ipt;
        rodarPrograma = false;
    }
}

rodarPrograma = true;
let acumulador = x;
let contador = 1;
while(rodarPrograma) {
    contador++;
    acumulador += x + 1;
    if(acumulador > z) {
        rodarPrograma = false;
    }
    x++;
}

console.log(contador);