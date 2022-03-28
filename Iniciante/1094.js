const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const quantidadeCasos = parseInt(lines.shift());
let totalCobaias = 0;
let totalCoelhos = 0;
let totalRatos = 0;
let totalSapos = 0;

for(let i = 0; i < quantidadeCasos; i++) {
    const valores = lines.shift().split(" ");
    const quantia = parseInt(valores[0]);
    const tipoCobaia = valores[1];
    
    if(["C", "R", "S"].includes(tipoCobaia)) {
        totalCobaias += quantia;
        switch(tipoCobaia) {
            case "C":
                totalCoelhos += quantia;
                break;
            case "R":
                totalRatos += quantia;
                break;
            case "S":
                totalSapos += quantia;
                break;
        }
    }
}

let percentualCoelhos = (totalCoelhos/totalCobaias) * 100;
let percentualRatos = (totalRatos/totalCobaias) * 100;
let percentualSapos = (totalSapos/totalCobaias) * 100;

console.log(`Total: ${totalCobaias} cobaias`);
console.log(`Total de coelhos: ${totalCoelhos}`);
console.log(`Total de ratos: ${totalRatos}`);
console.log(`Total de sapos: ${totalSapos}`);
console.log(`Percentual de coelhos: ${percentualCoelhos.toFixed(2)} %`);
console.log(`Percentual de ratos: ${percentualRatos.toFixed(2)} %`);
console.log(`Percentual de sapos: ${percentualSapos.toFixed(2)} %`);