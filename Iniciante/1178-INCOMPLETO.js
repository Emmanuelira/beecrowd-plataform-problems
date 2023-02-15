// const input = require('fs').readFileSync('/dev/stdin', 'utf8');
// const lines = input.split('\n');

const input = require('fs').readFileSync('./stdin/file.txt', 'utf8');
const lines = input.split('\n');

let valor = parseFloat(lines.shift());

for(let i = 0; i < 100; i++) {
    console.log(`N[${i}] = ${valor.toLocaleString('en-US', { minimumFractionDigits: 4 })}`);
    valor /= 2.0000;
}

//Link help: https://www.beecrowd.com.br/judge/pt/questions/view/1178/5693?origem=1
