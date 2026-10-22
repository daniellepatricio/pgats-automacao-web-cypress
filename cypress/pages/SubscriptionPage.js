
const subscription = require('../components/SubscriptionComponent');

class SubscriptionPage {

  // Acessa a página inicial
  acessarPaginaInicial() {
    cy.acessarAplicacao();

    cy.url().should(
      'eq',
      `${Cypress.config('baseUrl')}/`
    );
  }

  // Rola até o rodapé da página
  rolarAteRodape() {
    cy.get('#footer')
      .scrollIntoView()
      .should('be.visible');
  }

  // Verifica se a seção de assinatura está disponível
  verificarSecaoAssinatura() {
    subscription.verificarSecaoAssinatura();
  }

  // Preenche o e-mail
  preencherEmail(email) {
    //subscription.preencherEmail(email);
    cy.preencherCampo('#susbscribe_email', email);
  }

  // Envia a assinatura
  clicarAssinar() {
    subscription.clicarAssinar();
  }

  // Verifica a mensagem de confirmação
  verificarAssinaturaRealizada() {
    subscription.verificarAssinaturaRealizada();
  }

  // Executa o fluxo completo
  assinarNewsletter(email) {
    this.acessarPaginaInicial();

    this.rolarAteRodape();

    this.verificarSecaoAssinatura();

    this.preencherEmail(email);

    this.clicarAssinar();

    this.verificarAssinaturaRealizada();
  }
}

module.exports = new SubscriptionPage();

