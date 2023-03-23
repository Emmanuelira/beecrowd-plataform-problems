var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const quantity = parseInt(lines.shift());
let result = 'Minimum note not reached';
let referenceGrade = 8;

for(let i = 0; i < quantity; i++) {
    let [ registration, grade ] = lines.shift().split(' ');
    grade = parseFloat(grade);
    if(grade >= referenceGrade) {
        referenceGrade = grade;
        result = registration;
    }
}

console.log(result);
