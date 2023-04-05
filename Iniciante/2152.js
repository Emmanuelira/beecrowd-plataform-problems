var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const quantity = parseInt(lines.shift());
for(let i = 0; i < quantity; i++) {
    let [ hour, minute, occurrence ] = lines.shift().split(' ');
    hour = hour.length > 1 ? hour : `0${hour}`;
    minute = minute.length > 1 ? minute : `0${minute}`;
    occurrence = parseInt(occurrence) === 1 ? 'A porta abriu!' : 'A porta fechou!';
    console.log(`${hour}:${minute} - ${occurrence}`);
}
