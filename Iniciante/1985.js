var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const quantity = parseInt(lines.shift());
const menu = { '1001': 1.50, '1002': 2.50, '1003': 3.50, '1004': 4.50, '1005': 5.50 };
let result = 0;
for(let i = 0; i< quantity; i++) {
    const [ code, productQuantity] = lines.shift().split(' ');
    result += menu[code] * productQuantity;
}
console.log(result.toFixed(2));
