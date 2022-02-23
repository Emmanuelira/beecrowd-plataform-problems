const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

let renda = parseFloat(lines.shift());

let imposto;

if(renda <= 2000) {
    console.log('Isento');
} else {
    if(renda <= 3000) {
        imposto = (renda - 2000) * 0.08;
    } else if(renda <= 4500) {
        imposto = 80 + (renda - 3000) * 0.18;
    } else {
        imposto = 350 + (renda - 4500) * 0.28;
    }
    console.log(`R$ ${imposto.toFixed(2)}`);
}