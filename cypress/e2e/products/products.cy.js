const homePage = require('../../pages/HomePage');
const productsPage = require('../../pages/ProductPage');
const header = require('../../components/HeaderComponent');

describe('TC08 - Verify All Products and Product Detail Page', () => {

  it('Deve exibir todos os produtos e validar os detalhes do primeiro produto', () => {

    // Passos 1 e 2 - Iniciar navegador e acessar a aplicação
    homePage.abrirPaginaInicial();

    // Passo 3 - Verificar que a página inicial está visível
    homePage.verificarPaginaInicial();

    // Passo 4 - Clicar em Products
    header.abrirProdutos();

    // Passo 5 - Verificar que a página ALL PRODUCTS está visível
    productsPage.verificarListagem();

    // Passo 6 - Verificar que a lista de produtos está visível
    productsPage.verificarProdutosDisponiveis();

    // Passo 7 - Clicar em View Product do primeiro produto
    productsPage.abrirPrimeiroProduto();

    // Passo 8 - Verificar que a página de detalhes foi aberta
    productsPage.verificarPaginaDetalhes();

    // Passo 9 - Verificar nome, categoria, preço,
    // disponibilidade, condição e marca
    productsPage.verificarDetalhes();
  });

});
