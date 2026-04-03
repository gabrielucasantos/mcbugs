import { test, expect } from '@playwright/test';

const BASE_URL = 'http://localhost:3000';

test.describe('CT-JORNADA-001 - Fluxo Completo "Para Comer Aqui" com Pagamento via PIX', () => {
  test.beforeEach(async ({ page }) => {
    // Limpar localStorage antes de cada teste para garantir isolamento
    await page.goto(BASE_URL);
    await page.evaluate(() => localStorage.clear());
    await page.reload();
  });

  test('deve completar o fluxo de pedido dine-in com pagamento PIX', async ({ page }) => {
    // ─── PASSO 1: Acessar página inicial ───────────────────────────────────────
    await page.goto(BASE_URL);
    await expect(page).toHaveURL(`${BASE_URL}/`);

    await expect(page.getByRole('heading', { name: 'McBugs', level: 1 })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Seja bem-vindo!' })).toBeVisible();
    await expect(page.getByRole('button', { name: /Para comer aqui/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /Para levar/i })).toBeVisible();

    // ─── PASSO 2: Clicar em "Para comer aqui" ──────────────────────────────────
    await page.getByRole('button', { name: /Para comer aqui/i }).click();
    await expect(page).toHaveURL(`${BASE_URL}/menu`);

    // ─── PASSO 3: Verificar carregamento do menu ────────────────────────────────
    await expect(page.getByRole('button', { name: /🍔 Lanches/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /🍟 Fritas/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /🥤 Bebidas/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /🍦 Sobremesas/i })).toBeVisible();

    // ─── PASSO 4: Verificar produtos da categoria Lanches ──────────────────────
    await expect(page.getByRole('heading', { name: 'Big Mock', level: 3 })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Duplo Deploy', level: 3 })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'McMerge', level: 3 })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'McNífico Flaky', level: 3 })).toBeVisible();

    // ─── PASSO 5: Clicar no card "Big Mock" ────────────────────────────────────
    await page.getByRole('button', { name: /Big Mock Big Mock/i }).click();
    await expect(page).toHaveURL(`${BASE_URL}/product/big-mock`);

    // ─── PASSO 6: Verificar informações do produto ─────────────────────────────
    await expect(page.getByRole('heading', { name: 'Big Mock', level: 1 })).toBeVisible();
    await expect(page.getByText('R$ 39,90').first()).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Ingredientes', level: 2 })).toBeVisible();
    await expect(page.getByRole('button', { name: /Quero/i })).toContainText('R$ 39,90');

    // ─── PASSO 7: Incrementar quantidade para 2 ────────────────────────────────
    // O QuantityControl tem: [botão -] [span quantidade] [botão +]
    // Localizamos o container do controle e pegamos o último botão ("+")
    const quantityControl = page.locator('div.flex.items-center.gap-2').first();
    await quantityControl.getByRole('button').last().click();
    await expect(page.getByRole('button', { name: /Quero • R\$ 79,80/i })).toBeVisible();

    // ─── PASSO 8: Adicionar ao carrinho ────────────────────────────────────────
    await page.getByRole('button', { name: /Quero • R\$ 79,80/i }).click();
    await expect(page).toHaveURL(`${BASE_URL}/menu`);

    // ─── PASSO 9: Verificar CartBar com 2 itens e R$ 79,80 ─────────────────────
    await expect(page.getByText('R$ 79,80')).toBeVisible();
    await expect(page.getByText('/ 2 itens')).toBeVisible();

    // ─── PASSO 10: Clicar na aba "Fritas" ──────────────────────────────────────
    await page.getByRole('button', { name: /🍟 Fritas/i }).click();
    await expect(page.getByRole('heading', { name: 'Batatas Full Stack', level: 3 })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Batatas Refatoradas', level: 3 })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Batatas Minificadas', level: 3 })).toBeVisible();

    // ─── PASSO 11: Clicar no card "Batatas Full Stack" ─────────────────────────
    await page.getByRole('button', { name: /Batatas Full Stack Batatas Full Stack/i }).click();
    await expect(page).toHaveURL(`${BASE_URL}/product/batatas-fullstack`);

    // ─── PASSO 12: Verificar badge "2" no ícone de sacola ──────────────────────
    await expect(page.getByRole('button', { name: '2' })).toBeVisible();

    // ─── PASSO 13: Manter quantidade 1 e adicionar ao carrinho ─────────────────
    await expect(page.getByRole('button', { name: /Quero • R\$ 10,90/i })).toBeVisible();
    await page.getByRole('button', { name: /Quero • R\$ 10,90/i }).click();
    await expect(page).toHaveURL(`${BASE_URL}/menu`);

    // ─── PASSO 14: Verificar CartBar com 3 itens e R$ 90,70 ────────────────────
    await expect(page.getByText('R$ 90,70')).toBeVisible();
    await expect(page.getByText('/ 3 itens')).toBeVisible();

    // ─── PASSO 15: Clicar na aba "Bebidas" ─────────────────────────────────────
    await page.getByRole('button', { name: /🥤 Bebidas/i }).click();
    await expect(page.getByRole('heading', { name: 'Coca-Crash', level: 3 })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Fanta Warning', level: 3 })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Água Localhost', level: 3 })).toBeVisible();

    // ─── PASSO 16: Clicar no card "Coca-Crash" ─────────────────────────────────
    await page.getByRole('button', { name: /Coca-Crash Coca-Crash/i }).click();
    await expect(page).toHaveURL(`${BASE_URL}/product/coca-crash`);

    // ─── PASSO 17: Incrementar quantidade para 2 ───────────────────────────────
    const quantityControlCoca = page.locator('div.flex.items-center.gap-2').first();
    await quantityControlCoca.getByRole('button').last().click();
    await expect(page.getByRole('button', { name: /Quero • R\$ 11,80/i })).toBeVisible();

    // ─── PASSO 18: Adicionar ao carrinho ───────────────────────────────────────
    await page.getByRole('button', { name: /Quero • R\$ 11,80/i }).click();
    await expect(page).toHaveURL(`${BASE_URL}/menu`);

    // ─── PASSO 19: Verificar CartBar com 5 itens e R$ 102,50 ───────────────────
    await expect(page.getByText('R$ 102,50')).toBeVisible();
    await expect(page.getByText('/ 5 itens')).toBeVisible();

    // ─── PASSO 20: Navegar para o carrinho ─────────────────────────────────────
    await page.getByRole('button', { name: /Ver pedido/i }).click();
    await expect(page).toHaveURL(`${BASE_URL}/cart`);

    // ─── PASSOS 21-22: Verificar itens e total no carrinho ─────────────────────
    await expect(page.getByRole('heading', { name: 'Big Mock', level: 3 })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Batatas Full Stack', level: 3 })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Coca-Crash', level: 3 })).toBeVisible();
    await expect(page.getByText('R$ 79,80')).toBeVisible();
    await expect(page.getByText('R$ 10,90')).toBeVisible();
    await expect(page.getByText('R$ 11,80')).toBeVisible();
    await expect(page.getByText('R$ 102,50')).toBeVisible();

    // ─── PASSO 23: Incrementar Coca-Crash para 3 ───────────────────────────────
    // Localizar o card do Coca-Crash pelo heading e navegar para o QuantityControl
    const cocaCrashCard = page.locator('div.flex.gap-4').filter({
      has: page.getByRole('heading', { name: 'Coca-Crash', level: 3 }),
    });
    await cocaCrashCard.locator('div.flex.items-center.gap-2').getByRole('button').last().click();
    await expect(page.getByText('R$ 17,70')).toBeVisible();
    await expect(page.getByText('R$ 108,40')).toBeVisible();

    // ─── PASSO 24: Decrementar Coca-Crash para 2 ───────────────────────────────
    await cocaCrashCard.locator('div.flex.items-center.gap-2').getByRole('button').first().click();
    await expect(page.getByText('R$ 11,80')).toBeVisible();
    await expect(page.getByText('R$ 102,50')).toBeVisible();

    // ─── PASSO 25: Clicar "Finalizar pedido" ───────────────────────────────────
    await page.getByRole('button', { name: 'Finalizar pedido' }).click();

    // ─── PASSO 25 (verificação): Drawer aberto ─────────────────────────────────
    await expect(page.getByRole('dialog', { name: 'Finalizar Pedido' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Seu nome' })).toBeVisible();

    // ─── PASSO 26: Digitar nome ─────────────────────────────────────────────────
    await page.getByRole('textbox', { name: 'Seu nome' }).fill('João Silva');

    // ─── PASSO 27: Confirmar pedido ─────────────────────────────────────────────
    await page.getByRole('button', { name: 'Finalizar' }).click();
    await expect(page).toHaveURL(`${BASE_URL}/payment`);

    // ─── PASSO 28: Verificar página de pagamento ───────────────────────────────
    await expect(page.getByRole('heading', { name: 'Escolha a forma de pagamento' })).toBeVisible();
    await expect(page.getByText('R$ 102,50')).toBeVisible();
    await expect(page.getByRole('button', { name: /PIX/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /Cartão de Débito/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /Cartão de Crédito/i })).toBeVisible();

    // ─── PASSO 29: Selecionar PIX ──────────────────────────────────────────────
    await page.getByRole('button', { name: /PIX Pagamento no balcão/i }).click();
    await expect(page).toHaveURL(`${BASE_URL}/payment/pix/confirm`);

    // ─── PASSO 30: Verificar página de confirmação ─────────────────────────────
    await expect(page.getByRole('heading', { name: 'Pagamento no Balcão' })).toBeVisible();
    await expect(page.getByText('R$ 102,50')).toBeVisible();

    // ─── PASSO 31: Verificar detalhes do pedido ────────────────────────────────
    await expect(page.getByText('João Silva')).toBeVisible();
    await expect(page.getByText('Comer no local')).toBeVisible();
    await expect(page.getByText('PIX').first()).toBeVisible();

    // ─── PASSO 31 (itens): Verificar lista de itens ────────────────────────────
    await expect(page.getByText('2x Big Mock')).toBeVisible();
    await expect(page.getByText('1x Batatas Full Stack')).toBeVisible();
    await expect(page.getByText('2x Coca-Crash')).toBeVisible();

    // ─── PASSO 32: Verificar mensagem específica dine-in ───────────────────────
    await expect(
      page.getByText('Após o pagamento, aguarde ser chamado pelo número do seu pedido.')
    ).toBeVisible();

    // ─── PASSO 33: Verificar botão "Fazer Novo Pedido" ─────────────────────────
    await expect(page.getByRole('button', { name: 'Fazer Novo Pedido' })).toBeVisible();

    // ─── PASSO 34: Recarregar página e verificar persistência ──────────────────
    await page.reload();
    await expect(page).toHaveURL(`${BASE_URL}/payment/pix/confirm`);
    await expect(page.getByText('João Silva')).toBeVisible();
    await expect(page.getByText('R$ 102,50')).toBeVisible();
    await expect(page.getByText('2x Big Mock')).toBeVisible();

    // ─── PASSO 35: Clicar "Fazer Novo Pedido" ──────────────────────────────────
    await page.getByRole('button', { name: 'Fazer Novo Pedido' }).click();
    await expect(page).toHaveURL(`${BASE_URL}/`);

    // ─── PASSO 36: Verificar limpeza de dados ──────────────────────────────────
    await expect(page.getByRole('heading', { name: 'Seja bem-vindo!' })).toBeVisible();
    await expect(page.getByRole('button', { name: /Para comer aqui/i })).toBeVisible();
    // CartBar não deve estar visível
    await expect(page.getByRole('button', { name: /Ver pedido/i })).not.toBeVisible();
  });
});
