/*
O setor de importação da nossa empresa precisa de um relatório sobre a importação de produtos do nosso fornecedor Sansul.

Sua tarefa é exibir o nome dos produtos, o nome do fornecedor e o nome da categoria, para os produtos fornecidos pelo fornecedor ‘Sansul SA’ e cujo nome da categoria seja 'Imported'.
*/

SELECT pd.name AS name, pr.name AS name, c.name AS name
FROM products AS pd, providers AS pr, categories AS c
WHERE pd.id_providers = pr.id
AND pd.id_categories = c.id
AND pr.name = 'Sansul SA'
AND c.name = 'Imported';
