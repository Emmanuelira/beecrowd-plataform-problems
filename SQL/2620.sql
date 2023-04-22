/*
A auditoria financeira da empresa está pedindo para nós um relatório do primeiro semestre de 2016. Então exiba o nome dos clientes e o número do pedido para os clientes que fizeram pedidos no primeiro semestre de 2016.
*/

SELECT c.name AS name, o.id AS id
FROM customers AS c INNER JOIN orders AS o
ON c.id = o.id_customers
AND o.orders_date >= '2016-01-01'
AND o.orders_date <= '2016-06-30';
