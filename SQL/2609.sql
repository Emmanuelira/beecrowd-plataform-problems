/*
Como de costume o setor de vendas está fazendo uma análise de quantos produtos temos em estoque, e você poderá ajudar eles.

Então seu trabalho será exibir o nome e a quantidade de produtos de cada uma categoria.
*/

SELECT c.name AS name, SUM(p.amount) AS sum
FROM products AS p, categories AS c
WHERE p.id_categories = c.id
GROUP BY c.name;
