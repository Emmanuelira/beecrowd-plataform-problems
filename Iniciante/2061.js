var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [ tabs, actions ] = lines.shift().split(' ').map(n => parseInt(n));

for(let i = 0; i < actions; i++) {
    const action = lines.shift().replace('\r', '');
    action === 'fechou' ? tabs++ : tabs--;
}

console.log(tabs);
