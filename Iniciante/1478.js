var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let value = parseInt(lines.shift());

while(value !== 0) {
    if(value === 1) {
        console.log('  1');
    } else {
        let matrix = [];
        for(let i = 0; i < value; i++) {
            matrix.push(new Array(value));
        }

        for(let i = 1; i <= matrix.length; i++) {
            matrix[i-1][0] = i;
        }

        for(let i = 0; i < matrix.length; i++) {
            const array = matrix[i];
            let add = false;
            for(let j = 0; j < array.length - 1; j++) {
                if(array[j] === 1) {
                    add = true;
                }
                array[j+1] = add ? array[j] + 1 : array[j] - 1; 
            }
        }

        // IMPRIMIR
        for(let array of matrix) {
            let line = "  ";
            for(let i = 0; i < array.length; i++) {
                if(String(array[i]).length === 2) {
                    line = `${line.slice(0, -1)}${array[i]}`
                } else if(String(array[i]).length === 3) {
                    line = `${line.slice(0, -2)}${array[i]}`
                } else {
                    line += array[i];
                }
                if(i < array.length - 1) {
                    line += "   ";
                }
            }
            console.log(line);
        }
    }
    console.log();
    value = parseInt(lines.shift());
}
