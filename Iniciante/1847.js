var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const values = lines.shift().split(" ");
const t1 = parseInt(values[0]);
const t2 = parseInt(values[1]);
const t3 = parseInt(values[2]);

let firstChange;
if(t1 > t2) firstChange = 'desceu';
else if(t1 === t2) firstChange = 'permaneceu';
else firstChange = 'subiu';

let lastChange;
if(t2 > t3) lastChange = 'desceu';
else if(t2 === t3) lastChange = 'permaneceu';
else lastChange = 'subiu';

let result = ':)';
if(firstChange === "subiu" && (lastChange === "desceu" || lastChange === "permaneceu")) result = ':(';
else if(firstChange === "subiu" && lastChange === "subiu" && (t2-t1) > (t3-t2)) result = ':(';
else if(firstChange === "desceu" && lastChange === "desceu" && (t2-t3) >= (t1-t2)) result = ':(';
else if(firstChange === "permaneceu" && lastChange !== "subiu") result = ':(';

console.log(result);
