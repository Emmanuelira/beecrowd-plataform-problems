/*
O setor de vendas precisa de um relatório para saber quais produtos estão sobrando em estoque.

Para você ajudar o setor de vendas, exiba o nome do produto e o nome da categoria, para os produtos cuja quantidade seja maior que 100 e o código da categoria seja 1,2,3,6 ou 9. Mostre essas informações em ordem crescente pelo código da categoria.
*/

SELECT p.name AS name, c.name AS name 
FROM products AS p INNER JOIN categories AS c
ON p.id_categories = c.id
AND p.amount > 100 
AND c.id IN (1, 2, 3, 6, 9)
ORDER BY c.id;
