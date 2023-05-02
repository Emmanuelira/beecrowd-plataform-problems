/*
Ultimamente, diversas pessoas estão indo à Dra. Cláudia Café com Leite para saber se estão consumindo a quantidade recomendada diária de vitamina C. Isso tem a deixado exausta, e por isso ela lhe pediu para escrever um programa que, dado o consumo diário de alimentos ricos em vitamina C por uma pessoa, indique o quanto essa pessoa deve consumir a mais ou a menos para atingir o recomendado.

Para tal, você poderá utilizar a tabela a seguir:

Alimentos ricos em Vitamina C	Quantidade de Vitamina C
suco de laranja	120 mg
morango fresco	85 mg
mamao	85 mg
goiaba vermelha	70 mg
manga	56 mg
laranja	50 mg
brocolis	34 mg
Considere que o consumo diário recomendado de vitamina C está entre 110 mg e 130 mg, inclusive.

Entrada
Cada caso de teste é composto um inteiro T (1 ≤ T ≤ 7) indicando que a pessoa consome diariamente T alimentos entre os 7 alimentos da tabela. Em seguida, haverá T linhas com um inteiro N e um alimento (totalmente em caixa baixa e sem acentuações), indicando que a pessoa consome uma quantidade N daquele alimento. A entrada termina com T = 0.

Saída
Para cada caso de teste (T), se o consumo ultrapassou o limite recomendado, imprima "Menos X mg", em que X representa a quantidade a menos a ser consumida para atingir o limite recomendado; se o consumo não atingiu o recomendado, imprima "Mais X mg", em que X representa a quantidade a mais para atingir o recomendado; se o consumo está dentro do intervalo recomendado, imprima "X mg", em que X representa a quantidade consumida diariamente pela pessoa.
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let running = true;
const foods = {
    'suco de laranja': 120,
    'morango fresco': 85,
    'mamao': 85,
    'goiaba vermelha': 70,
    'manga': 56,
    'laranja': 50,
    'brocolis': 34
}
while(running) {
    const reference = parseInt(lines.shift());
    if(reference !== 0) {
        let total = 0;
        for(let i = 0; i < reference; i++) {
            const values = lines.shift();
            const index = values.indexOf(' ');
            const quantity = parseInt(values.slice(0, index));
            const food = foods[values.slice(index + 1).replace('\r', '')];
            total += quantity * food;
        }
        
        let result;
        if(total < 110) result = `Mais ${110 - total} mg`;
        else if(total > 130) result = `Menos ${total - 130} mg`;
        else result = `${total} mg`;

        console.log(result);
    }
    else running = false;
}
