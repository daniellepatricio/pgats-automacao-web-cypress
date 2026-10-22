const header = require('../components/HeaderComponent');
const cartModal = require('../components/CartModalComponent');

class ProductPage {
    // Elementos específicos da página de produtos
    elements = {
    tituloProdutos: () => cy.get('.features_items h2.title'),
    listaProdutos: () => cy.get('.features_items .product-image-wrapper'),
    informacoesProduto: () => cy.get('.product-information'),

    campoPesquisa: () => cy.get('#search_product'),
    botaoPesquisar: () => cy.get('#submit_search'),
    tituloProdutosPesquisados: () => cy.get('.features_items h2.title'),
    produtosPesquisados: () => cy.get('.features_items .product-image-wrapper'),

    tabelaCarrinho: () => cy.get('#cart_info_table'),
    itensCarrinho: () => cy.get('#cart_info_table tbody tr')
    };

    // Acessa a página de produtos diretamente
    acessar() {
        cy.visit('/products');
    }

    // Acessa a página de produtos pelo cabeçalho
    acessarPeloMenu() {
        header.abrirProdutos();
    }

    // Verifica se a listagem de produtos está visível
    verificarListagem() {
        cy.url().should('include', '/products');

        this.elements.tituloProdutos()
        .should('be.visible')
        .and('contain.text', 'All Products');

        this.elements.listaProdutos()
        .should('have.length.greaterThan', 0);
    }

    // Verifica que existem produtos disponíveis na listagem
    verificarProdutosDisponiveis() {
    this.elements.listaProdutos()
        .should('be.visible')
        .and('have.length.greaterThan', 0);
    }

    // Verifica que a página de detalhes do produto foi aberta
    verificarPaginaDetalhes() {
    cy.url().should('include', '/product_details/');

    this.elements.informacoesProduto()
        .should('be.visible');
    }

    // Abre o primeiro produto disponível
    abrirPrimeiroProduto() {
        this.elements.listaProdutos()
        .first()
        .find('a[href^="/product_details/"]')
        .should('be.visible')
        .click();

        cy.url().should('include', '/product_details/');
    }

    // Valida as informações da página de detalhes
    verificarDetalhes() {
        this.elements.informacoesProduto()
        .should('be.visible')
        .within(() => {

        // Nome do produto
        cy.get('h2')
        .should('be.visible')
        .and('not.be.empty');

        // Categoria
        cy.contains('Category:')
        .should('be.visible');

        // Preço
        cy.contains('Rs.')
        .should('be.visible');

        // Disponibilidade
        cy.contains('Availability:')
        .should('be.visible');

        // Condição
        cy.contains('Condition:')
        .should('be.visible');

        // Marca
        cy.contains('Brand:')
        .should('be.visible');
        });
    }

    // Pesquisa produtos pelo nome
    pesquisar(nomeProduto) {
        this.acessar();

        this.elements.campoPesquisa()
        .should('be.visible')
        .clear()
        .type(nomeProduto);

        this.elements.botaoPesquisar()
        .should('be.visible')
        .click();
    }

    // Verifica o título da página de resultados
    verificarResultadoPesquisa() {
        this.elements.tituloProdutosPesquisados()
        .should('be.visible')
        .and('contain.text', 'Searched Products');
    }

    // Verifica se os produtos encontrados correspondem à pesquisa
    verificarProdutosPesquisados(nomeProduto) {
        const termoPesquisado = nomeProduto.trim().toLowerCase();

        this.elements.produtosPesquisados()
        .should('have.length.greaterThan', 0)
        .each(($produto) => {
            cy.wrap($produto)
            .find('.productinfo p')
            .invoke('text')
            .then((nomeEncontrado) => {
                expect(nomeEncontrado.trim().toLowerCase())
                .to.include(termoPesquisado);
            });
        });
    }

    // Localiza um produto pelo seu identificador
    localizarProduto(id) {
        return cy.get(
        `.features_items .product-image-wrapper:has(
            .productinfo a.add-to-cart[data-product-id="${id}"]
        )`.replace(/\s+/g, ' ')
        ).first();
    }

    // Adiciona um produto ao carrinho
    adicionarProduto(id) {
        cy.get('.productinfo')
        .filter(`:has(a.add-to-cart[data-product-id="${id}"])`)
        .first()
        .find(`a.add-to-cart[data-product-id="${id}"]`)
        .should('exist')
        .click({ force: true });

        cartModal.verificarProdutoAdicionado();
    }

    // Fecha o modal e permite continuar comprando
    continuarComprando() {
        cartModal.continuarComprando();
    }

    // Acessa o carrinho pelo modal de confirmação
    visualizarCarrinho() {
        cartModal.visualizarCarrinho();
    }

    // Verifica se a página do carrinho foi carregada
    verificarCarrinho() {
        cy.url().should('include', '/view_cart');

        this.elements.tabelaCarrinho()
        .should('be.visible');
    }

    // Verifica a quantidade de produtos no carrinho
    verificarQuantidadeProdutos(quantidade) {
        this.elements.itensCarrinho()
        .should('have.length', quantidade);
    }

    // Verifica se um produto específico está no carrinho
    verificarProdutoNoCarrinho(id) {
        cy.get(`#product-${id}`)
        .should('be.visible');
    }
}

module.exports = new ProductPage();