var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

while (lines.length > 0) {
    let reference = lines.shift();
    if(reference.includes(':')) {
        reference = reference.split(':');
        const [ hour, minute ] = reference.map(r => parseInt(r));
        const maximumDelay = (hour === 7 && minute > 0) || hour > 7 ? ((hour - 7) * 60) + minute : 0;
        console.log(`Atraso maximo: ${maximumDelay}`);
    }
}
