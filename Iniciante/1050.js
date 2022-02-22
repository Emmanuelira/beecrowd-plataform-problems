const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const ddd = parseInt(lines.shift());
let textoResposta;

switch(ddd) {
    case 61:
        textoResposta = 'Brasilia';
        break;
    case 71:
        textoResposta = 'Salvador';
        break;
    case 11:
        textoResposta = 'Sao Paulo';
        break;
    case 21:
        textoResposta = 'Rio de Janeiro';
        break;
    case 32:
        textoResposta = 'Juiz de Fora';
        break;
    case 19:
        textoResposta = 'Campinas';
        break;
    case 27:
        textoResposta = 'Vitoria';
        break;
    case 31:
        textoResposta = 'Belo Horizonte';
        break;
    default:
        textoResposta = 'DDD nao cadastrado';
}

console.log(textoResposta);