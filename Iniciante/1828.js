var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const quantity = parseInt(lines.shift());

for(let i = 1; i <= quantity; i++) {
    const values = lines.shift().split(" ");
    const sheldon = values[0];
    const raj = values[1].replace("\r", "");
    const [ victory, defeat, draw ] = [ "Bazinga!", "Raj trapaceou!", "De novo!" ];
    let result;

    if(sheldon === "pedra") {
        if(raj === "pedra") result = draw;
        else if(raj === "papel") result = defeat;
        else if(raj === "tesoura") result = victory;
        else if(raj === "lagarto") result = victory;
        else result = defeat; 
    } else if(sheldon === "papel") {
        if(raj === "pedra") result = victory;
        else if(raj === "papel") result = draw;
        else if(raj === "tesoura") result = defeat;
        else if(raj === "lagarto") result = defeat;
        else result = victory; 
    } else if(sheldon === "tesoura") {
        if(raj === "pedra") result = defeat;
        else if(raj === "papel") result = victory;
        else if(raj === "tesoura") result = draw;
        else if(raj === "lagarto") result = victory;
        else result = defeat; 
    } else if(sheldon === "lagarto") {
        if(raj === "pedra") result = defeat;
        else if(raj === "papel") result = victory;
        else if(raj === "tesoura") result = defeat;
        else if(raj === "lagarto") result = draw;
        else result = victory; 
    } else { 
        if(raj === "pedra") result = victory;
        else if(raj === "papel") result = defeat;
        else if(raj === "tesoura") result = victory;
        else if(raj === "lagarto") result = defeat;
        else result = draw; 
    }
    
    console.log(`Caso #${i}: ${result}`);
}
