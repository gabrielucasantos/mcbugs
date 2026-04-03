# Documento de Casos de Testes - Jornadas do Sistema McBugs

**Sistema:** McBugs - Totem de Autoatendimento
**Data:** 03/04/2026  
**Versão:** 1.0  

---

## Sumário

1. [Introdução](#introdução)
2. [Escopo](#escopo)
3. [Jornada 1 - Para Comer Aqui](#jornada-1---para-comer-aqui)
4. [Jornada 2 - Para Levar](#jornada-2---para-levar)

---

## Introdução

Este documento descreve os casos de teste funcionais em nível de jornada para o sistema **McBugs**, uma aplicação de pedidos online para fast food. O objetivo é validar os fluxos completos de experiência do usuário desde a seleção do tipo de pedido até a confirmação do pagamento.

## Escopo

Este documento cobre testes funcionais manuais para as duas jornadas principais do sistema:
- **Jornada "Para Comer Aqui"**: Fluxo completo de um cliente que deseja consumir no local
- **Jornada "Para Levar"**: Fluxo completo de um cliente que deseja levar o pedido

Cada jornada contempla:
- Seleção do tipo de pedido
- Navegação pelo menu e seleção de produtos
- Gerenciamento do carrinho
- Finalização do pedido com identificação do cliente
- Seleção da forma de pagamento
- Confirmação do pedido

**Exclusões:** Testes de performance, testes automatizados, testes de segurança e testes de integração com banco de dados.

---

## Jornada 1 - Para Comer Aqui

### **CT-JORNADA-001 - Fluxo Completo de Pedido "Para Comer Aqui" com Pagamento via PIX**

#### **Objetivo**

Validar o fluxo completo de um cliente que deseja fazer um pedido para consumir no local do restaurante, desde a seleção do tipo de pedido até a confirmação do pagamento via PIX, garantindo que todas as etapas funcionem corretamente e que as informações sejam persistidas adequadamente.

#### **Pré-Condições**

- O sistema McBugs deve estar online e acessível.
- O navegador deve estar configurado corretamente.
- Deve haver produtos cadastrados em todas as categorias (Lanches, Fritas, Bebidas, Sobremesas).
- O banco de dados deve estar operacional para criação de pedidos.
- O localStorage do navegador deve estar limpo (sem pedidos anteriores).

#### **Passos**

| **Id** | **Ação**                                                          | **Resultado Esperado**                                                                                          |
|--------|-------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| 1      | Acessar a página inicial do sistema (/)                           | A página inicial é carregada exibindo o logo McBugs, título de boas-vindas e duas opções: "Para comer aqui" e "Para levar". |
| 2      | Clicar no botão "Para comer aqui"                                 | O sistema registra o tipo de pedido como "dine-in" e redireciona para a página do menu (/menu).                |
| 3      | Verificar carregamento da página do menu                          | A página do menu é exibida com imagem hero, informações do restaurante, abas de categorias e a categoria "Lanches" ativa por padrão. |
| 4      | Visualizar produtos da categoria "Lanches"                        | São exibidos 4 produtos: Big Mock, Duplo Deploy, McMerge e McNífico Flaky, cada um com imagem, nome, descrição e preço. |
| 5      | Clicar no card do produto "Big Mock"                              | O sistema redireciona para a página de detalhes do produto (/product/big-mock).                                |
| 6      | Verificar informações do produto                                  | São exibidos: imagem grande, nome "Big Mock", preço R$ 39,90, descrição completa, lista de ingredientes e controle de quantidade (padrão: 1). |
| 7      | Clicar no botão "+" do controle de quantidade 1 vez               | A quantidade aumenta para 2 e o botão "Quero" atualiza para "Quero • R$ 79,80".                                |
| 8      | Clicar no botão "Quero • R$ 79,80"                                | O produto é adicionado ao carrinho com quantidade 2 e o sistema redireciona para o menu (/menu).               |
| 9      | Verificar indicador do carrinho                                   | A barra de carrinho aparece na parte inferior exibindo 2 itens e o total R$ 79,80.                             |
| 10     | Clicar na aba "Fritas"                                            | A categoria muda para "Fritas" e são exibidos 3 produtos: Batatas Full Stack, Batatas Refatoradas e Batatas Minificadas. |
| 11     | Clicar no card do produto "Batatas Full Stack"                    | O sistema redireciona para a página de detalhes (/product/batatas-fullstack).                                  |
| 12     | Verificar ícone do carrinho no header                             | O ícone de sacola é exibido no canto superior direito com badge mostrando "2" (quantidade de itens).           |
| 13     | Manter quantidade em 1 e clicar em "Quero • R$ 10,90"             | O produto é adicionado ao carrinho e o sistema redireciona para o menu.                                        |
| 14     | Verificar atualização do indicador do carrinho                    | A barra de carrinho exibe 3 itens e o total R$ 90,70.                                                          |
| 15     | Clicar na aba "Bebidas"                                           | A categoria muda para "Bebidas" e são exibidos 3 produtos: Coca-Crash, Fanta Warning e Água Localhost.         |
| 16     | Clicar no card do produto "Coca-Crash"                            | O sistema redireciona para a página de detalhes (/product/coca-crash).                                         |
| 17     | Clicar no botão "+" do controle de quantidade 1 vez               | A quantidade aumenta para 2 e o botão atualiza para "Quero • R$ 11,80".                                        |
| 18     | Clicar no botão "Quero • R$ 11,80"                                | O produto é adicionado ao carrinho e o sistema redireciona para o menu.                                        |
| 19     | Verificar atualização do indicador do carrinho                    | A barra de carrinho exibe 5 itens e o total R$ 102,50.                                                         |
| 20     | Clicar na barra de carrinho                                       | O sistema redireciona para a página do carrinho (/cart).                                                       |
| 21     | Verificar itens no carrinho                                       | São exibidos 3 produtos: Big Mock (qtd: 2, subtotal: R$ 79,80), Batatas Full Stack (qtd: 1, subtotal: R$ 10,90), Coca-Crash (qtd: 2, subtotal: R$ 11,80). |
| 22     | Verificar total do pedido                                         | O card de total exibe "Total do pedido: R$ 102,50".                                                            |
| 23     | Clicar no botão "+" do produto "Coca-Crash"                       | A quantidade aumenta para 3, o subtotal atualiza para R$ 17,70 e o total do pedido para R$ 108,40.             |
| 24     | Clicar no botão "-" do produto "Coca-Crash"                       | A quantidade diminui para 2, o subtotal volta para R$ 11,80 e o total do pedido para R$ 102,50.                |
| 25     | Clicar no botão "Finalizar pedido"                                | Um drawer (gaveta) é aberto na parte inferior da tela com um campo "Nome" e botões de ação.                    |
| 26     | Digitar "João Silva" no campo Nome                                | O texto é inserido corretamente no campo.                                                                      |
| 27     | Clicar no botão de confirmar no drawer                            | O pedido é criado no banco de dados, o carrinho é limpo e o sistema redireciona para /payment.                 |
| 28     | Verificar informações na página de pagamento                      | São exibidos: número do pedido (ex: #1), total R$ 102,50, título "Escolha a forma de pagamento" e 3 opções: PIX, Cartão de Débito, Cartão de Crédito. |
| 29     | Clicar na opção "PIX"                                             | O sistema atualiza a forma de pagamento do pedido para "pix" e redireciona para /payment/pix/confirm.          |
| 30     | Verificar informações na página de confirmação                    | São exibidos: número do pedido, total R$ 102,50, ícone de PIX, título "Pagamento no Balcão", descrição com instruções. |
| 31     | Verificar detalhes do pedido                                      | São exibidos: Cliente "João Silva", Tipo "Comer no local", Forma de pagamento "PIX", Data atual, lista de itens com quantidades e preços. |
| 32     | Verificar mensagem específica para "dine-in"                      | É exibida uma mensagem com ícone de localização: "Após o pagamento, aguarde ser chamado pelo número do seu pedido." |
| 33     | Verificar botão de ação                                           | O botão "Fazer Novo Pedido" está visível na parte inferior.                                                    |
| 34     | Recarregar a página (F5)                                          | A página é recarregada e todas as informações do pedido permanecem visíveis (persistência via localStorage).    |
| 35     | Clicar no botão "Fazer Novo Pedido"                               | O sistema limpa todos os dados (carrinho, tipo de pedido, pedido atual) e redireciona para a página inicial (/). |
| 36     | Verificar limpeza de dados                                        | A página inicial é exibida sem indicadores de carrinho ou pedido anterior.                                      |

#### **Resultados Esperados**

- O fluxo completo é executado sem erros ou interrupções.
- O tipo de pedido "dine-in" é registrado e mantido durante toda a jornada.
- Todos os produtos são adicionados ao carrinho com quantidades corretas.
- Os cálculos de subtotais e total do pedido estão corretos em todas as etapas.
- O pedido é criado no banco de dados com todas as informações corretas (cliente, tipo, itens, total, forma de pagamento).
- A forma de pagamento PIX é registrada corretamente.
- A mensagem específica para "Comer no local" é exibida na confirmação.
- A persistência de dados funciona corretamente (localStorage).
- A limpeza de dados ao iniciar novo pedido funciona completamente.

#### **Critérios de Aceitação**

- Todas as navegações ocorrem sem erros 404 ou 500.
- Os cálculos financeiros estão corretos com precisão de 2 casas decimais.
- O pedido criado no banco de dados contém:
  - ID único gerado automaticamente
  - Nome do cliente: "João Silva"
  - Tipo de pedido: "dine-in"
  - Forma de pagamento: "pix"
  - Status: "pending"
  - Total: R$ 102,50
  - Lista de itens com quantidades corretas
  - Data/hora de criação
- A interface é responsiva e funcional em diferentes tamanhos de tela.
- Não há vazamento de dados entre sessões (após "Fazer Novo Pedido").
- A experiência do usuário é fluida e intuitiva.

---

## Jornada 2 - Para Levar

### **CT-JORNADA-002 - Fluxo Completo de Pedido "Para Levar" com Pagamento via Cartão de Crédito**

#### **Objetivo**

Validar o fluxo completo de um cliente que deseja fazer um pedido para levar, desde a seleção do tipo de pedido até a confirmação do pagamento via Cartão de Crédito, garantindo que todas as etapas funcionem corretamente, que as informações sejam persistidas adequadamente e que a experiência seja diferenciada da jornada "Para Comer Aqui" (sem mensagem de aguardar chamada).

#### **Pré-Condições**

- O sistema McBugs deve estar online e acessível.
- O navegador deve estar configurado corretamente.
- Deve haver produtos cadastrados em todas as categorias (Lanches, Fritas, Bebidas, Sobremesas).
- O banco de dados deve estar operacional para criação de pedidos.
- O localStorage do navegador deve estar limpo (sem pedidos anteriores).

#### **Passos**

| **Id** | **Ação**                                                          | **Resultado Esperado**                                                                                          |
|--------|-------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| 1      | Acessar a página inicial do sistema (/)                           | A página inicial é carregada exibindo o logo McBugs, título de boas-vindas e duas opções: "Para comer aqui" e "Para levar". |
| 2      | Clicar no botão "Para levar"                                      | O sistema registra o tipo de pedido como "takeaway" e redireciona para a página do menu (/menu).               |
| 3      | Verificar carregamento da página do menu                          | A página do menu é exibida com imagem hero, informações do restaurante, abas de categorias e a categoria "Lanches" ativa por padrão. |
| 4      | Clicar na aba "Sobremesas"                                        | A categoria muda para "Sobremesas" e são exibidos 3 produtos: Casquinha Vanilla JS, Casquinha Dark Mode e Casquinha Pull Request. |
| 5      | Clicar no card do produto "Casquinha Dark Mode"                   | O sistema redireciona para a página de detalhes do produto (/product/casquinha-darkmode).                      |
| 6      | Verificar informações do produto                                  | São exibidos: imagem grande, nome "Casquinha Dark Mode", preço R$ 3,90, descrição completa, lista de ingredientes e controle de quantidade (padrão: 1). |
| 7      | Clicar no botão "+" do controle de quantidade 2 vezes             | A quantidade aumenta para 3 e o botão "Quero" atualiza para "Quero • R$ 11,70".                                |
| 8      | Clicar no botão "Quero • R$ 11,70"                                | O produto é adicionado ao carrinho com quantidade 3 e o sistema redireciona para o menu (/menu).               |
| 9      | Verificar indicador do carrinho                                   | A barra de carrinho aparece na parte inferior exibindo 3 itens e o total R$ 11,70.                             |
| 10     | Clicar na aba "Lanches"                                           | A categoria muda para "Lanches" e são exibidos 4 produtos de hambúrgueres.                                     |
| 11     | Clicar no card do produto "Duplo Deploy"                          | O sistema redireciona para a página de detalhes (/product/duplo-deploy).                                       |
| 12     | Verificar ícone do carrinho no header                             | O ícone de sacola é exibido no canto superior direito com badge mostrando "3" (quantidade de itens).           |
| 13     | Manter quantidade em 1 e clicar em "Quero • R$ 41,50"             | O produto é adicionado ao carrinho e o sistema redireciona para o menu.                                        |
| 14     | Verificar atualização do indicador do carrinho                    | A barra de carrinho exibe 4 itens e o total R$ 53,20.                                                          |
| 15     | Clicar no botão de voltar (seta esquerda) no menu                 | O sistema redireciona para a página inicial (/).                                                               |
| 16     | Verificar que o carrinho foi mantido                              | A página inicial é exibida e o tipo de pedido "takeaway" permanece armazenado.                                 |
| 17     | Clicar novamente no botão "Para levar"                            | O sistema mantém o tipo "takeaway" e redireciona para o menu.                                                  |
| 18     | Verificar que os itens do carrinho foram preservados              | A barra de carrinho ainda exibe 4 itens e o total R$ 53,20.                                                    |
| 19     | Clicar na aba "Bebidas"                                           | A categoria muda para "Bebidas" e são exibidos os produtos de bebidas.                                         |
| 20     | Clicar no card do produto "Água Localhost"                        | O sistema redireciona para a página de detalhes (/product/agua-localhost).                                     |
| 21     | Clicar no botão "Quero • R$ 2,90"                                 | O produto é adicionado ao carrinho e o sistema redireciona para o menu.                                        |
| 22     | Verificar atualização do indicador do carrinho                    | A barra de carrinho exibe 5 itens e o total R$ 56,10.                                                          |
| 23     | Clicar na barra de carrinho                                       | O sistema redireciona para a página do carrinho (/cart).                                                       |
| 24     | Verificar itens no carrinho                                       | São exibidos 3 produtos: Casquinha Dark Mode (qtd: 3, subtotal: R$ 11,70), Duplo Deploy (qtd: 1, subtotal: R$ 41,50), Água Localhost (qtd: 1, subtotal: R$ 2,90). |
| 25     | Verificar total do pedido                                         | O card de total exibe "Total do pedido: R$ 56,10".                                                             |
| 26     | Clicar no botão "-" do produto "Casquinha Dark Mode"              | A quantidade diminui para 2, o subtotal atualiza para R$ 7,80 e o total do pedido para R$ 52,30.               |
| 27     | Clicar no botão de remover do produto "Água Localhost"            | O produto é removido completamente do carrinho e o total atualiza para R$ 49,40.                               |
| 28     | Verificar lista atualizada de produtos                            | Apenas 2 produtos são exibidos: Casquinha Dark Mode (qtd: 2) e Duplo Deploy (qtd: 1).                          |
| 29     | Clicar no botão "Continuar comprando"                             | O sistema redireciona para o menu (/menu) mantendo os itens do carrinho.                                       |
| 30     | Verificar que o carrinho foi preservado                           | A barra de carrinho exibe 3 itens e o total R$ 49,40.                                                          |
| 31     | Clicar novamente na barra de carrinho                             | O sistema redireciona para a página do carrinho.                                                               |
| 32     | Clicar no botão "Finalizar pedido"                                | Um drawer (gaveta) é aberto na parte inferior da tela com um campo "Nome" e botões de ação.                    |
| 33     | Tentar clicar no botão de confirmar sem preencher o nome          | O sistema exibe uma mensagem de validação indicando que o nome é obrigatório e não cria o pedido.              |
| 34     | Digitar "Maria Santos" no campo Nome                              | O texto é inserido corretamente no campo.                                                                      |
| 35     | Clicar no botão de confirmar no drawer                            | O pedido é criado no banco de dados, o carrinho é limpo e o sistema redireciona para /payment.                 |
| 36     | Verificar informações na página de pagamento                      | São exibidos: número do pedido (ex: #2), total R$ 49,40, título "Escolha a forma de pagamento" e 3 opções de pagamento. |
| 37     | Clicar no botão de voltar (seta esquerda)                         | O sistema redireciona de volta para a página de pagamento (não há página anterior válida neste contexto).      |
| 38     | Clicar na opção "Cartão de Crédito"                               | O sistema atualiza a forma de pagamento do pedido para "credit" e redireciona para /payment/credit/confirm.    |
| 39     | Verificar informações na página de confirmação                    | São exibidos: número do pedido, total R$ 49,40, ícone de Cartão de Crédito, título "Pagamento no Balcão", descrição com instruções. |
| 40     | Verificar detalhes do pedido                                      | São exibidos: Cliente "Maria Santos", Tipo "Para levar", Forma de pagamento "Cartão de Crédito", Data atual, lista de itens. |
| 41     | Verificar lista de itens                                          | São exibidos: 2x Casquinha Dark Mode (R$ 7,80) e 1x Duplo Deploy (R$ 41,50).                                   |
| 42     | Verificar ausência de mensagem específica para "dine-in"          | A mensagem "Após o pagamento, aguarde ser chamado pelo número do seu pedido" NÃO deve ser exibida.             |
| 43     | Clicar no botão de voltar (seta esquerda)                         | O sistema redireciona para a página de seleção de pagamento (/payment).                                        |
| 44     | Verificar que o pedido foi mantido                                | As informações do pedido (número e total) ainda são exibidas corretamente.                                     |
| 45     | Clicar na opção "Cartão de Débito"                                | O sistema atualiza a forma de pagamento para "debit" e redireciona para /payment/debit/confirm.                |
| 46     | Verificar atualização da forma de pagamento                       | A página de confirmação agora exibe "Cartão de Débito" como forma de pagamento.                                |
| 47     | Clicar no botão de voltar novamente                               | O sistema redireciona para a página de seleção de pagamento (/payment).                                        |
| 48     | Clicar no botão "Cancelar Pedido"                                 | O sistema atualiza o status do pedido para "cancelled", limpa todos os dados e redireciona para a página inicial (/). |
| 49     | Verificar limpeza completa de dados                               | A página inicial é exibida sem indicadores de carrinho ou pedido anterior.                                      |
| 50     | Verificar que é possível iniciar um novo pedido                   | As opções "Para comer aqui" e "Para levar" estão disponíveis e funcionais.                                     |

#### **Resultados Esperados**

- O fluxo completo é executado sem erros ou interrupções.
- O tipo de pedido "takeaway" é registrado e mantido durante toda a jornada.
- Todos os produtos são adicionados ao carrinho com quantidades corretas.
- As operações de edição do carrinho (aumentar, diminuir, remover) funcionam corretamente.
- Os cálculos de subtotais e total do pedido estão corretos em todas as etapas.
- A validação do campo nome funciona corretamente (não permite finalizar sem nome).
- O pedido é criado no banco de dados com todas as informações corretas.
- A alteração da forma de pagamento funciona corretamente.
- A mensagem específica para "dine-in" NÃO é exibida para pedidos "takeaway".
- O cancelamento do pedido funciona corretamente e limpa todos os dados.
- A navegação entre páginas (voltar) funciona corretamente mantendo o estado do pedido.
- A persistência de dados funciona durante a navegação.

#### **Critérios de Aceitação**

- Todas as navegações ocorrem sem erros 404 ou 500.
- Os cálculos financeiros estão corretos com precisão de 2 casas decimais.
- O pedido criado no banco de dados contém:
  - ID único gerado automaticamente
  - Nome do cliente: "Maria Santos"
  - Tipo de pedido: "takeaway"
  - Forma de pagamento: "credit" (última selecionada antes do cancelamento)
  - Status: "cancelled" (após cancelamento)
  - Total: R$ 49,40
  - Lista de itens com quantidades corretas (2x Casquinha Dark Mode, 1x Duplo Deploy)
  - Data/hora de criação
- A validação de campos obrigatórios funciona antes de criar o pedido.
- A interface diferencia corretamente os tipos de pedido (presença/ausência de mensagem específica).
- A funcionalidade de voltar mantém o estado do pedido sem duplicações.
- A funcionalidade de cancelar limpa completamente os dados da sessão.
- Não há vazamento de dados entre sessões.
- A experiência do usuário é fluida e intuitiva.
- O sistema permite alternar entre formas de pagamento antes da confirmação final.

---

## Cenários Adicionais Cobertos nas Jornadas

### Jornada 1 - Para Comer Aqui
- Adição de múltiplos produtos de diferentes categorias
- Incremento de quantidade antes de adicionar ao carrinho
- Edição de quantidade diretamente no carrinho
- Persistência de dados ao recarregar a página
- Fluxo completo até confirmação com PIX
- Mensagem específica para consumo no local

### Jornada 2 - Para Levar
- Navegação entre páginas mantendo o carrinho
- Remoção de produtos do carrinho
- Validação de campos obrigatórios no checkout
- Alteração de forma de pagamento
- Cancelamento de pedido
- Ausência de mensagem específica para "dine-in"
- Fluxo de voltar entre páginas de pagamento

---

## Diferenças Entre as Jornadas

| **Aspecto**                          | **Para Comer Aqui (CT-JORNADA-001)**                    | **Para Levar (CT-JORNADA-002)**                         |
|--------------------------------------|--------------------------------------------------------|--------------------------------------------------------|
| **Tipo de Pedido**                   | "dine-in"                                              | "takeaway"                                             |
| **Mensagem na Confirmação**          | Exibe mensagem para aguardar ser chamado               | Não exibe mensagem de aguardar                         |
| **Forma de Pagamento Testada**       | PIX                                                    | Cartão de Crédito (com teste de alteração)            |
| **Operações no Carrinho**            | Edição de quantidade (aumentar/diminuir)               | Edição de quantidade e remoção de produto              |
| **Validação de Checkout**            | Fluxo direto com nome preenchido                       | Teste de validação sem nome + preenchimento correto    |
| **Navegação Testada**                | Fluxo linear até confirmação                           | Navegação com voltar e alteração de pagamento          |
| **Finalização**                      | Fazer novo pedido                                      | Cancelamento de pedido                                 |
| **Persistência Testada**             | Recarga de página na confirmação                       | Navegação entre páginas mantendo estado                |

---

## Observações Finais

- Ambas as jornadas cobrem o fluxo completo end-to-end do sistema McBugs.
- Os casos de teste validam tanto cenários positivos quanto validações de negócio.
- A diferenciação entre os tipos de pedido é testada através das mensagens específicas na confirmação.
- As jornadas complementam-se, cobrindo diferentes formas de pagamento e operações no carrinho.
- Recomenda-se executar ambas as jornadas em diferentes navegadores (Chrome, Firefox, Safari, Edge).
- Testes de responsividade devem ser realizados em diferentes tamanhos de tela (desktop, tablet, mobile).
- Qualquer desvio dos resultados esperados deve ser reportado como defeito com evidências (screenshots/vídeos).
- Este documento deve ser atualizado conforme novas funcionalidades são adicionadas ao sistema.

---

## Rastreabilidade

| **Caso de Teste**      | **Funcionalidades Cobertas**                                                                                     |
|------------------------|------------------------------------------------------------------------------------------------------------------|
| **CT-JORNADA-001**     | Seleção de tipo "dine-in", navegação por categorias, adição ao carrinho, edição de quantidade, checkout, pagamento PIX, confirmação com mensagem específica, persistência, novo pedido |
| **CT-JORNADA-002**     | Seleção de tipo "takeaway", navegação por categorias, adição ao carrinho, edição e remoção de itens, validação de checkout, alteração de pagamento, cancelamento, navegação com voltar |

---

**Documento elaborado em:** 03/04/2026  
**Próxima revisão:** A ser definida conforme ciclo de desenvolvimento  
**Casos de Teste Totais:** 2 jornadas completas (86 passos combinados)
