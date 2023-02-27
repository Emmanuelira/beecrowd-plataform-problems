var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

while (lines.length  > 0) {
    const line = lines.shift();
    const list = line.includes(" ") ? line.split(" ") : [line];
    for(let num of list) {
        const value = parseInt(num);
        if(isNaN(value)) continue;
        const result = value > 0 ? "vai ter duas!" : "vai ter copa!";
        console.log(result);
    }
}
