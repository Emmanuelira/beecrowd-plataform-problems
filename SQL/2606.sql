/*
Quando os dados foram migrados de Banco de Dados, houve um pequeno mal-entendido por parte do antigo DBA.

Seu chefe precisa que você exiba o código e o nome dos produtos, cuja categoria inicie com 'super'.
*/

SELECT p.id AS id, p.name AS name
FROM products AS p, categories AS c
WHERE p.id_categories = c.id
AND c.name LIKE 'super%';
