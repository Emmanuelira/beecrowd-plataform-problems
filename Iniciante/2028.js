var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let counter = 1;

while (lines.length > 0) {
    
    const ref = lines.shift().split(' ');
    ref.forEach(r => {
        const number = parseInt(r);
        if(!isNaN(number)) {
            let list = [];
            if(number === 0) list = [0];
            else if(number === 1) list = [0, 1];
            else {
                list = [0, 1];
                for(let i = 2; i <= number; i++) {
                    for(let j = 0; j < i; j++) {
                        list.push(i);
                    }
                }
            }
            console.log(`Caso ${counter}: ${list.length} numero${list.length > 1 ? 's' : ''}`);
            console.log(list.join(' '));
            console.log();
            counter++;
        }
    })
}
