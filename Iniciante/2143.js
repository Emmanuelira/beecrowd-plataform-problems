var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let running = true;
while(running) {
    const testCases = parseInt(lines.shift());
    if(testCases >= 1) {
        for(let i = 0; i < testCases; i++) {
            const quantity = parseInt(lines.shift());
            if(quantity >= 3) {
                const ref = quantity % 2 === 0 ? 2 : 1;
                console.log(`${ref + (quantity - ref) * 2}`);
            } else {
                if(quantity === 0) {
                    running = false;
                    break;
                }
            }
        }
    } else running = false;
}
