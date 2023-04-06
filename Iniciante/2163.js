var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const [ rows, columns ] = lines.shift().split(' ').map(v => parseInt(v));
const land = [];
let rowResult = 0;
let columnResult = 0;

for(let i = 0; i < rows; i++) land.push(lines.shift().split(' ').map(v => parseInt(v)));

let running = true;
for(let i = 0; i < rows && running; i++) {
    for(let j = 0; j < columns && running; j++) {
        const ref = land[i][j];
        if(ref === 42 && (i - 1) >= 0 && (i + 1) < rows
            && (j - 1) >= 0 && (j + 1) < columns) {
            let result = true;
            for(let k = i - 1; k <= i + 1 && result; k++) {
                for(let l = j - 1; l <= j + 1 && result; l++) {
                    if(land[k][l] !== 7 && !(k === i && l === j)) result = false;
                }
            }
            if(result) {
                rowResult = i + 1;
                columnResult = j + 1;
                running = false;
            }
        }
    }
}

console.log(`${rowResult} ${columnResult}`);
