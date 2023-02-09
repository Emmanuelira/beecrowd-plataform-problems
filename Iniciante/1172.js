const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

for(let i = 0; i < 10; i++) {
    const input = parseInt(lines.shift());
    console.log(`X[${i}] = ${input > 0 ? input : 1}`);
}
