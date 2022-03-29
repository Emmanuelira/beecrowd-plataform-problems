let i = 0;
let j = 1;

while(i <= 2) {
    for(let ind = 0; ind < 3; ind++) {
        let jota = j + ind;
        
        let letraI = i;
        let letraJ = jota;
        
        if(i % 1 === 0) {
            letraI = Math.round(i);
        } else {
            letraI = i.toFixed(1);
        }
        
        if(jota % 1 === 0) {
            letraJ = Math.round(letraJ);
        } else {
            letraJ = jota.toFixed(1);
        }
        console.log(`I=${letraI} J=${letraJ}`);
    }
    i += 0.2;
    j += 0.2;
}

// INCOMPLETO