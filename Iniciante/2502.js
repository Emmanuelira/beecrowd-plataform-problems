/*
A cifra mais antiga conhecida é a Cifra de César. César escrevia suas cartas trocando cada letra pela próxima do alfabeto, para evitar que, quando a carta fosse interceptada, conseguissem ler. Com o tempo, a criptografia adquiriu melhor qualidade, mas a criptografia por substituição ainda é uma brincadeira de criança interessante, por exemplo:

ZENIT
POLAR

Neste tipo de brincadeira, ao escrever uma carta a letra Z é trocada pela letra P e vice versa, bem como: E e O e assim sucessivamente. A frase cifrada desta forma: "Osro roxre osri caftide" pode ser decifrada como: "Este texto esta cifrado". Como a brincadeira ficou séria, a você foi solicitado um programa que decifre as mensagens cifradas a partir de uma chave fornecida.

Entrada
A entrada contém vários casos de teste. Cada caso de teste começa com uma linha indicando dois números inteiros C e N, 0 < C < 21 e 0 < N < 100. C é o tamanho da cifra. Nas duas linhas seguintes está a cifra de tamanho C indicando quais caracteres da primeira linha será substituído por caracteres da segunda linha, um caracter aparece uma única vez, na primeira ou na segunda linha.

A cifra pode conter letras de ‘A’ a ‘Z’, números de ‘0’ a ‘9’ além do espaço em branco e alguns símbolos de pontuação: '.' ',' ';' ':' '(' ')' '!' e '?'. Nas próximas N linhas estão frases e sentenças criptografadas pela cifra fornecida, que você deve decifrar. Cada linha contém no mínimo 1 e no máximo 1000 caracteres. São permitidos quaisquer caracteres ASCII (não extendido) imprimíveis, neste caso não estão presentes nenhum caracter acentuado, nem mesmo 'ç'.

Saída
Para cada caso de teste da entrada seu programa deve gerar para cada linha de frase e sentença de entrada, uma linha com a saída decifrada, respeitando a capitalização da letra (letras maiúsculas são decifradas como maiúsculas e minúsculas como minúsculas quando for possível aplicar a diferenciação, se não for possível serão decifrados como letras minúsculas). Após cada caso de teste deve ser impressa uma linha em branco, inclusive após o último.
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

while(lines.length > 0) {
    const [c, n] = lines.shift().split(' ').map(v => parseInt(v));
    if(!isNaN(c) && !isNaN(n)) {
        let cipher1 = lines.shift().replace('\r', '');
        let cipher2 = lines.shift().replace('\r', '');
        
        cipher1 = cipher1.toUpperCase().split('').concat(
            cipher1.toLowerCase().split('')
        );

        cipher2 = cipher2.toUpperCase().split('').concat(
            cipher2.toLowerCase().split('')
        );

        const cipher = {};
        
        for(let i = 0; i < c * 2; i++) cipher[cipher1[i]] = cipher2[i];
        for(let i = 0; i < c * 2; i++) cipher[cipher2[i]] = cipher1[i];

        for(let i = 0; i < n; i++) {
            const ref = lines.shift().split('');
            for(let j = 0; j < ref.length; j++) {
                if(cipher[ref[j]]) ref[j] = cipher[ref[j]];
            }
            console.log(ref.join(''));
        }
        console.log();
    }
}
