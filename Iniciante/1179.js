var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let impar = [];
let par = [];

function imprimirLista(lista, ref) {
    lista.forEach((valor, indice) => console.log(`${ref}[${indice}] = ${valor}`));
}

for(let i = 0; i < 15; i++) {
    const valor = parseInt(lines.shift());
    valor % 2 === 0 ? par.push(valor) : impar.push(valor);
    
    if(impar.length === 5) {
        imprimirLista(impar, 'impar');
        impar = [];
    } else if(par.length === 5) {
        imprimirLista(par, 'par');
        par = [];
    }
}

imprimirLista(impar, 'impar');
imprimirLista(par, 'par');
