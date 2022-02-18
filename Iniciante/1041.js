const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const coordenadas = lines.shift().split(" ");
const x = parseFloat(coordenadas[0]);
const y = parseFloat(coordenadas[1]);

if(x === 0 && y !== 0) {
    console.log('Eixo Y');
} else if(x !== 0 && y === 0) {
    console.log('Eixo X');
} else if(x > 0 && y > 0) {
    console.log('Q1');
} else if(x < 0 && y > 0) {
    console.log('Q2');
} else if(x < 0 && y < 0) {
    console.log('Q3');
} else if(x > 0 && y < 0) {
    console.log('Q4');
} else {
    console.log('Origem');
}