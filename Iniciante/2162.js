var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const quantity = parseInt(lines.shift());
const landscape = lines.shift().split(' ').map(v => parseInt(v));
let result = 1;

if(quantity > 1) {
    let ref = '';
    for(let i = 1; i < quantity; i++) {
        const dif = landscape[i] - landscape[i - 1];
        let temp = '';

        if(dif > 0) temp = 'pico';
        else if(dif < 0) temp = 'vale';
        else {
            result = 0;
            break;
        }

        if(ref === '') ref = temp;
        else {
            if(ref !== temp) ref = temp;
            else {
                result = 0;
                break;
            }
        }
    }
}

console.log(result);
