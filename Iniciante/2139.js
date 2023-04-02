var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const christmas = new Date('12/25/2016');
while(lines.length > 0) {
    const [ month, day ] = lines.shift().split(' ');
    const today = new Date(`${month}/${day}/2016`);
    const daysRemaining = (christmas - today) / 86400000;
    let result = '';

    if(daysRemaining === 0) result = 'E natal!';
    else if(daysRemaining === 1) result = 'E vespera de natal!';
    else if(daysRemaining > 1) result = `Faltam ${daysRemaining} dias para o natal!`; 
    else result = 'Ja passou!';
    
    console.log(result);
}
