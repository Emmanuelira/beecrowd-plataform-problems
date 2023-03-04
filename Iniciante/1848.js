var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let counter = 0;
let result = 0;

while(counter < 3) {
    let value = lines.shift().replace("\r", "");
    if(value !== "caw caw") {
        if(value[0] === "*") result += 4; 
        if(value[1] === "*") result += 2; 
        if(value[2] === "*") result += 1; 
    } else {
        console.log(result);
        counter++;
        result = 0;
    }
}
