/*
A locadora pretende fazer uma promoção para os clientes que ainda não fizeram nenhuma locação.

Seu trabalho é nos entregar o ID e o nome dos clientes que não realizaram nenhuma locação. Ordene a saída por ID.
*/

SELECT c.id AS id, c.name AS name
FROM customers AS c
WHERE NOT EXISTS (
    SELECT *
    FROM locations AS l
    WHERE c.id = l.id_customers
);
