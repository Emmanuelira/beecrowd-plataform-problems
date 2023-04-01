var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let caseNumber = 1;
while(lines.length > 0) {
    let n1 = lines.shift();
    let n2 = lines.shift();
    
    n1 = n1 ? n1.replace('\r', '') : '';
    n2 = n2 ? n2.replace('\r', '') : '';

    if(n1 !== '' || n2 !== '') {
        let ref = 0;
        let quantity = 0;
        let pos = 0;

        while(ref !== -1) {
            ref = n2.indexOf(n1, ref);
            if(ref !== -1) {
                quantity++;
                pos = ++ref;
            }
        }

        console.log(`Caso #${caseNumber}:`);
        if(quantity) {
            console.log(`Qtd.Subsequencias: ${quantity}`);
            console.log(`Pos: ${pos}`);
        } else {
            console.log('Nao existe subsequencia');
        }
        console.log();
        caseNumber++;
    }
}
