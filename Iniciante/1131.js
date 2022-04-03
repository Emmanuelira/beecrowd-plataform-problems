const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

let rodarPrograma = true;
let vitoriasInter = 0;
let vitoriasGremio = 0;
let empates = 0;
let totalGrenais = 0;

while(rodarPrograma) {
    totalGrenais++;
    const gols = lines.shift().split(" ");
    const golsInter = parseInt(gols[0]);
    const golsGremio = parseInt(gols[1]);
    
    if(golsInter > golsGremio) {
        vitoriasInter++;
    } else if(golsInter < golsGremio) {
        vitoriasGremio++;
    } else {
        empates++;
    }
    
    console.log("Novo grenal (1-sim 2-nao)");
    const questionario = parseInt(lines.shift());
    if(questionario !== 1) {
        rodarPrograma = false;
    }
}

console.log(`${totalGrenais} grenais`);
console.log(`Inter:${vitoriasInter}`);
console.log(`Gremio:${vitoriasGremio}`);
console.log(`Empates:${empates}`);

if(vitoriasInter > vitoriasGremio) {
    console.log("Inter venceu mais")
} else if(vitoriasInter < vitoriasGremio) {
    console.log("Gremio venceu mais")
} else {
    console.log("Nao houve vencedor")
}