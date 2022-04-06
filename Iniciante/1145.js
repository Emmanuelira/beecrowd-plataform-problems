const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const valores = lines.shift().split(" ");
const quantidadeColunas = parseInt(valores[0]);
const numeroFinal = parseInt(valores[1]);

let rodarPrograma = true;
let referencia = 1;

while(rodarPrograma) {
    let impressao = "";
    for(let j = 0; j < quantidadeColunas; j++) {
        if(referencia <= numeroFinal) {
            impressao += `${referencia} `;
        }
        if(referencia >= numeroFinal) {
            rodarPrograma = false;
        } 
        referencia++;
    }
    console.log(impressao.trim());
}