/*
Analógimôn Go! é um jogo bastante popular. Em sua jornada, o jogador percorre diversas cidades capturando pequenos monstrinhos virtuais, chamados analógimôns. Você acabou de chegar em uma cidade que contém o último analógimôn que falta para sua coleção!

A cidade pode ser descrita como um grid de N linhas e M colunas. Você está em uma dada posição da cidade, enquanto o último analógimôn está em outra posição da mesma cidade. A cada segundo, você pode se mover (exatamente) uma posição ao norte, ao sul, a leste ou a oeste. Considerando que o analógimôn não se move, sua tarefa é determinar o menor tempo necessário para ir até a posição do monstrinho.

A figura abaixo descreve o exemplo da entrada, e apresenta um caminho percorrido em 5 segundos. Outros caminhos percorridos no mesmo tempo são possíveis, mas não há outro caminho que pode ser percorrido em um tempo menor.



Entrada
A entrada contém vários casos de teste. A primeira linha de cada caso contém dois inteiros N e M (2 ≤ N, M ≤ 100), o número de linhas e de colunas na cidade, respectivamente. As próximas N linhas contém M inteiros cada, descrevendo a cidade. O inteiro 0 indica uma posição em branco; o inteiro 1 indica a sua posição na cidade; o inteiro 2 indica a posição do analógimôn na cidade. É garantido que haverá exatamente um inteiro 1 e exatamente um inteiro 2 na descrição da cidade, e que os demais inteiros serão iguais a 0.

A entrada termina com fim-de-arquivo (EOF).

Saída
Para cada caso de teste, imprima uma linha contendo o menor tempo necessário para ir até o monstrinho, em segundos.
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

while(lines.length > 0) {
    const [l, c] = lines.shift().split(' ').map(v => parseInt(v));
    if(!isNaN(l) && !isNaN(c)) {
        let myPosition;
        let analogimonPosition;
        let [me, analogimon] = [true, true];
        for(let i = 0; i < l; i++) {
            const array = lines.shift().replace('\r', '').split(' ');
            if(me) {
                const ref = array.indexOf('1');
                if(ref !== -1) myPosition = [i, ref];
            } 
            if(analogimon) {
                const ref = array.indexOf('2');
                if(ref !== -1) analogimonPosition = [i, ref];
            } 
        }
        const result = 
            Math.abs(myPosition[0] - analogimonPosition[0]) + 
            Math.abs(myPosition[1] - analogimonPosition[1]);
        console.log(result);
    }
}
