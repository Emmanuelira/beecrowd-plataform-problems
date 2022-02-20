const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const valores = lines.shift().split(" ");
const a = parseFloat(valores[0]);
const b = parseFloat(valores[1]);
const c = parseFloat(valores[2]);

const condicao = ( Math.abs(b - c) < a && a < (b + c) )
&& ( Math.abs(a - c) < b && b < (a + c) )
&& ( Math.abs(a - b) < c && c < (a + b) );

if(condicao) {
    const perimetro = a + b + c;
    console.log(`Perimetro = ${perimetro.toFixed(1)}`);
} else {
    const area = ((a + b) * c) / 2;
    console.log(`Area = ${area.toFixed(1)}`);
}