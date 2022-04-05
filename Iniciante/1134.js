const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

let rodarPrograma = true;
let alcool = 0;
let gasolina = 0;
let diesel = 0;

while(rodarPrograma) {
    const tipoCombustivel = parseInt(lines.shift());
    switch(tipoCombustivel) {
        case 1:
            alcool++;
            break;
        case 2:
            gasolina++;
            break;
        case 3:
            diesel++;
            break;
        case 4:
            rodarPrograma = false;
    }
}

console.log("MUITO OBRIGADO");
console.log(`Alcool: ${alcool}`);
console.log(`Gasolina: ${gasolina}`);
console.log(`Diesel: ${diesel}`);