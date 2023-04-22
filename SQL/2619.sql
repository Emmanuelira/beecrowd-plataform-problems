/*
A nossa empresa está querendo fazer um novo contrato para o fornecimento de novos produtos superluxuosos, e para isso precisamos de alguns dados dos nossos produtos.

Seu trabalho é exibir o nome dos produtos, nome dos fornecedores e o preço, para os produtos cujo preço seja maior que 1000 e sua categoria seja ‘Super Luxury.
*/

SELECT pd.name AS name, pr.name AS name, pd.price AS price
FROM products AS pd, providers AS pr, categories AS c
WHERE pd.id_providers = pr.id
AND pd.id_categories = c.id
AND pd.price > 1000
AND c.name = 'Super Luxury';
