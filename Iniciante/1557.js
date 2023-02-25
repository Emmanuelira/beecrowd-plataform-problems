var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let runProgram = true;

while (runProgram) {
    const value = parseInt(lines.shift());
    if(value === 0) {
        runProgram = false;
    } else {
        const matrix = [];
        for(let i = 0; i < value; i++) {
            matrix.push([Math.pow(2,i)]);
            const array = matrix[i];
            for(let j = 1; j < value; j++) {
                array.push(array[j-1] * 2);
            }
        }

        const maxNum = (2**(value-1)) * (2**(value-1));
        const reference = String(maxNum).length;
        let spaceBefore = "";
        let spaceBetween = " ";

        for(let i = 0; i < reference - 1; i++) {
            spaceBefore += " ";
            spaceBetween += " ";
        }

        for(let array of matrix) {
            let line = spaceBefore;
            for(let i = 0; i < array.length; i++) {
                const numLength = String(array[i]).length;
                if(numLength > 1) {
                    line = `${line.slice(0, (numLength-1)*(-1))}${array[i]}`
                } else {
                    line += array[i];
                }
                if(i < array.length - 1) {
                    line += spaceBetween;
                }
            }
            console.log(line);
        }
        console.log();
    }
}
