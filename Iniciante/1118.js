const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

let rodarPrograma = true;
let quantidadeNotas = 0;
let somaNotas = 0;

while(rodarPrograma) {
    const nota = parseFloat(lines.shift());
    if(nota < 0 || nota > 10) {
        console.log("nota invalida");
    } else {
        somaNotas += nota;
        quantidadeNotas++;
    }
    
    if(quantidadeNotas === 2) {
        const media = somaNotas / 2;
        console.log(`media = ${media.toFixed(2)}`);
        
        let rodarQuestionario = true;
        while(rodarQuestionario) {
            console.log("novo calculo (1-sim 2-nao)");
            const novoCalculo = parseInt(lines.shift()); 
            
            switch(novoCalculo) {
                case 1:
                    quantidadeNotas = 0;
                    somaNotas = 0;
                    rodarQuestionario = false;
                    break;
                case 2:
                    rodarPrograma = false;
                    rodarQuestionario = false;
                    break;
            }
        }
    }
}