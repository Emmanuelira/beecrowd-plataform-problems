var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

while(lines.length > 0) {
    const quantity = parseInt(lines.shift());
    if(!isNaN(quantity)) {
        const speeds = lines.shift().split(" ");
        let fasterLevel = 1;
        let fastestSpeed = 0;
        for(let i = 0; i < quantity; i++) {
            const speed = parseInt(speeds[i]);
            if(speed > fastestSpeed) {
                fastestSpeed = speed;
                if(speed < 10) {
                    fasterLevel = 1;
                } else if(speed >= 10 && speed < 20) {
                    fasterLevel = 2;
                } else {
                    fasterLevel = 3;
                }
            }
        }
        console.log(fasterLevel);
    }
}
