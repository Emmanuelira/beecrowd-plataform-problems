/*
O setor de vendas quer fazer uma promoção para todos os clientes que são pessoas jurídicas. Para isso você deve exibir o nome dos clientes que sejam pessoa jurídica.
*/

SELECT c.name AS name
FROM customers AS c, legal_person AS lp
WHERE c.id = lp.id_customers;
