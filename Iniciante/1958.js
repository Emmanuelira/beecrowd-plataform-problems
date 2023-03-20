var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let number = lines.shift();
let result = '';
let reference = 0;

if(number.substring(0,1) === '-') {
    if(Number(number) === 0) {
        result += '-';
    }
    reference++;
} else {
    result += '+';
}

const y = String(parseFloat(number));

if(y.includes('e')) {
    let indexE = y.indexOf('e');
    let x = y.slice(0, indexE);
    result += `${Number(x).toFixed(4)}${y.slice(indexE).toUpperCase()}`;
} else {
    number = y;
    let repeat = true;
    let counterSignExponent = 0;

    while(repeat) {
        if(number[reference] === '0' && Number(number) !== 0) {
            number = String(Number(number) * 10);
            counterSignExponent--;
        } else if(number[reference + 1] !== '.' && number[reference + 1] !== undefined) {
            number = String(Number(number) * 0.1);
            counterSignExponent++;
        } else {
            repeat = false;
        }
    }

    result += `${Number(number).toFixed(4)}E`;

    if(counterSignExponent >= 0) {
        result += String(counterSignExponent).length > 1 ? `+${counterSignExponent}` : `+0${counterSignExponent}`;
    } else {
        result += String(counterSignExponent).length > 2 ? counterSignExponent : `-0${counterSignExponent * (-1)}`;
    }
}

console.log(result);
