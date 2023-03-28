var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

while (lines.length > 0) {
    const volume = parseFloat(lines.shift());
    const diameter = parseFloat(lines.shift());
    const radius = diameter / 2;
    const pi = 3.14;
    const height = volume / (pi * radius**2);
    const baseArea = pi * radius**2;
    console.log(`ALTURA = ${height.toFixed(2)}`);
    console.log(`AREA = ${baseArea.toFixed(2)}`);
}
