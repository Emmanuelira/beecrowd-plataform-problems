const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

let valores1 = lines.shift().split(" ");
const diaInicio = parseInt(valores1[1]);

let valores2 = lines.shift().split(" ");
const horaInicio = parseInt(valores2[0])
const minutoInicio = parseInt(valores2[2])
const segundoInicio = parseInt(valores2[4])

let valores3 = lines.shift().split(" ");
const diaFim = parseInt(valores3[1]);

let valores4 = lines.shift().split(" ");
const horaFim = parseInt(valores4[0])
const minutoFim = parseInt(valores4[2])
const segundoFim = parseInt(valores4[4])