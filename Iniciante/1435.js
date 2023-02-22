let value = parseInt(lines.shift());

while(value !== 0) {
    if(value === 1) {
        console.log('  1');
    } else {
        let matrix = [];
        for(let i = 0; i < value; i++) {
            matrix.push(new Array(value));
        }

        let reference = Math.ceil(value/2);
        let numFill = 1;
        let positionFill = 0;

        for(let i = 0; i < reference; i++) {
            for(let j = positionFill; j < matrix[i].length - positionFill; j++) {
                matrix[i][j] = numFill;
            }
            matrix[i+1] = matrix[i].slice();
            numFill++;
            positionFill++;
        }

        let ref = value % 2 === 0 ? 1 : 2;
        for(let i = reference; i < value; i++) {
            matrix[i] = matrix[i-ref];
            ref += 2;
        }

        // IMPRIMIR
        for(let array of matrix) {
            let line = "";
            for(let num of array) {
                String(num).length > 1 ? line = `${line.slice(0, -1)}${num}   ` : line += `${num}   `;
            }
            line = line.trim();
            console.log(`  ${line}`);
        }
    }
    console.log();
    value = parseInt(lines.shift());
}
