class CartModalComponent {
  elements = {
    modal: () => cy.get('#cartModal'),
    titulo: () => cy.get('#cartModal .modal-title'),
    mensagem: () => cy.get('#cartModal .modal-body'),
    continuarComprando: () => cy.get('#cartModal button.close-modal'),
    visualizarCarrinho: () => cy.get('#cartModal a[href="/view_cart"]')
  };

  verificarProdutoAdicionado() {
    this.elements.modal()
      .should('be.visible');

    this.elements.titulo()
      .should('be.visible')
      .and('contain.text', 'Added!');

    this.elements.mensagem()
      .should('contain.text', 'Your product has been added to cart.');
  }

  continuarComprando() {
    this.elements.continuarComprando()
      .should('be.visible')
      .click();

    this.elements.modal()
      .should('not.be.visible');
  }

  visualizarCarrinho() {
    this.elements.visualizarCarrinho()
      .should('be.visible')
      .click();

    cy.url().should('include', '/view_cart');
  }
}

module.exports = new CartModalComponent();