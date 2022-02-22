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