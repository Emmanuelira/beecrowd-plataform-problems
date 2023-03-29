var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const quantity = parseInt(lines.shift());

for(let i = 0; i < quantity; i++) {
    const j1 = lines.shift().replace('\r', '');
    const j2 = lines.shift().replace('\r', '');
    let result = '';

    if(j1 === 'ataque') {
        if(j2 === 'ataque') result = 'Aniquilacao mutua';
        else if(j2 === 'pedra') result = 'Jogador 1 venceu';
        else result = 'Jogador 1 venceu';
    } else if(j1 === 'pedra') {
        if(j2 === 'ataque') result = 'Jogador 2 venceu';
        else if(j2 === 'pedra') result = 'Sem ganhador';
        else result = 'Jogador 1 venceu';
    } else {
        if(j2 === 'ataque') result = 'Jogador 2 venceu';
        else if(j2 === 'pedra') result = 'Jogador 2 venceu';
        else result = 'Ambos venceram';
    }

    console.log(result);
}
