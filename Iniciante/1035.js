const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const valores = lines.shift().split(" ");
const a = parseInt(valores[0]);
const b = parseInt(valores[1]);
const c = parseInt(valores[2]);
const d = parseInt(valores[3]);

if(b > c 
   && d > a 
   && (c+d) > (a+b) 
   && c > 0 
   && d > 0 
   && a % 2 == 0) {
    console.log("Valores aceitos");
} else {
    console.log("Valores nao aceitos")
}