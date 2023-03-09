var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const numbers = lines.shift().split(" ");

let possible = false;

for(let i = 0; i < numbers.length; i++) {
    let a = parseInt(numbers[i]);
    let b = (i + 1) >= numbers.length ? parseInt(numbers[(i + 1) - numbers.length]) : parseInt(numbers[i + 1]);
    let c = (i + 2) >= numbers.length ? parseInt(numbers[(i + 2) - numbers.length]) : parseInt(numbers[i + 2]);
    
    if(a > Math.abs(b - c) && a < (b + c)) {
        if(b > Math.abs(a - c) && b < (a + c)) {
            if(c > Math.abs(a - b) && c < (a + b)) {
                possible = true;
                break;
            }
        }
    }
}

possible ? console.log('S') : console.log('N');
