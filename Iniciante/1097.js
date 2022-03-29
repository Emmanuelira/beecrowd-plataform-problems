let i = 1;
let j = 7;

while(i <= 9) {
    for(let ind = 0; ind < 3; ind++) {
        let jota = j - ind;
        console.log(`I=${i} J=${jota}`);
    }
    i += 2;
    j += 2;
}