const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

let rodarPrograma = true;
let numerador = 1;
let denominador = 1;
let s = 0;

while(rodarPrograma) {
    s += numerador/denominador;
    if(numerador === 39) {
        rodarPrograma = false;
    } else {
        numerador += 2;
        denominador *= 2; 
    }
}

console.log(s.toFixed(2));