# Documento de Casos de Testes - Sistema McBugs

**Sistema:** McBugs - Totem de Autoatendimento
**Data:** 03/04/2026  
**Versão:** 1.0  

---

## Sumário

1. [Introdução](#introdução)
2. [Escopo](#escopo)
3. [Casos de Teste - Seleção de Tipo de Pedido](#casos-de-teste---seleção-de-tipo-de-pedido)
4. [Casos de Teste - Navegação e Visualização do Menu](#casos-de-teste---navegação-e-visualização-do-menu)
5. [Casos de Teste - Detalhes do Produto](#casos-de-teste---detalhes-do-produto)
6. [Casos de Teste - Carrinho de Compras](#casos-de-teste---carrinho-de-compras)
7. [Casos de Teste - Finalização do Pedido](#casos-de-teste---finalização-do-pedido)
8. [Casos de Teste - Pagamento](#casos-de-teste---pagamento)
9. [Casos de Teste - Navegação e Rotas](#casos-de-teste---navegação-e-rotas)

---

## Introdução

Este documento descreve os casos de teste funcionais para o sistema **McBugs**, uma aplicação de pedidos online para fast food. O objetivo é garantir que todas as funcionalidades críticas do sistema estejam funcionando corretamente e atendam aos requisitos de negócio.

## Escopo

Este documento cobre testes funcionais manuais para:
- Seleção de tipo de pedido (comer no local ou para levar)
- Navegação e visualização do cardápio
- Visualização de detalhes de produtos
- Gerenciamento do carrinho de compras
- Processo de checkout e finalização de pedido
- Seleção e confirmação de forma de pagamento
- Navegação entre páginas e tratamento de erros

**Exclusões:** Testes de performance, testes automatizados, testes de segurança e testes de integração com banco de dados.

---

## Casos de Teste - Seleção de Tipo de Pedido

### **CT001 - Selecionar Tipo de Pedido "Para Comer Aqui"**

#### **Objetivo**

Validar que o usuário consegue selecionar o tipo de pedido "Para comer aqui" e é redirecionado para o menu.

#### **Pré-Condições**

- O sistema McBugs deve estar online e acessível.
- O navegador deve estar configurado corretamente.
- O usuário deve estar na página inicial (/).

#### **Passos**

| **Id** | **Ação**                                    | **Resultado Esperado**                                                      |
|--------|---------------------------------------------|-----------------------------------------------------------------------------|
| 1      | Acessar a página inicial do sistema         | A página inicial é carregada com o logo McBugs e duas opções de pedido.    |
| 2      | Visualizar as opções disponíveis            | Devem ser exibidas as opções "Para comer aqui" e "Para levar".             |
| 3      | Clicar no botão "Para comer aqui"           | O sistema registra a escolha e redireciona para a página do menu (/menu).  |
| 4      | Verificar o redirecionamento                | O usuário deve estar na página do menu com produtos disponíveis.           |

#### **Resultados Esperados**

- O tipo de pedido "dine-in" deve ser armazenado no contexto do carrinho.
- O usuário deve ser redirecionado para a página /menu.
- A escolha deve persistir durante toda a sessão de compra.

#### **Critérios de Aceitação**

- O redirecionamento ocorre sem erros.
- O tipo de pedido é mantido até a finalização do pedido.
- A interface responde de forma fluida ao clique.

---

### **CT002 - Selecionar Tipo de Pedido "Para Levar"**

#### **Objetivo**

Validar que o usuário consegue selecionar o tipo de pedido "Para levar" e é redirecionado para o menu.

#### **Pré-Condições**

- O sistema McBugs deve estar online e acessível.
- O navegador deve estar configurado corretamente.
- O usuário deve estar na página inicial (/).

#### **Passos**

| **Id** | **Ação**                                    | **Resultado Esperado**                                                      |
|--------|---------------------------------------------|-----------------------------------------------------------------------------|
| 1      | Acessar a página inicial do sistema         | A página inicial é carregada com o logo McBugs e duas opções de pedido.    |
| 2      | Visualizar as opções disponíveis            | Devem ser exibidas as opções "Para comer aqui" e "Para levar".             |
| 3      | Clicar no botão "Para levar"                | O sistema registra a escolha e redireciona para a página do menu (/menu).  |
| 4      | Verificar o redirecionamento                | O usuário deve estar na página do menu com produtos disponíveis.           |

#### **Resultados Esperados**

- O tipo de pedido "takeaway" deve ser armazenado no contexto do carrinho.
- O usuário deve ser redirecionado para a página /menu.
- A escolha deve persistir durante toda a sessão de compra.

#### **Critérios de Aceitação**

- O redirecionamento ocorre sem erros.
- O tipo de pedido é mantido até a finalização do pedido.
- A interface responde de forma fluida ao clique.

---

## Casos de Teste - Navegação e Visualização do Menu

### **CT003 - Visualizar Menu com Categoria Padrão**

#### **Objetivo**

Validar que ao acessar o menu, a categoria "Lanches" é exibida por padrão com seus respectivos produtos.

#### **Pré-Condições**

- O usuário deve ter selecionado um tipo de pedido.
- O sistema deve estar na página /menu.
- Deve haver produtos cadastrados na categoria "Lanches".

#### **Passos**

| **Id** | **Ação**                                    | **Resultado Esperado**                                                      |
|--------|---------------------------------------------|-----------------------------------------------------------------------------|
| 1      | Acessar a página do menu                    | A página do menu é carregada com a imagem hero e informações do restaurante.|
| 2      | Verificar a categoria ativa                 | A categoria "Lanches" deve estar selecionada por padrão.                   |
| 3      | Visualizar os produtos                      | Devem ser exibidos todos os produtos da categoria "Lanches".               |
| 4      | Verificar informações dos produtos          | Cada produto deve exibir imagem, nome, descrição e preço.                  |

#### **Resultados Esperados**

- A categoria "Lanches" está ativa por padrão.
- Todos os produtos de lanches são exibidos (Big Mock, Duplo Deploy, McMerge, McNífico Flaky).
- As informações dos produtos estão completas e legíveis.

#### **Critérios de Aceitação**

- A página carrega sem erros.
- Os produtos são exibidos em formato de grid responsivo.
- As imagens dos produtos são carregadas corretamente.

---

### **CT004 - Alternar Entre Categorias do Menu**

#### **Objetivo**

Validar que o usuário consegue alternar entre as diferentes categorias do menu e visualizar os produtos correspondentes.

#### **Pré-Condições**

- O usuário deve estar na página /menu.
- Devem existir produtos cadastrados em todas as categorias (Lanches, Fritas, Bebidas, Sobremesas).

#### **Passos**

| **Id** | **Ação**                                    | **Resultado Esperado**                                                      |
|--------|---------------------------------------------|-----------------------------------------------------------------------------|
| 1      | Visualizar as abas de categorias            | Devem ser exibidas 4 categorias: Lanches, Fritas, Bebidas, Sobremesas.     |
| 2      | Clicar na categoria "Fritas"                | A categoria "Fritas" fica ativa e exibe produtos de batatas fritas.        |
| 3      | Clicar na categoria "Bebidas"               | A categoria "Bebidas" fica ativa e exibe produtos de bebidas.              |
| 4      | Clicar na categoria "Sobremesas"            | A categoria "Sobremesas" fica ativa e exibe produtos de sobremesas.        |
| 5      | Retornar para categoria "Lanches"           | A categoria "Lanches" fica ativa novamente e exibe os lanches.             |

#### **Resultados Esperados**

- A troca de categoria ocorre de forma instantânea.
- Apenas os produtos da categoria selecionada são exibidos.
- A categoria ativa é visualmente destacada.

#### **Critérios de Aceitação**

- Não há delay perceptível na troca de categorias.
- Os produtos são filtrados corretamente por categoria.
- A interface mantém a consistência visual.

---

### **CT005 - Voltar para Página Inicial a Partir do Menu**

#### **Objetivo**

Validar que o usuário consegue retornar à página inicial usando o botão de voltar no menu.

#### **Pré-Condições**

- O usuário deve estar na página /menu.

#### **Passos**

| **Id** | **Ação**                                    | **Resultado Esperado**                                                      |
|--------|---------------------------------------------|-----------------------------------------------------------------------------|
| 1      | Localizar o botão de voltar (seta esquerda) | O botão deve estar visível no canto superior esquerdo.                     |
| 2      | Clicar no botão de voltar                   | O sistema redireciona para a página inicial (/).                           |
| 3      | Verificar a página inicial                  | A página inicial é exibida com as opções de tipo de pedido.                |

#### **Resultados Esperados**

- O redirecionamento ocorre sem erros.
- O usuário retorna à página inicial.
- O carrinho mantém os itens adicionados (se houver).

#### **Critérios de Aceitação**

- A navegação é fluida e sem erros.
- O estado do carrinho é preservado.

---

## Casos de Teste - Detalhes do Produto

### **CT006 - Visualizar Detalhes de um Produto**

#### **Objetivo**

Validar que ao clicar em um produto no menu, o usuário é redirecionado para a página de detalhes com todas as informações do produto.

#### **Pré-Condições**

- O usuário deve estar na página /menu.
- Deve haver produtos disponíveis para seleção.

#### **Passos**

| **Id** | **Ação**                                    | **Resultado Esperado**                                                      |
|--------|---------------------------------------------|-----------------------------------------------------------------------------|
| 1      | Selecionar um produto no menu               | O produto deve ser clicável.                                                |
| 2      | Clicar no card do produto                   | O sistema redireciona para /product/:id com os detalhes do produto.        |
| 3      | Verificar informações exibidas              | Devem ser exibidos: imagem, nome, preço, descrição e ingredientes.         |
| 4      | Verificar controle de quantidade            | Deve haver um controle para aumentar/diminuir a quantidade (padrão: 1).    |
| 5      | Verificar botão de adicionar ao carrinho    | Deve haver um botão "Quero" com o preço total calculado.                   |

#### **Resultados Esperados**

- A página de detalhes carrega todas as informações do produto.
- A imagem do produto é exibida em tamanho grande.
- Os ingredientes são listados de forma clara.
- O controle de quantidade funciona corretamente.

#### **Critérios de Aceitação**

- Todas as informações do produto são exibidas corretamente.
- A página é responsiva e funciona em diferentes tamanhos de tela.
- O preço total é atualizado conforme a quantidade selecionada.

---

### **CT007 - Aumentar Quantidade de Produto na Página de Detalhes**

#### **Objetivo**

Validar que o usuário consegue aumentar a quantidade do produto antes de adicionar ao carrinho.

#### **Pré-Condições**

- O usuário deve estar na página de detalhes de um produto (/product/:id).
- A quantidade inicial deve ser 1.

#### **Passos**

| **Id** | **Ação**                                    | **Resultado Esperado**                                                      |
|--------|---------------------------------------------|-----------------------------------------------------------------------------|
| 1      | Verificar quantidade inicial                | A quantidade exibida deve ser 1.                                            |
| 2      | Clicar no botão "+" do controle de quantidade| A quantidade aumenta para 2.                                               |
| 3      | Verificar atualização do preço total        | O preço no botão "Quero" deve ser atualizado (preço unitário × 2).         |
| 4      | Clicar novamente no botão "+"               | A quantidade aumenta para 3.                                                |
| 5      | Verificar nova atualização do preço         | O preço no botão "Quero" deve ser atualizado (preço unitário × 3).         |

#### **Resultados Esperados**

- A quantidade aumenta a cada clique no botão "+".
- O preço total é recalculado automaticamente.
- Não há limite superior para a quantidade.

#### **Critérios de Aceitação**

- O cálculo do preço total está correto.
- A interface responde imediatamente aos cliques.
- Os valores são formatados corretamente (R$ XX,XX).

---

### **CT008 - Diminuir Quantidade de Produto na Página de Detalhes**

#### **Objetivo**

Validar que o usuário consegue diminuir a quantidade do produto, respeitando o limite mínimo de 1 unidade.

#### **Pré-Condições**

- O usuário deve estar na página de detalhes de um produto (/product/:id).
- A quantidade deve ser maior que 1.

#### **Passos**

| **Id** | **Ação**                                    | **Resultado Esperado**                                                      |
|--------|---------------------------------------------|-----------------------------------------------------------------------------|
| 1      | Aumentar a quantidade para 3                | A quantidade exibida deve ser 3.                                            |
| 2      | Clicar no botão "-" do controle de quantidade| A quantidade diminui para 2.                                               |
| 3      | Verificar atualização do preço total        | O preço no botão "Quero" deve ser atualizado (preço unitário × 2).         |
| 4      | Clicar novamente no botão "-"               | A quantidade diminui para 1.                                                |
| 5      | Tentar clicar no botão "-" novamente        | A quantidade permanece em 1 (não permite valores menores que 1).           |

#### **Resultados Esperados**

- A quantidade diminui a cada clique no botão "-".
- O preço total é recalculado automaticamente.
- A quantidade mínima é 1 (não permite zero ou valores negativos).

#### **Critérios de Aceitação**

- O limite mínimo de 1 unidade é respeitado.
- O cálculo do preço total está correto.
- A interface responde imediatamente aos cliques.

---

### **CT009 - Adicionar Produto ao Carrinho a Partir da Página de Detalhes**

#### **Objetivo**

Validar que o usuário consegue adicionar um produto ao carrinho com a quantidade selecionada.

#### **Pré-Condições**

- O usuário deve estar na página de detalhes de um produto (/product/:id).
- Uma quantidade deve estar selecionada (padrão: 1).

#### **Passos**

| **Id** | **Ação**                                    | **Resultado Esperado**                                                      |
|--------|---------------------------------------------|-----------------------------------------------------------------------------|
| 1      | Selecionar a quantidade desejada            | A quantidade é ajustada conforme desejado (ex: 2 unidades).                 |
| 2      | Clicar no botão "Quero • R$ XX,XX"          | O produto é adicionado ao carrinho com a quantidade selecionada.            |
| 3      | Verificar redirecionamento                  | O sistema redireciona de volta para a página do menu (/menu).              |
| 4      | Verificar indicador do carrinho             | A barra de carrinho deve exibir a quantidade total de itens.                |

#### **Resultados Esperados**

- O produto é adicionado ao carrinho com sucesso.
- A quantidade correta é registrada.
- O usuário retorna ao menu automaticamente.
- O contador do carrinho é atualizado.

#### **Critérios de Aceitação**

- O produto aparece no carrinho com a quantidade correta.
- O preço total do carrinho é calculado corretamente.
- Não há erros durante o processo.

---

### **CT010 - Adicionar Mesmo Produto Múltiplas Vezes ao Carrinho**

#### **Objetivo**

Validar que ao adicionar o mesmo produto múltiplas vezes, o sistema incrementa a quantidade ao invés de criar entradas duplicadas.

#### **Pré-Condições**

- O usuário deve estar na página do menu (/menu).
- O produto já deve ter sido adicionado ao carrinho anteriormente.

#### **Passos**

| **Id** | **Ação**                                    | **Resultado Esperado**                                                      |
|--------|---------------------------------------------|-----------------------------------------------------------------------------|
| 1      | Adicionar produto "Big Mock" (quantidade 2) | O produto é adicionado ao carrinho com quantidade 2.                        |
| 2      | Retornar ao menu e clicar no mesmo produto  | A página de detalhes do "Big Mock" é exibida.                               |
| 3      | Selecionar quantidade 3                     | A quantidade é ajustada para 3.                                             |
| 4      | Clicar em "Quero"                           | O produto é adicionado ao carrinho.                                         |
| 5      | Acessar o carrinho                          | O carrinho deve exibir apenas 1 entrada para "Big Mock" com quantidade 5.  |

#### **Resultados Esperados**

- O sistema incrementa a quantidade do produto existente.
- Não são criadas entradas duplicadas no carrinho.
- O total é calculado corretamente (quantidade total × preço unitário).

#### **Critérios de Aceitação**

- Apenas uma entrada por produto no carrinho.
- A quantidade é somada corretamente.
- O preço total reflete a quantidade acumulada.

---

### **CT011 - Voltar ao Menu a Partir da Página de Detalhes**

#### **Objetivo**

Validar que o usuário consegue retornar ao menu sem adicionar o produto ao carrinho.

#### **Pré-Condições**

- O usuário deve estar na página de detalhes de um produto (/product/:id).

#### **Passos**

| **Id** | **Ação**                                    | **Resultado Esperado**                                                      |
|--------|---------------------------------------------|-----------------------------------------------------------------------------|
| 1      | Localizar o botão de voltar (seta esquerda) | O botão deve estar visível no canto superior esquerdo.                     |
| 2      | Clicar no botão de voltar                   | O sistema redireciona para a página do menu (/menu).                       |
| 3      | Verificar que o produto não foi adicionado  | O carrinho não deve ter sido alterado.                                      |

#### **Resultados Esperados**

- O redirecionamento ocorre sem adicionar o produto ao carrinho.
- O usuário retorna ao menu na mesma categoria que estava anteriormente.
- O estado do carrinho permanece inalterado.

#### **Critérios de Aceitação**

- A navegação é fluida e sem erros.
- O carrinho não é modificado.

---

## Casos de Teste - Carrinho de Compras

### **CT012 - Visualizar Carrinho Vazio**

#### **Objetivo**

Validar que quando o carrinho está vazio, uma mensagem apropriada é exibida ao usuário.

#### **Pré-Condições**

- O usuário deve acessar a página do carrinho (/cart).
- O carrinho não deve conter nenhum item.

#### **Passos**

| **Id** | **Ação**                                    | **Resultado Esperado**                                                      |
|--------|---------------------------------------------|-----------------------------------------------------------------------------|
| 1      | Acessar a página do carrinho                | A página do carrinho é carregada.                                           |
| 2      | Verificar mensagem exibida                  | Deve ser exibida a mensagem "Nada Encontrado Aqui".                         |
| 3      | Verificar descrição                         | Deve exibir "Seu carrinho está vazio. Adicione alguns itens deliciosos!".  |
| 4      | Verificar botão de ação                     | Deve haver um botão "Ver cardápio".                                         |
| 5      | Clicar no botão "Ver cardápio"              | O sistema redireciona para a página do menu (/menu).                       |

#### **Resultados Esperados**

- A mensagem de carrinho vazio é clara e amigável.
- O botão de ação redireciona corretamente para o menu.
- Não há erros ou elementos quebrados na página.

#### **Critérios de Aceitação**

- A interface é intuitiva e guia o usuário a adicionar produtos.
- O redirecionamento funciona corretamente.

---

### **CT013 - Visualizar Carrinho com Produtos**

#### **Objetivo**

Validar que o carrinho exibe corretamente todos os produtos adicionados com suas informações.

#### **Pré-Condições**

- O usuário deve ter adicionado pelo menos um produto ao carrinho.
- O usuário deve estar na página do carrinho (/cart).

#### **Passos**

| **Id** | **Ação**                                    | **Resultado Esperado**                                                      |
|--------|---------------------------------------------|-----------------------------------------------------------------------------|
| 1      | Acessar a página do carrinho                | A página do carrinho é carregada com os itens adicionados.                  |
| 2      | Verificar informações dos produtos          | Cada item deve exibir: imagem, nome, preço unitário e quantidade.           |
| 3      | Verificar controles de quantidade           | Cada item deve ter botões para aumentar/diminuir quantidade.                |
| 4      | Verificar botão de remover                  | Cada item deve ter um botão para remover do carrinho.                       |
| 5      | Verificar total do pedido                   | Deve ser exibido o total calculado de todos os itens.                       |

#### **Resultados Esperados**

- Todos os produtos adicionados são exibidos.
- As informações estão completas e corretas.
- O total do pedido é calculado corretamente.
- Os controles de quantidade e remoção estão visíveis.

#### **Critérios de Aceitação**

- O layout é organizado e legível.
- O cálculo do total está correto.
- Todos os controles são funcionais.

---

### **CT014 - Aumentar Quantidade de Produto no Carrinho**

#### **Objetivo**

Validar que o usuário consegue aumentar a quantidade de um produto diretamente no carrinho.

#### **Pré-Condições**

- O usuário deve estar na página do carrinho (/cart).
- Deve haver pelo menos um produto no carrinho.

#### **Passos**

| **Id** | **Ação**                                    | **Resultado Esperado**                                                      |
|--------|---------------------------------------------|-----------------------------------------------------------------------------|
| 1      | Verificar quantidade atual do produto       | A quantidade inicial deve estar visível (ex: 2 unidades).                   |
| 2      | Clicar no botão "+" do produto              | A quantidade aumenta em 1 unidade (ex: de 2 para 3).                        |
| 3      | Verificar atualização do subtotal           | O subtotal do item deve ser recalculado (preço × nova quantidade).          |
| 4      | Verificar atualização do total do pedido    | O total do pedido deve ser recalculado incluindo todos os itens.            |

#### **Resultados Esperados**

- A quantidade é incrementada corretamente.
- O subtotal do item é atualizado imediatamente.
- O total do pedido reflete a mudança.
- A atualização ocorre sem recarregar a página.

#### **Critérios de Aceitação**

- Os cálculos estão corretos.
- A interface responde instantaneamente.
- Não há limite superior para a quantidade.

---

### **CT015 - Diminuir Quantidade de Produto no Carrinho**

#### **Objetivo**

Validar que o usuário consegue diminuir a quantidade de um produto diretamente no carrinho.

#### **Pré-Condições**

- O usuário deve estar na página do carrinho (/cart).
- Deve haver pelo menos um produto com quantidade maior que 1.

#### **Passos**

| **Id** | **Ação**                                    | **Resultado Esperado**                                                      |
|--------|---------------------------------------------|-----------------------------------------------------------------------------|
| 1      | Verificar quantidade atual do produto       | A quantidade inicial deve ser maior que 1 (ex: 3 unidades).                 |
| 2      | Clicar no botão "-" do produto              | A quantidade diminui em 1 unidade (ex: de 3 para 2).                        |
| 3      | Verificar atualização do subtotal           | O subtotal do item deve ser recalculado (preço × nova quantidade).          |
| 4      | Verificar atualização do total do pedido    | O total do pedido deve ser recalculado incluindo todos os itens.            |

#### **Resultados Esperados**

- A quantidade é decrementada corretamente.
- O subtotal do item é atualizado imediatamente.
- O total do pedido reflete a mudança.
- A atualização ocorre sem recarregar a página.

#### **Critérios de Aceitação**

- Os cálculos estão corretos.
- A interface responde instantaneamente.
- A quantidade não pode ser menor que 1.

---

### **CT016 - Remover Produto do Carrinho Diminuindo Quantidade para Zero**

#### **Objetivo**

Validar que ao diminuir a quantidade de um produto para zero, ele é removido automaticamente do carrinho.

#### **Pré-Condições**

- O usuário deve estar na página do carrinho (/cart).
- Deve haver um produto com quantidade 1 no carrinho.

#### **Passos**

| **Id** | **Ação**                                    | **Resultado Esperado**                                                      |
|--------|---------------------------------------------|-----------------------------------------------------------------------------|
| 1      | Verificar produto com quantidade 1          | O produto deve estar visível com quantidade 1.                              |
| 2      | Clicar no botão "-" do produto              | O produto é removido completamente do carrinho.                             |
| 3      | Verificar lista de produtos                 | O produto não deve mais aparecer na lista.                                  |
| 4      | Verificar total do pedido                   | O total deve ser recalculado sem o produto removido.                        |

#### **Resultados Esperados**

- O produto é removido ao atingir quantidade zero.
- O total do pedido é atualizado corretamente.
- Se era o único produto, a mensagem de carrinho vazio deve ser exibida.

#### **Critérios de Aceitação**

- A remoção ocorre de forma suave.
- O cálculo do total está correto.
- A interface se adapta à remoção do item.

---

### **CT017 - Remover Produto do Carrinho Usando Botão de Remover**

#### **Objetivo**

Validar que o usuário consegue remover um produto do carrinho usando o botão específico de remoção.

#### **Pré-Condições**

- O usuário deve estar na página do carrinho (/cart).
- Deve haver pelo menos um produto no carrinho.

#### **Passos**

| **Id** | **Ação**                                    | **Resultado Esperado**                                                      |
|--------|---------------------------------------------|-----------------------------------------------------------------------------|
| 1      | Localizar o botão de remover do produto     | Cada produto deve ter um botão de remoção visível.                          |
| 2      | Clicar no botão de remover                  | O produto é removido imediatamente do carrinho.                             |
| 3      | Verificar lista de produtos                 | O produto não deve mais aparecer na lista.                                  |
| 4      | Verificar total do pedido                   | O total deve ser recalculado sem o produto removido.                        |

#### **Resultados Esperados**

- O produto é removido independentemente da quantidade.
- O total do pedido é atualizado corretamente.
- Se era o único produto, a mensagem de carrinho vazio deve ser exibida.

#### **Critérios de Aceitação**

- A remoção é instantânea.
- Não há confirmação adicional (remoção direta).
- O cálculo do total está correto.

---

### **CT018 - Continuar Comprando a Partir do Carrinho**

#### **Objetivo**

Validar que o usuário consegue retornar ao menu para adicionar mais produtos sem perder os itens do carrinho.

#### **Pré-Condições**

- O usuário deve estar na página do carrinho (/cart).
- Deve haver pelo menos um produto no carrinho.

#### **Passos**

| **Id** | **Ação**                                    | **Resultado Esperado**                                                      |
|--------|---------------------------------------------|-----------------------------------------------------------------------------|
| 1      | Localizar o botão "Continuar comprando"     | O botão deve estar visível na parte inferior da página.                     |
| 2      | Clicar no botão "Continuar comprando"       | O sistema redireciona para a página do menu (/menu).                       |
| 3      | Verificar que o carrinho foi mantido        | O indicador do carrinho deve mostrar a quantidade de itens.                 |
| 4      | Adicionar um novo produto                   | O novo produto deve ser adicionado aos itens existentes.                    |
| 5      | Retornar ao carrinho                        | Todos os produtos (antigos e novos) devem estar presentes.                  |

#### **Resultados Esperados**

- O redirecionamento ocorre sem limpar o carrinho.
- Os itens anteriores são preservados.
- Novos itens podem ser adicionados normalmente.

#### **Critérios de Aceitação**

- O estado do carrinho persiste durante a navegação.
- A experiência de compra é fluida.

---

## Casos de Teste - Finalização do Pedido

### **CT019 - Abrir Drawer de Checkout**

#### **Objetivo**

Validar que ao clicar em "Finalizar pedido", o drawer de checkout é exibido corretamente.

#### **Pré-Condições**

- O usuário deve estar na página do carrinho (/cart).
- Deve haver pelo menos um produto no carrinho.

#### **Passos**

| **Id** | **Ação**                                    | **Resultado Esperado**                                                      |
|--------|---------------------------------------------|-----------------------------------------------------------------------------|
| 1      | Localizar o botão "Finalizar pedido"        | O botão deve estar visível na parte inferior da página.                     |
| 2      | Clicar no botão "Finalizar pedido"          | Um drawer (gaveta) é aberto na parte inferior da tela.                      |
| 3      | Verificar conteúdo do drawer                | Deve haver um campo para inserir o nome do cliente.                         |
| 4      | Verificar botões de ação                    | Devem estar presentes botões para confirmar ou cancelar.                    |

#### **Resultados Esperados**

- O drawer abre de forma suave com animação.
- O campo de nome está vazio e pronto para entrada.
- Os botões de ação estão claramente visíveis.

#### **Critérios de Aceitação**

- A interface do drawer é intuitiva.
- O foco é direcionado automaticamente para o campo de nome.
- É possível fechar o drawer sem finalizar.

---

### **CT020 - Finalizar Pedido com Nome Válido**

#### **Objetivo**

Validar que o usuário consegue finalizar o pedido informando um nome válido.

#### **Pré-Condições**

- O usuário deve estar na página do carrinho (/cart).
- Deve haver pelo menos um produto no carrinho.
- O drawer de checkout deve estar aberto.

#### **Passos**

| **Id** | **Ação**                                    | **Resultado Esperado**                                                      |
|--------|---------------------------------------------|-----------------------------------------------------------------------------|
| 1      | Clicar no campo "Nome"                      | O campo fica em foco e pronto para digitação.                               |
| 2      | Digitar um nome válido (ex: "João Silva")   | O texto é inserido corretamente no campo.                                   |
| 3      | Clicar no botão de confirmar                | O pedido é criado no sistema.                                               |
| 4      | Verificar redirecionamento                  | O sistema redireciona para a página de pagamento (/payment).                |
| 5      | Verificar que o carrinho foi limpo          | Os itens do carrinho devem ser transferidos para o pedido.                  |

#### **Resultados Esperados**

- O pedido é criado com sucesso no banco de dados.
- Um ID de pedido é gerado.
- O usuário é redirecionado para selecionar a forma de pagamento.
- O carrinho é esvaziado após a criação do pedido.

#### **Critérios de Aceitação**

- O nome do cliente é armazenado corretamente.
- O pedido contém todos os itens do carrinho.
- O total do pedido está correto.
- O tipo de pedido (dine-in/takeaway) é preservado.

---

### **CT021 - Tentar Finalizar Pedido sem Informar Nome**

#### **Objetivo**

Validar que o sistema impede a finalização do pedido quando o campo de nome está vazio.

#### **Pré-Condições**

- O usuário deve estar na página do carrinho (/cart).
- Deve haver pelo menos um produto no carrinho.
- O drawer de checkout deve estar aberto.

#### **Passos**

| **Id** | **Ação**                                    | **Resultado Esperado**                                                      |
|--------|---------------------------------------------|-----------------------------------------------------------------------------|
| 1      | Deixar o campo "Nome" vazio                 | O campo permanece sem texto.                                                |
| 2      | Clicar no botão de confirmar                | O sistema exibe uma mensagem de validação.                                  |
| 3      | Verificar que o pedido não foi criado       | O usuário permanece no drawer de checkout.                                  |
| 4      | Verificar mensagem de erro                  | Deve ser exibida uma mensagem indicando que o nome é obrigatório.           |

#### **Resultados Esperados**

- O sistema valida o campo obrigatório.
- Uma mensagem de erro clara é exibida.
- O pedido não é criado.
- O usuário permanece na mesma tela para corrigir.

#### **Critérios de Aceitação**

- A validação ocorre antes de tentar criar o pedido.
- A mensagem de erro é clara e específica.
- O foco retorna ao campo de nome.

---

### **CT022 - Cancelar Finalização do Pedido**

#### **Objetivo**

Validar que o usuário consegue cancelar o processo de finalização e retornar ao carrinho.

#### **Pré-Condições**

- O usuário deve estar na página do carrinho (/cart).
- O drawer de checkout deve estar aberto.

#### **Passos**

| **Id** | **Ação**                                    | **Resultado Esperado**                                                      |
|--------|---------------------------------------------|-----------------------------------------------------------------------------|
| 1      | Localizar opção de cancelar/fechar         | Deve haver um botão ou ícone para fechar o drawer.                          |
| 2      | Clicar na opção de cancelar                 | O drawer é fechado.                                                         |
| 3      | Verificar que permanece no carrinho         | O usuário continua na página do carrinho com os itens preservados.          |
| 4      | Verificar que nenhum pedido foi criado      | Nenhuma alteração foi feita no sistema.                                     |

#### **Resultados Esperados**

- O drawer fecha de forma suave.
- Os itens do carrinho são mantidos.
- Nenhum pedido é criado no sistema.
- O usuário pode tentar finalizar novamente.

#### **Critérios de Aceitação**

- A ação de cancelar é intuitiva.
- Não há perda de dados do carrinho.

---

## Casos de Teste - Pagamento

### **CT023 - Visualizar Opções de Pagamento**

#### **Objetivo**

Validar que após finalizar o pedido, o usuário visualiza todas as opções de pagamento disponíveis.

#### **Pré-Condições**

- O usuário deve ter finalizado um pedido com sucesso.
- O usuário deve estar na página de pagamento (/payment).

#### **Passos**

| **Id** | **Ação**                                    | **Resultado Esperado**                                                      |
|--------|---------------------------------------------|-----------------------------------------------------------------------------|
| 1      | Verificar informações do pedido             | Devem ser exibidos: número do pedido e total.                               |
| 2      | Verificar título da seção                   | Deve exibir "Escolha a forma de pagamento".                                 |
| 3      | Verificar opções disponíveis                | Devem ser exibidas 3 opções: PIX, Cartão de Débito, Cartão de Crédito.     |
| 4      | Verificar informações de cada opção         | Cada opção deve ter ícone, nome e descrição.                                |
| 5      | Verificar botão de cancelar pedido          | Deve haver um botão para cancelar o pedido.                                 |

#### **Resultados Esperados**

- Todas as formas de pagamento são exibidas claramente.
- As informações do pedido estão corretas.
- A interface é intuitiva e organizada.

#### **Critérios de Aceitação**

- As 3 formas de pagamento estão disponíveis.
- Cada opção é clicável.
- O número do pedido e total estão corretos.

---

### **CT024 - Selecionar Pagamento via PIX**

#### **Objetivo**

Validar que o usuário consegue selecionar PIX como forma de pagamento.

#### **Pré-Condições**

- O usuário deve estar na página de pagamento (/payment).
- Deve haver um pedido ativo.

#### **Passos**

| **Id** | **Ação**                                    | **Resultado Esperado**                                                      |
|--------|---------------------------------------------|-----------------------------------------------------------------------------|
| 1      | Localizar a opção "PIX"                     | A opção PIX deve estar visível com ícone de QR Code.                        |
| 2      | Clicar na opção "PIX"                       | O sistema registra a forma de pagamento selecionada.                        |
| 3      | Verificar redirecionamento                  | O sistema redireciona para /payment/pix/confirm.                           |
| 4      | Verificar atualização do pedido             | A forma de pagamento do pedido deve ser atualizada para "pix".              |

#### **Resultados Esperados**

- A seleção é registrada no banco de dados.
- O redirecionamento ocorre corretamente.
- A página de confirmação exibe informações do pagamento via PIX.

#### **Critérios de Aceitação**

- A forma de pagamento é atualizada no pedido.
- O redirecionamento é imediato.
- Não há erros durante o processo.

---

### **CT025 - Selecionar Pagamento via Cartão de Débito**

#### **Objetivo**

Validar que o usuário consegue selecionar Cartão de Débito como forma de pagamento.

#### **Pré-Condições**

- O usuário deve estar na página de pagamento (/payment).
- Deve haver um pedido ativo.

#### **Passos**

| **Id** | **Ação**                                    | **Resultado Esperado**                                                      |
|--------|---------------------------------------------|-----------------------------------------------------------------------------|
| 1      | Localizar a opção "Cartão de Débito"        | A opção deve estar visível com ícone de cartão.                             |
| 2      | Clicar na opção "Cartão de Débito"          | O sistema registra a forma de pagamento selecionada.                        |
| 3      | Verificar redirecionamento                  | O sistema redireciona para /payment/debit/confirm.                         |
| 4      | Verificar atualização do pedido             | A forma de pagamento do pedido deve ser atualizada para "debit".            |

#### **Resultados Esperados**

- A seleção é registrada no banco de dados.
- O redirecionamento ocorre corretamente.
- A página de confirmação exibe informações do pagamento via débito.

#### **Critérios de Aceitação**

- A forma de pagamento é atualizada no pedido.
- O redirecionamento é imediato.
- Não há erros durante o processo.

---

### **CT026 - Selecionar Pagamento via Cartão de Crédito**

#### **Objetivo**

Validar que o usuário consegue selecionar Cartão de Crédito como forma de pagamento.

#### **Pré-Condições**

- O usuário deve estar na página de pagamento (/payment).
- Deve haver um pedido ativo.

#### **Passos**

| **Id** | **Ação**                                    | **Resultado Esperado**                                                      |
|--------|---------------------------------------------|-----------------------------------------------------------------------------|
| 1      | Localizar a opção "Cartão de Crédito"       | A opção deve estar visível com ícone de cartão.                             |
| 2      | Clicar na opção "Cartão de Crédito"         | O sistema registra a forma de pagamento selecionada.                        |
| 3      | Verificar redirecionamento                  | O sistema redireciona para /payment/credit/confirm.                        |
| 4      | Verificar atualização do pedido             | A forma de pagamento do pedido deve ser atualizada para "credit".           |

#### **Resultados Esperados**

- A seleção é registrada no banco de dados.
- O redirecionamento ocorre corretamente.
- A página de confirmação exibe informações do pagamento via crédito.

#### **Critérios de Aceitação**

- A forma de pagamento é atualizada no pedido.
- O redirecionamento é imediato.
- Não há erros durante o processo.

---

### **CT027 - Cancelar Pedido na Página de Pagamento**

#### **Objetivo**

Validar que o usuário consegue cancelar o pedido antes de confirmar o pagamento.

#### **Pré-Condições**

- O usuário deve estar na página de pagamento (/payment).
- Deve haver um pedido ativo.

#### **Passos**

| **Id** | **Ação**                                    | **Resultado Esperado**                                                      |
|--------|---------------------------------------------|-----------------------------------------------------------------------------|
| 1      | Localizar o botão "Cancelar Pedido"         | O botão deve estar visível na parte inferior da página.                     |
| 2      | Clicar no botão "Cancelar Pedido"           | O sistema atualiza o status do pedido para "cancelled".                     |
| 3      | Verificar redirecionamento                  | O sistema redireciona para a página inicial (/).                           |
| 4      | Verificar limpeza de dados                  | O carrinho e o pedido atual devem ser limpos.                               |

#### **Resultados Esperados**

- O pedido é marcado como cancelado no banco de dados.
- Todos os dados da sessão são limpos (carrinho, tipo de pedido, pedido atual).
- O usuário retorna à página inicial para começar um novo pedido.

#### **Critérios de Aceitação**

- O cancelamento é processado corretamente.
- Não há resíduos de dados da sessão anterior.
- O usuário pode iniciar um novo pedido normalmente.

---

### **CT028 - Visualizar Confirmação de Pagamento**

#### **Objetivo**

Validar que após selecionar uma forma de pagamento, a página de confirmação exibe todas as informações corretas.

#### **Pré-Condições**

- O usuário deve ter selecionado uma forma de pagamento.
- O usuário deve estar na página /payment/:method/confirm.

#### **Passos**

| **Id** | **Ação**                                    | **Resultado Esperado**                                                      |
|--------|---------------------------------------------|-----------------------------------------------------------------------------|
| 1      | Verificar informações do pedido             | Devem ser exibidos: número do pedido, total, cliente, tipo e data.          |
| 2      | Verificar forma de pagamento selecionada    | Deve exibir o nome e ícone da forma de pagamento escolhida.                 |
| 3      | Verificar instruções de pagamento           | Deve exibir "Pagamento no Balcão" com instruções claras.                    |
| 4      | Verificar lista de itens do pedido          | Todos os itens devem estar listados com quantidades e preços.              |
| 5      | Verificar botão de ação                     | Deve haver um botão "Fazer Novo Pedido".                                    |

#### **Resultados Esperados**

- Todas as informações do pedido estão corretas e completas.
- A forma de pagamento selecionada é exibida claramente.
- Os itens do pedido correspondem ao que foi adicionado ao carrinho.
- O total está correto.

#### **Critérios de Aceitação**

- As informações são apresentadas de forma organizada.
- Não há discrepâncias nos valores.
- A interface é clara e profissional.

---

### **CT029 - Visualizar Mensagem Específica para Pedido "Comer no Local"**

#### **Objetivo**

Validar que quando o tipo de pedido é "comer no local", uma mensagem específica é exibida na confirmação.

#### **Pré-Condições**

- O usuário deve ter selecionado "Para comer aqui" no início.
- O usuário deve estar na página de confirmação de pagamento.

#### **Passos**

| **Id** | **Ação**                                    | **Resultado Esperado**                                                      |
|--------|---------------------------------------------|-----------------------------------------------------------------------------|
| 1      | Verificar tipo de pedido                    | O tipo deve ser exibido como "Comer no local".                              |
| 2      | Verificar mensagem adicional                | Deve exibir mensagem com ícone de localização.                              |
| 3      | Ler conteúdo da mensagem                    | Deve informar: "Após o pagamento, aguarde ser chamado pelo número do seu pedido."|

#### **Resultados Esperados**

- A mensagem específica para "dine-in" é exibida.
- O ícone de localização está presente.
- A mensagem orienta o cliente sobre o próximo passo.

#### **Critérios de Aceitação**

- A mensagem só aparece para pedidos "dine-in".
- O conteúdo é claro e útil para o cliente.

---

### **CT030 - Não Exibir Mensagem Específica para Pedido "Para Levar"**

#### **Objetivo**

Validar que quando o tipo de pedido é "para levar", a mensagem específica de "dine-in" não é exibida.

#### **Pré-Condições**

- O usuário deve ter selecionado "Para levar" no início.
- O usuário deve estar na página de confirmação de pagamento.

#### **Passos**

| **Id** | **Ação**                                    | **Resultado Esperado**                                                      |
|--------|---------------------------------------------|-----------------------------------------------------------------------------|
| 1      | Verificar tipo de pedido                    | O tipo deve ser exibido como "Para levar".                                  |
| 2      | Verificar ausência de mensagem adicional    | A mensagem sobre aguardar ser chamado NÃO deve ser exibida.                 |

#### **Resultados Esperados**

- A mensagem específica de "dine-in" não aparece.
- A página exibe apenas as informações gerais do pedido.

#### **Critérios de Aceitação**

- A lógica condicional funciona corretamente.
- A interface se adapta ao tipo de pedido.

---

### **CT031 - Iniciar Novo Pedido Após Confirmação**

#### **Objetivo**

Validar que o usuário consegue iniciar um novo pedido após confirmar o pagamento.

#### **Pré-Condições**

- O usuário deve estar na página de confirmação de pagamento.
- Um pedido deve ter sido finalizado.

#### **Passos**

| **Id** | **Ação**                                    | **Resultado Esperado**                                                      |
|--------|---------------------------------------------|-----------------------------------------------------------------------------|
| 1      | Localizar o botão "Fazer Novo Pedido"       | O botão deve estar visível na parte inferior da página.                     |
| 2      | Clicar no botão "Fazer Novo Pedido"         | O sistema limpa todos os dados da sessão anterior.                          |
| 3      | Verificar redirecionamento                  | O sistema redireciona para a página inicial (/).                           |
| 4      | Verificar limpeza de dados                  | Carrinho, tipo de pedido e pedido atual devem estar vazios.                 |
| 5      | Iniciar um novo pedido                      | O usuário deve conseguir selecionar tipo de pedido normalmente.             |

#### **Resultados Esperados**

- Todos os dados da sessão anterior são limpos.
- O usuário retorna à página inicial.
- É possível iniciar um novo pedido sem interferências.

#### **Critérios de Aceitação**

- Não há resíduos de dados do pedido anterior.
- O fluxo de novo pedido funciona normalmente.
- O localStorage é limpo corretamente.

---

### **CT032 - Voltar para Seleção de Pagamento a Partir da Confirmação**

#### **Objetivo**

Validar que o usuário consegue voltar para a página de seleção de pagamento caso queira alterar a forma de pagamento.

#### **Pré-Condições**

- O usuário deve estar na página de confirmação de pagamento (/payment/:method/confirm).

#### **Passos**

| **Id** | **Ação**                                    | **Resultado Esperado**                                                      |
|--------|---------------------------------------------|-----------------------------------------------------------------------------|
| 1      | Localizar o botão de voltar (seta esquerda) | O botão deve estar visível no canto superior esquerdo.                     |
| 2      | Clicar no botão de voltar                   | O sistema redireciona para a página de pagamento (/payment).               |
| 3      | Verificar que o pedido foi mantido          | As informações do pedido devem estar preservadas.                           |
| 4      | Selecionar outra forma de pagamento         | O usuário deve conseguir escolher uma forma diferente.                      |

#### **Resultados Esperados**

- O redirecionamento ocorre sem perder dados do pedido.
- O usuário pode alterar a forma de pagamento.
- Todas as opções de pagamento continuam disponíveis.

#### **Critérios de Aceitação**

- A navegação é fluida.
- O pedido não é duplicado ou perdido.
- A alteração da forma de pagamento é registrada corretamente.

---

## Casos de Teste - Navegação e Rotas

### **CT033 - Acessar Rota Inexistente**

#### **Objetivo**

Validar que ao acessar uma rota que não existe, o sistema exibe uma página de erro 404.

#### **Pré-Condições**

- O sistema deve estar online.
- O usuário deve tentar acessar uma URL inválida.

#### **Passos**

| **Id** | **Ação**                                    | **Resultado Esperado**                                                      |
|--------|---------------------------------------------|-----------------------------------------------------------------------------|
| 1      | Digitar uma URL inexistente (ex: /xyz123)   | O sistema carrega a página de erro 404.                                     |
| 2      | Verificar mensagem de erro                  | Deve ser exibida uma mensagem indicando que a página não foi encontrada.    |
| 3      | Verificar opções de navegação               | Deve haver um link ou botão para retornar à página inicial.                 |

#### **Resultados Esperados**

- A página 404 é exibida corretamente.
- A mensagem de erro é clara e amigável.
- O usuário tem opção de retornar à navegação normal.

#### **Critérios de Aceitação**

- O sistema não quebra ao acessar rotas inválidas.
- A página 404 segue o design do sistema.
- A navegação de retorno funciona corretamente.

---

### **CT034 - Acessar Página de Detalhes com ID de Produto Inválido**

#### **Objetivo**

Validar o comportamento do sistema ao tentar acessar a página de detalhes de um produto que não existe.

#### **Pré-Condições**

- O sistema deve estar online.
- O usuário deve tentar acessar /product/:id com um ID inexistente.

#### **Passos**

| **Id** | **Ação**                                    | **Resultado Esperado**                                                      |
|--------|---------------------------------------------|-----------------------------------------------------------------------------|
| 1      | Acessar URL com ID inválido (ex: /product/xyz)| O sistema carrega a página de detalhes.                                   |
| 2      | Verificar mensagem exibida                  | Deve ser exibida a mensagem "Produto não encontrado".                       |
| 3      | Verificar opções de navegação               | O usuário deve ter opção de retornar ao menu.                               |

#### **Resultados Esperados**

- O sistema não quebra ao receber ID inválido.
- Uma mensagem clara é exibida.
- O usuário pode retornar à navegação normal.

#### **Critérios de Aceitação**

- Não há erros de JavaScript no console.
- A mensagem é amigável e informativa.
- A navegação de retorno funciona.

---

### **CT035 - Acessar Página de Pagamento sem Pedido Ativo**

#### **Objetivo**

Validar que o sistema redireciona o usuário quando tenta acessar a página de pagamento sem ter um pedido ativo.

#### **Pré-Condições**

- O usuário não deve ter um pedido ativo.
- O usuário tenta acessar diretamente /payment.

#### **Passos**

| **Id** | **Ação**                                    | **Resultado Esperado**                                                      |
|--------|---------------------------------------------|-----------------------------------------------------------------------------|
| 1      | Acessar diretamente a URL /payment          | O sistema detecta ausência de pedido ativo.                                 |
| 2      | Verificar redirecionamento                  | O sistema redireciona automaticamente para a página inicial (/).           |

#### **Resultados Esperados**

- O redirecionamento é automático e imediato.
- O usuário não consegue acessar a página de pagamento sem pedido.
- Não há erros durante o processo.

#### **Critérios de Aceitação**

- A validação de pedido ativo funciona corretamente.
- O redirecionamento protege o fluxo de negócio.

---

### **CT036 - Acessar Página de Confirmação sem Pedido Ativo**

#### **Objetivo**

Validar que o sistema redireciona o usuário quando tenta acessar a página de confirmação sem ter um pedido ativo.

#### **Pré-Condições**

- O usuário não deve ter um pedido ativo.
- O usuário tenta acessar diretamente /payment/:method/confirm.

#### **Passos**

| **Id** | **Ação**                                    | **Resultado Esperado**                                                      |
|--------|---------------------------------------------|-----------------------------------------------------------------------------|
| 1      | Acessar diretamente a URL /payment/pix/confirm| O sistema detecta ausência de pedido ativo.                               |
| 2      | Verificar redirecionamento                  | O sistema redireciona automaticamente para /payment.                       |

#### **Resultados Esperados**

- O redirecionamento é automático e imediato.
- O usuário não consegue acessar a confirmação sem pedido.
- Não há erros durante o processo.

#### **Critérios de Aceitação**

- A validação de pedido ativo funciona corretamente.
- O redirecionamento protege o fluxo de negócio.

---

### **CT037 - Persistência do Carrinho ao Recarregar a Página**

#### **Objetivo**

Validar que os itens do carrinho são mantidos mesmo após recarregar a página do navegador.

#### **Pré-Condições**

- O usuário deve ter adicionado pelo menos um produto ao carrinho.
- O usuário deve estar em qualquer página do sistema.

#### **Passos**

| **Id** | **Ação**                                    | **Resultado Esperado**                                                      |
|--------|---------------------------------------------|-----------------------------------------------------------------------------|
| 1      | Adicionar produtos ao carrinho              | Os produtos são adicionados com sucesso.                                    |
| 2      | Verificar indicador do carrinho             | O contador exibe a quantidade correta de itens.                             |
| 3      | Recarregar a página (F5 ou Ctrl+R)          | A página é recarregada.                                                     |
| 4      | Verificar indicador do carrinho             | O contador ainda exibe a mesma quantidade de itens.                         |
| 5      | Acessar a página do carrinho                | Todos os produtos adicionados anteriormente estão presentes.                |

#### **Resultados Esperados**

- Os itens do carrinho são persistidos no localStorage.
- Após recarregar, todos os dados são recuperados corretamente.
- Quantidades e produtos são mantidos.

#### **Critérios de Aceitação**

- A persistência funciona em todas as páginas.
- Não há perda de dados ao recarregar.
- O total do carrinho permanece correto.

---

### **CT038 - Persistência do Tipo de Pedido ao Recarregar a Página**

#### **Objetivo**

Validar que o tipo de pedido selecionado é mantido mesmo após recarregar a página.

#### **Pré-Condições**

- O usuário deve ter selecionado um tipo de pedido (dine-in ou takeaway).
- O usuário deve ter avançado para o menu ou além.

#### **Passos**

| **Id** | **Ação**                                    | **Resultado Esperado**                                                      |
|--------|---------------------------------------------|-----------------------------------------------------------------------------|
| 1      | Selecionar "Para comer aqui"                | O tipo de pedido é registrado como "dine-in".                               |
| 2      | Navegar para o menu                         | O menu é exibido normalmente.                                               |
| 3      | Recarregar a página (F5 ou Ctrl+R)          | A página é recarregada.                                                     |
| 4      | Finalizar um pedido                         | O sistema deve usar o tipo "dine-in" armazenado.                            |
| 5      | Verificar na confirmação                    | O tipo de pedido exibido deve ser "Comer no local".                         |

#### **Resultados Esperados**

- O tipo de pedido é persistido no localStorage.
- Após recarregar, o tipo correto é recuperado.
- O pedido final reflete a escolha inicial.

#### **Critérios de Aceitação**

- A persistência funciona corretamente.
- Não há necessidade de reselecionar o tipo de pedido.

---

### **CT039 - Persistência do Pedido Atual ao Recarregar a Página**

#### **Objetivo**

Validar que um pedido em andamento é mantido mesmo após recarregar a página.

#### **Pré-Condições**

- O usuário deve ter finalizado o checkout e criado um pedido.
- O usuário deve estar na página de pagamento ou confirmação.

#### **Passos**

| **Id** | **Ação**                                    | **Resultado Esperado**                                                      |
|--------|---------------------------------------------|-----------------------------------------------------------------------------|
| 1      | Criar um pedido através do checkout         | O pedido é criado com sucesso.                                              |
| 2      | Navegar para a página de pagamento          | A página de pagamento exibe o pedido.                                       |
| 3      | Recarregar a página (F5 ou Ctrl+R)          | A página é recarregada.                                                     |
| 4      | Verificar informações do pedido             | Todas as informações do pedido ainda estão presentes.                       |
| 5      | Continuar o fluxo de pagamento              | O usuário pode selecionar forma de pagamento normalmente.                   |

#### **Resultados Esperados**

- O pedido atual é persistido no localStorage.
- Após recarregar, todos os dados do pedido são recuperados.
- O fluxo de pagamento pode continuar normalmente.

#### **Critérios de Aceitação**

- Não há perda de dados do pedido.
- O ID do pedido é mantido.
- O total e itens são preservados.

---

### **CT040 - Visualizar Indicador de Carrinho no Menu**

#### **Objetivo**

Validar que o indicador de carrinho é exibido corretamente no menu quando há itens adicionados.

#### **Pré-Condições**

- O usuário deve estar na página do menu (/menu).
- Deve haver pelo menos um item no carrinho.

#### **Passos**

| **Id** | **Ação**                                    | **Resultado Esperado**                                                      |
|--------|---------------------------------------------|-----------------------------------------------------------------------------|
| 1      | Adicionar um produto ao carrinho            | O produto é adicionado com sucesso.                                         |
| 2      | Retornar ao menu                            | O menu é exibido.                                                           |
| 3      | Localizar a barra de carrinho               | Deve haver uma barra fixa na parte inferior da tela.                        |
| 4      | Verificar informações exibidas              | Devem ser exibidos: quantidade de itens e total do carrinho.                |
| 5      | Clicar na barra de carrinho                 | O sistema redireciona para a página do carrinho (/cart).                   |

#### **Resultados Esperados**

- A barra de carrinho é visível e fixa na parte inferior.
- A quantidade de itens está correta.
- O total do carrinho está correto.
- O clique redireciona para o carrinho.

#### **Critérios de Aceitação**

- A barra não obstrui o conteúdo principal.
- As informações são atualizadas em tempo real.
- O design é consistente com o resto da aplicação.

---

### **CT041 - Visualizar Indicador de Carrinho na Página de Detalhes**

#### **Objetivo**

Validar que o indicador de carrinho é exibido na página de detalhes do produto quando há itens no carrinho.

#### **Pré-Condições**

- O usuário deve estar na página de detalhes de um produto (/product/:id).
- Deve haver pelo menos um item no carrinho.

#### **Passos**

| **Id** | **Ação**                                    | **Resultado Esperado**                                                      |
|--------|---------------------------------------------|-----------------------------------------------------------------------------|
| 1      | Adicionar um produto ao carrinho            | O produto é adicionado com sucesso.                                         |
| 2      | Acessar detalhes de outro produto           | A página de detalhes é exibida.                                             |
| 3      | Localizar o ícone do carrinho               | Deve haver um ícone de sacola no canto superior direito.                    |
| 4      | Verificar badge de quantidade               | Deve exibir um badge com a quantidade total de itens.                       |
| 5      | Clicar no ícone do carrinho                 | O sistema redireciona para a página do carrinho (/cart).                   |

#### **Resultados Esperados**

- O ícone do carrinho é visível no header.
- O badge exibe a quantidade correta.
- O clique redireciona para o carrinho.

#### **Critérios de Aceitação**

- O badge é visualmente destacado.
- A quantidade é atualizada em tempo real.
- O ícone é facilmente identificável.

---

### **CT042 - Não Exibir Indicador de Carrinho Quando Vazio**

#### **Objetivo**

Validar que o indicador de carrinho não é exibido quando não há itens no carrinho.

#### **Pré-Condições**

- O usuário deve estar no menu ou página de detalhes.
- O carrinho deve estar vazio.

#### **Passos**

| **Id** | **Ação**                                    | **Resultado Esperado**                                                      |
|--------|---------------------------------------------|-----------------------------------------------------------------------------|
| 1      | Acessar o menu sem itens no carrinho        | O menu é exibido normalmente.                                               |
| 2      | Verificar ausência da barra de carrinho     | A barra de carrinho não deve ser exibida na parte inferior.                 |
| 3      | Acessar detalhes de um produto              | A página de detalhes é exibida.                                             |
| 4      | Verificar ausência do ícone de carrinho     | O ícone de carrinho não deve ser exibido no header.                         |

#### **Resultados Esperados**

- Quando o carrinho está vazio, os indicadores não são exibidos.
- A interface fica mais limpa sem elementos desnecessários.

#### **Critérios de Aceitação**

- A lógica condicional funciona corretamente.
- Não há elementos vazios ou quebrados na tela.

---

### **CT043 - Formatação de Preços em Todo o Sistema**

#### **Objetivo**

Validar que todos os preços são formatados corretamente no padrão brasileiro (R$ XX,XX).

#### **Pré-Condições**

- O usuário deve navegar por diferentes páginas do sistema.

#### **Passos**

| **Id** | **Ação**                                    | **Resultado Esperado**                                                      |
|--------|---------------------------------------------|-----------------------------------------------------------------------------|
| 1      | Visualizar produtos no menu                 | Todos os preços devem estar no formato R$ XX,XX.                            |
| 2      | Acessar detalhes de um produto              | O preço deve estar formatado corretamente.                                  |
| 3      | Visualizar itens no carrinho                | Preços unitários e subtotais devem estar formatados.                        |
| 4      | Verificar total do carrinho                 | O total deve estar no formato R$ XX,XX.                                     |
| 5      | Visualizar página de pagamento              | O total do pedido deve estar formatado corretamente.                        |
| 6      | Verificar página de confirmação             | Todos os valores devem seguir o padrão brasileiro.                          |

#### **Resultados Esperados**

- Todos os preços usam o formato R$ XX,XX.
- Valores decimais sempre têm 2 casas.
- Não há inconsistências de formatação.

#### **Critérios de Aceitação**

- A formatação é consistente em todo o sistema.
- Valores são legíveis e profissionais.
- Não há erros de arredondamento visíveis.

---

### **CT044 - Formatação de Data na Confirmação do Pedido**

#### **Objetivo**

Validar que a data do pedido é formatada corretamente na página de confirmação.

#### **Pré-Condições**

- O usuário deve ter criado um pedido.
- O usuário deve estar na página de confirmação.

#### **Passos**

| **Id** | **Ação**                                    | **Resultado Esperado**                                                      |
|--------|---------------------------------------------|-----------------------------------------------------------------------------|
| 1      | Acessar a página de confirmação             | A página é carregada com detalhes do pedido.                                |
| 2      | Localizar o campo "Data"                    | O campo deve estar visível nos detalhes do pedido.                          |
| 3      | Verificar formato da data                   | A data deve estar em formato legível (ex: 03/04/2026 ou similar).          |

#### **Resultados Esperados**

- A data é formatada de forma legível.
- O formato segue padrões brasileiros ou internacionais consistentes.
- A data corresponde ao momento da criação do pedido.

#### **Critérios de Aceitação**

- A formatação é clara e profissional.
- A data está correta.

---

### **CT045 - Responsividade em Dispositivos Móveis**

#### **Objetivo**

Validar que o sistema é responsivo e funciona corretamente em dispositivos móveis.

#### **Pré-Condições**

- O sistema deve ser acessado em um dispositivo móvel ou com viewport reduzido.

#### **Passos**

| **Id** | **Ação**                                    | **Resultado Esperado**                                                      |
|--------|---------------------------------------------|-----------------------------------------------------------------------------|
| 1      | Acessar a página inicial em mobile          | A página se adapta ao tamanho da tela.                                      |
| 2      | Navegar pelo menu                           | Os produtos são exibidos em coluna única.                                   |
| 3      | Acessar detalhes de produto                 | A página de detalhes é totalmente funcional.                                |
| 4      | Gerenciar carrinho                          | Todos os controles são acessíveis e funcionais.                             |
| 5      | Finalizar pedido                            | O fluxo completo funciona em mobile.                                        |

#### **Resultados Esperados**

- Todas as páginas são responsivas.
- Botões e controles são facilmente clicáveis.
- Textos são legíveis sem zoom.
- Não há elementos cortados ou sobrepostos.

#### **Critérios de Aceitação**

- A experiência mobile é fluida.
- Não há necessidade de zoom horizontal.
- Todos os recursos estão acessíveis.

---

## Resumo de Cobertura

Este documento cobre os seguintes fluxos funcionais do sistema McBugs:

1. **Seleção de Tipo de Pedido** (CT001-CT002): Validação das opções "Para comer aqui" e "Para levar".

2. **Navegação e Visualização do Menu** (CT003-CT005): Visualização de categorias, produtos e navegação.

3. **Detalhes do Produto** (CT006-CT011): Visualização de informações, controle de quantidade e adição ao carrinho.

4. **Carrinho de Compras** (CT012-CT018): Gerenciamento de itens, quantidades e navegação.

5. **Finalização do Pedido** (CT019-CT022): Processo de checkout e validações.

6. **Pagamento** (CT023-CT032): Seleção de forma de pagamento, confirmação e cancelamento.

7. **Navegação e Rotas** (CT033-CT045): Tratamento de erros, persistência de dados, indicadores visuais e responsividade.

**Total de Casos de Teste:** 45 casos de teste funcionais

---

## Observações Finais

- Todos os casos de teste devem ser executados manualmente por um analista de qualidade.
- Recomenda-se executar os testes em diferentes navegadores (Chrome, Firefox, Safari, Edge).
- Testes de responsividade devem ser realizados em diferentes tamanhos de tela.
- Qualquer desvio dos resultados esperados deve ser reportado como defeito.
- Este documento deve ser atualizado conforme novas funcionalidades são adicionadas ao sistema.

---

**Documento elaborado em:** 03/04/2026  
**Próxima revisão:** A ser definida conforme ciclo de desenvolvimento
