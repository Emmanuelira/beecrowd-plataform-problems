var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let number = parseInt(lines.shift());
const reference = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
let result = "";

if(number < 16) {
    result = reference[number];
} else {
    let stash = [];
    let repeat = true;
    while(repeat) {
        if(Math.floor(number / 16) > 1) {
            stash.unshift(number % 16);
            number = Math.floor(number / 16);
        } else {
            stash.unshift(number % 16);
            if(Math.floor(number / 16) === 1) stash.unshift(1);
            repeat = false;
        }
    }
    stash.forEach((num, index) => stash[index] = reference[num]);
    result = stash.join("");
}

console.log(result);
