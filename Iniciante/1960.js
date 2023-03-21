var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const number = lines.shift();
let position = 0;
let temp = 0;
let result = "";

for(let i = number.length - 1; i >= 0; i--) {
    let ref = Number(number.charAt(position)) * 10**i;
    let difference = ref - temp;

    while(ref !== temp) {
        if(difference === (900 / 10**Math.abs(i-2))) {
            if(i === 2) result += 'CM';
            else if(i === 1) result += 'XC';
            else result += 'IX';
            break;
        } else if(difference === (400 / 10**Math.abs(i-2))) {
            if(i === 2) result += 'CD';
            else if(i === 1) result += 'XL';
            else result += 'IV';
            break;
        } else if(difference >= (500 / 10**Math.abs(i-2))) {
            if(i === 2) result += 'D';
            else if(i === 1) result += 'L';
            else result += 'V';
            temp += (500 / 10**Math.abs(i-2));
        } else {
            if(i === 2) result += 'C';
            else if(i === 1) result += 'X';
            else result += 'I';
            temp += (100 / 10**Math.abs(i-2));
        }
        difference = ref - temp;
    }

    position++;
    temp = 0;
}
console.log(result);
