const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

let valores = lines.shift().split(" ");
valores.sort(function(a, b) {
  return a - b;
});

const a = parseFloat(valores[2]);
const b = parseFloat(valores[1]);
const c = parseFloat(valores[0]);

if(a >= (b + c)) {
    console.log('NAO FORMA TRIANGULO');
} else {
    if(Math.pow(a,2) === (Math.pow(b,2) + Math.pow(c,2))) {
        console.log('TRIANGULO RETANGULO');
    } 
    if(Math.pow(a,2) > (Math.pow(b,2) + Math.pow(c,2))) {
        console.log('TRIANGULO OBTUSANGULO');
    } 
    if(Math.pow(a,2) < (Math.pow(b,2) + Math.pow(c,2))) {
        console.log('TRIANGULO ACUTANGULO');
    } 
    if(a === b && a === c) {
        console.log('TRIANGULO EQUILATERO');
    } else {
        if(a === b || a === c || b === c) {
            console.log('TRIANGULO ISOSCELES');
        }
    }
}