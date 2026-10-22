
class SubscriptionComponent {

  // Elementos da seção de assinatura
  elements = {
    secaoAssinatura: () => cy.get('#footer'),
    tituloAssinatura: () => cy.get('.single-widget h2'),
    campoEmail: () => cy.get('#susbscribe_email'),
    botaoAssinar: () => cy.get('#subscribe'),
    mensagemSucesso: () => cy.get('#success-subscribe')
  };

  // Verifica se a seção de assinatura está disponível
  verificarSecaoAssinatura() {
    this.elements.tituloAssinatura()
      .should('be.visible')
      .and('contain.text', 'Subscription');

    this.elements.campoEmail()
      .should('be.visible');

    this.elements.botaoAssinar()
      .should('be.visible');
  }

  // Preenche o campo de e-mail
  preencherEmail(email) {
    this.elements.campoEmail()
      .should('be.visible')
      .clear()
      .type(email)
      .should('have.value', email);
  }

  // Clica no botão de assinatura
  clicarAssinar() {
    this.elements.botaoAssinar()
      .should('be.visible')
      .and('be.enabled')
      .click();
  }

  // Verifica a mensagem de sucesso
  verificarAssinaturaRealizada() {
    this.elements.mensagemSucesso()
      .should('be.visible')
      .and(
        'contain.text',
        'You have been successfully subscribed!'
      );
  }

  // Executa o fluxo de assinatura
  realizarAssinatura(email) {
    this.verificarSecaoAssinatura();

    this.preencherEmail(email);

    this.clicarAssinar();

    this.verificarAssinaturaRealizada();
  }
}

module.exports = new SubscriptionComponent();
