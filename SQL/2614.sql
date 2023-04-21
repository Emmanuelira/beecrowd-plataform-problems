/*
A vídeo locadora está fazendo seu relatório semestral e precisa da sua ajuda. Basta você selecionar o nome dos clientes e a data de locação, das locações realizadas no mês de setembro de 2016.
*/

SELECT c.name AS name, r.rentals_date AS rentals_date
FROM customers AS c, rentals AS r
WHERE c.id = r.id_customers
AND r.rentals_date >= '2016-09-01'
AND r.rentals_date <= '2016-09-30';
