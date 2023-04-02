var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let running = true;
const bills = [ 100, 50, 20, 10, 5, 2 ];
while(running) {
    const [ purchaseValue, amountPaid ] = lines.shift().split(' ').map(v => parseInt(v));
    if(purchaseValue !== 0 && amountPaid !== 0) {
        let difference = amountPaid - purchaseValue;
        let quantity = 0;

        for(let i = 0; i < bills.length; i++) {
            while(difference >= bills[i]) {
                difference -= bills[i];
                quantity++;
                if(quantity === 2) break;
            }
        }
        if(difference === 0 && quantity === 2) console.log('possible');
        else console.log('impossible');
    }
    else running = false;
}
