/*
Antigamente a locadora fez um evento em que vários filmes estavam em promoção, queremos saber que filmes eram esses.

Seu trabalho para nós ajudar é selecionar o ID e o nome dos filmes cujo preço for menor que 2.00.
*/

SELECT m.id AS id, m.name AS name
FROM movies AS m, prices AS p
WHERE m.id_prices = p.id
AND p.value < 2;
