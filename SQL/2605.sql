/*
O setor financeiro precisa de um relatório sobre os fornecedores dos produtos que vendemos. Os relatórios contemplam todas as categorias, mas por algum motivo, os fornecedores dos produtos cuja categoria é a executiva, não estão no relatório.

Seu trabalho é retornar os nomes dos produtos e dos fornecedores cujo código da categoria é 6.
*/

SELECT pd.name AS name, pv.name AS name
FROM products AS pd, providers AS pv
WHERE pd.id_providers = pv.id AND pd.id_categories = 6;
