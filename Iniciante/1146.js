const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

let rodarPrograma = true;

while(rodarPrograma) {
    const input = parseInt(lines.shift());
    if(input === 0) {
        rodarPrograma = false;
    } else {
        let resultado = "";
        for(let i = 1; i <= input; i++) {
            resultado += `${i} `;
        }
        console.log(resultado.trim());   
    }
}