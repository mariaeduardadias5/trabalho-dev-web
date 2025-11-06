✨O que temos que fazer em php:

Requisitos Funcionais em PHP
1. Autenticação e Autorização
Cadastro de usuários (clientes e administradores)

Login e logout com controle de sessão

Recuperação de senha

Verificação de permissões (ex: admin pode cadastrar livros, cliente não)

2. Gerenciamento de Produtos (Livros)
Cadastro de livros (título, autor, descrição, preço, estoque, imagem)

Edição e exclusão de livros

Listagem de livros para exibição no front-end

Organização por categorias e filtros (gênero, autor, faixa de preço)

3. Carrinho de Compras
Adicionar livro ao carrinho

Atualizar quantidade ou remover item

Visualizar carrinho com subtotal

Persistência do carrinho via sessão ou banco de dados

4. Processo de Compra (Checkout)
Captura de dados do comprador (endereço, forma de pagamento)

Validação dos dados

Registro do pedido no banco de dados

Atualização do estoque após compra

5. Integração com Pagamento
Comunicação com APIs de pagamento (ex: PagSeguro, MercadoPago, Stripe)

Validação de transações

Registro do status do pagamento (aprovado, pendente, recusado)

6. Gerenciamento de Pedidos
Listagem de pedidos por usuário

Detalhes do pedido (itens, status, data)

Cancelamento ou reembolso (se aplicável)

7. Painel Administrativo
Gerenciar livros, categorias e usuários

Visualizar pedidos e status

Relatórios de vendas (opcional)

8. Sistema de Busca
Busca por título, autor ou palavra-chave

Filtros combinados (ex: livros de ficção abaixo de R$50)

9. Avaliações e Comentários (opcional)
Clientes podem avaliar livros comprados

Moderação de comentários por administradores

10. Segurança
Proteção contra SQL Injection e XSS

Validação de dados no back-end

Controle de acesso por tipo de usuário

Uso de HTTPS e hash de senhas (ex: bcrypt)
