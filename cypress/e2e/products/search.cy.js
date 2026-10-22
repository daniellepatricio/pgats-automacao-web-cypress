const homePage = require('../../pages/HomePage');
const productsPage = require('../../pages/ProductPage');
const header = require('../../components/HeaderComponent');

describe('TC09 - Search Product', () => {

  it('Deve pesquisar um produto e validar os resultados encontrados', () => {

    // Passos 1 e 2 - Iniciar navegador e acessar a aplicação
    homePage.abrirPaginaInicial();

    // Passo 3 - Verificar que a página inicial está visível
    homePage.verificarPaginaInicial();

    // Passo 4 - Clicar em Products
    header.abrirProdutos();

    // Passo 5 - Verificar ALL PRODUCTS
    productsPage.verificarListagem();

    // Carregar dados de pesquisa da fixture
    cy.fixture('products').then((dados) => {
      const nomeProduto = dados.search.productName;

      // Passo 6 - Informar o nome e clicar em Search
      productsPage.pesquisar(nomeProduto);

      // Passo 7 - Verificar SEARCHED PRODUCTS
      productsPage.verificarResultadoPesquisa();

      // Passo 8 - Verificar produtos relacionados à pesquisa
      productsPage.verificarProdutosPesquisados(nomeProduto);
    });
  });

});
