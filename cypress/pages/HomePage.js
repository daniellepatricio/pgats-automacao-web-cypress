const header = require('../components/HeaderComponent');
const subscription = require('../components/SubscriptionComponent');

class HomePage {
  // Elementos específicos da página inicial
  elements = {
    logo: () => cy.get('header .logo img'),
    slider: () => cy.get('#slider'),
    featuresItems: () => cy.get('.features_items'),
    footer: () => cy.get('#footer')
  };

  // Acessa a página inicial
  acessar() {
    //cy.visit('/');
    cy.acessarAplicacao();
  }

  // Verifica se a página inicial foi carregada
  verificarPaginaInicial() {
    cy.url().should('eq', `${Cypress.config('baseUrl')}/`);

    this.elements.logo()
      .should('be.visible');

    this.elements.featuresItems()
      .should('be.visible')
      .and('contain.text', 'Features Items');
  }

  // Acessa a página inicial e valida o carregamento
  abrirPaginaInicial() {
    this.acessar();
    this.verificarPaginaInicial();
  }

  // Acessa a página de Login/Cadastro pelo cabeçalho
  acessarLogin() {
    header.abrirLogin();
  }

  // Acessa a página de produtos pelo cabeçalho
  acessarProdutos() {
    header.abrirProdutos();
  }

  // Acessa o carrinho pelo cabeçalho
  acessarCarrinho() {
    header.abrirCarrinho();
  }

  // Verifica se o usuário está autenticado
  verificarUsuarioLogado(nome) {
    header.verificarUsuarioLogado(nome);
  }

  // Realiza logout pelo cabeçalho
  realizarLogout() {
    header.logout();
  }

  // Exclui a conta do usuário autenticado
  excluirConta() {
    header.excluirConta();
  }

  // Verifica se a seção de assinatura está disponível
  verificarSecaoAssinatura() {
    subscription.verificarSecaoAssinatura();
  }
  
  //Realiza a assinatura da newsletter
  assinarNewsletter(email) {
    subscription.realizarAssinatura(email);
  }
}

module.exports = new HomePage();