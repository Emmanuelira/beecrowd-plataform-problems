var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let runProgram = true;

while (runProgram) {
    const line = lines.shift();
    const reference = line.includes(" ") ? line.split(" ") : parseInt(line);
    if(reference === 0) {
        runProgram = false;
    } else {
        const sideA = parseInt(reference[0]);
        const sideB = parseInt(reference[1]);
        const maxPercentage = parseInt(reference[2]);

        const total = (100 * sideA * sideB) / maxPercentage;
        const landSize = Math.floor(Math.sqrt(total));
        console.log(landSize);
    }
}
