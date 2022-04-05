const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const quantidadeLinhas = parseInt(lines.shift());
let referencia = 1;

for(let i = 0; i < quantidadeLinhas; i++) {
    let impressao = "";
    for(let j = 0; j < 4; j++) {
        if(j === 3) {
            impressao += "PUM";
        } else {
            impressao += `${referencia} `;
        }
        referencia++;
    }
    console.log(impressao);
}