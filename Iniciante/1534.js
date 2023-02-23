var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

while (lines.length > 0) {
    const line = lines.shift();
    const list = line.includes(" ") ? line.split(" ") : [parseInt(line)];
    
    for(let num of list) {

        const value = parseInt(num);

        let matrix = [];
        for(let i = 0; i < value; i++) {
            matrix.push(new Array(value));
        }

        let start = 0;
        let end = value - 1;
        for(let array of matrix) {
            for(let i = 0; i < array.length; i++) {
                if(i === end) {
                    array[i] = 2;
                } else if(i === start) {
                    array[i] = 1;
                } else {
                    array[i] = 3;
                }
            }
            start++;
            end--;
        }

        matrix.forEach(array => {
            let line = "";
            array.forEach(value => line += `${value}`);
            console.log(line);
        });
    }
}
