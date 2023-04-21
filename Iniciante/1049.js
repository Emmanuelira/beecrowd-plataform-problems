/*
Neste problema, você deverá ler 3 palavras que definem o tipo de animal possível segundo o esquema abaixo, da esquerda para a direita.  Em seguida conclua qual dos animais seguintes foi escolhido, através das três palavras fornecidas.



Entrada
A entrada contém 3 palavras, uma em cada linha, necessárias para identificar o animal segundo a figura acima, com todas as letras minúsculas.

Saída
Imprima o nome do animal correspondente à entrada fornecida.
*/

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

let tipo1 = lines.shift();
let tipo2 = lines.shift();
let tipo3 = lines.shift();

let animal;

if(tipo1 === 'vertebrado') {
    if(tipo2 === 'ave') {
        if(tipo3 === 'carnivoro') {
            animal = 'aguia'
        } else { // ONIVORO
            animal = 'pomba'
        }
    } else { // MAMIFERO
        if(tipo3 === 'onivoro') {
            animal = 'homem'
        } else { // HERBIVORO
            animal = 'vaca'
        }
    }
} else { // INVERTEBRADO    
    if(tipo2 === 'inseto') {
        if(tipo3 === 'hematofago') {
            animal = 'pulga'
        } else { // HERBIVORO
            animal = 'lagarta'
        }
    } else { // ANELIDEO
        if(tipo3 === 'hematofago') {
            animal = 'sanguessuga'
        } else { // ONIVORO
            animal = 'minhoca'
        }
    }
}

console.log(animal);
