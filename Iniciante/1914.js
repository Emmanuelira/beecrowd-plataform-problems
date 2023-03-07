var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const quantity = parseInt(lines.shift());

for(let i = 0; i < quantity; i++) {
    const [ player1, option1, player2, option2 ] = lines.shift().split(" ");
    const [ n1, n2 ] = lines.shift().split(" ");    

    const result = parseInt(n1) + parseInt(n2);

    const odd = option1 === "PAR" ? player1 : player2;
    const even = option1 === "IMPAR" ? player1 : player2;
    
    console.log(result % 2 === 0 ? odd : even);
}
