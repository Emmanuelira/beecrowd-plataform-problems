const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const senha = 2002;
let permitirDigitar = true;

while(permitirDigitar) {
    const digitado = parseInt(lines.shift());
    
    if(digitado === senha) {
        permitirDigitar = false;
        console.log('Acesso Permitido');
    } else {
        console.log('Senha Invalida');
    }
}