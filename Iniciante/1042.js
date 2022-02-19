const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const valores = lines.shift().split(" ");
const v1 = parseInt(valores[0]);
const v2 = parseInt(valores[1]);
const v3 = parseInt(valores[2]);

const listaNormal = [v1, v2, v3];
const listaOrdenada = [v1, v2, v3].sort(function (a, b) { 
    return a - b;  
});

for(let i in listaOrdenada) {
    console.log(listaOrdenada[i]);
}
console.log("");
for(let i in listaNormal) {
    console.log(listaNormal[i]);
}