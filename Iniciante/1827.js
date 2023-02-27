var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

while(lines.length > 0) {
    const matrixLength = parseInt(lines.shift());
    if(!isNaN(matrixLength)) {
        const matrix = [];
        for(let i = 0; i < matrixLength; i++) matrix.push(new Array(matrixLength));

        const squareReference = Math.floor(matrixLength / 3);
        const centralReference = Math.floor(matrixLength / 2);
        let primDiagReference = 0;
        let secDiagReference = matrixLength - 1;

        for(let i = 0; i < matrix.length; i++) {
            const array = matrix[i];
            if(i >= squareReference && i < matrixLength - squareReference) {
                for(let j = 0; j < array.length; j++) {
                    if(j >= squareReference && j < array.length - squareReference) {
                        if(i === centralReference &&
                        j === centralReference) {
                            array[j] = 4;
                        } else {
                            array[j] = 1;
                        }
                    } else {
                        array[j] = 0;
                    }
                }
            } else {
                for(let j = 0; j < array.length; j++) {
                    switch(j) {
                        case primDiagReference:
                            array[j] = 2;
                            break;
                        case secDiagReference:
                            array[j] = 3;
                            break;
                        default:
                            array[j] = 0;
                    }
                }
            }
            primDiagReference++;
            secDiagReference--;
        }

        matrix.forEach(array => {
            let line = "";
            array.forEach(value => {
                line += value;
            });
            console.log(line);
        })
        console.log();
    }
}
