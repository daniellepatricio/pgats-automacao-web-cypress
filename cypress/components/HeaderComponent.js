class HeaderComponent {
  // Elementos compartilhados do cabeçalho
  elements = {
    homeLink: () => cy.get('header a[href="/"]'),
    loginLink: () => cy.get('header a[href="/login"]'),
    productsLink: () => cy.get('header a[href="/products"]'),
    cartLink: () => cy.get('header a[href="/view_cart"]'),
    logoutLink: () => cy.get('header a[href="/logout"]'),
    deleteAccountLink: () => cy.get('header a[href="/delete_account"]'),
    loggedInUser: () => cy.contains('header a', 'Logged in as')
  };

  // Acessar a página inicial
  abrirHome() {
    this.elements.homeLink()
      .should('be.visible')
      .click();

    cy.url().should('eq', `${Cypress.config('baseUrl')}/`);
  }

  //Acessar a página de Login / Signup
  abrirLogin() {
    this.elements.loginLink()
      .should('be.visible')
      .click();

      cy.url().should('include', '/login');
  }

  // Acessar a página de produtos
  abrirProdutos() {
    this.elements.productsLink()
      .should('be.visible')
      .click();

      cy.url().should('include', '/products');
  }

  // Acessar o carrinho
  abrirCarrinho() {
    this.elements.cartLink()
      .should('be.visible')
      .click();

    cy.url().should('include', '/view_cart');
  }

  // Verificar usuário autenticado
  verificarUsuarioLogado(nome) {
    this.elements.loggedInUser()
      .should('be.visible')
      .find('b')
      .should('have.text', nome);
  }

  // Realizar logout
  logout() {
    this.elements.logoutLink()
      .should('be.visible')
      .click();

    cy.url().should('include', '/login');
  }

  // Excluir a conta e validar a confirmação
  excluirConta() {
    this.elements.deleteAccountLink()
      .should('be.visible')
      .click();

    cy.get('[data-qa="account-deleted"]', { timeout: 50000 })
      .should('be.visible')
      .and('contain.text', 'Account Deleted!');
  }
}

module.exports = new HeaderComponent();