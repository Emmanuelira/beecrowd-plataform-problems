/*
O setor financeiro encontrou alguns problemas na entrega de um dos nossos fornecedores, a entrega dos produtos não condiz com a nota fiscal.

Seu trabalho é exibir o nome dos produtos e o nome do fornecedor, para os produtos fornecidos pelo fornecedor ‘Ajax SA’.
*/

SELECT pd.name AS name, pr.name AS name
FROM providers AS pr INNER JOIN products AS pd
ON pr.id = pd.id_providers
AND pr.name = 'Ajax SA';
