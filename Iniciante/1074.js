const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const quantidadeValores = parseInt(lines.shift());
const valores = [];

for(let i = 0; i < quantidadeValores; i++) {
    let valor = parseInt(lines.shift());
    valores.push(valor);
}

for(let valor of valores) {
    let descricao = '';
    if(valor === 0) {
        descricao = "NULL";
    } else {
        if(valor % 2 === 0) {
            descricao += "EVEN";
        } else {
            descricao += "ODD";
        }
        
        if(valor > 0) {
            descricao += " POSITIVE";
        } else {
            descricao += " NEGATIVE";
        }
    }
    console.log(descricao);
}