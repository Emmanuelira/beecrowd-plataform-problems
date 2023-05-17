/*
A Universidade Tecnológica de Marte está com seu concurso aberto para Pesquisadores. Porém o computador que processava os dados dos candidatos estragou. Você deve mostrar a lista dos candidatos, contendo o nome do candidato e a sua pontuação final (com duas casas decimais após a vírgula). Lembre-se de mostrar a lista ordenada pela pontuação do candidato (maior pontuação no topo da lista).
*/

SELECT c.name, ROUND(((s.math*2 + s.specific*3 + s.project_plan*5)/10)::numeric, 2) AS avg
FROM candidate AS c
INNER JOIN score AS s ON c.id = s.candidate_id
ORDER BY avg DESC;
