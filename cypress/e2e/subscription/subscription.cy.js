const homePage = require('../../pages/HomePage');
const subscriptionPage = require('../../pages/SubscriptionPage');


describe('TC10 - Verify Subscription in Home Page', () => {

  it('Deve realizar a assinatura da newsletter na página inicial com sucesso', () => {

    // Passos 1 e 2 - Iniciar navegador e acessar a aplicação
    homePage.abrirPaginaInicial();

    // Passo 3 - Verificar que a página inicial está visível
    homePage.verificarPaginaInicial();

    // Passo 4 - Rolar até o rodapé da página
    subscriptionPage.rolarAteRodape();

    // Passo 5 - Verificar o texto SUBSCRIPTION
    subscriptionPage.verificarSecaoAssinatura();

    // Carregar os dados da fixture
    cy.fixture('subscription').then((dados) => {

      // Passo 6 - Informar o e-mail no campo de assinatura
      subscriptionPage.preencherEmail(dados.email);

      // Passo 6 - Clicar no botão de assinatura
      subscriptionPage.clicarAssinar();

      // Passo 7 - Verificar a mensagem de sucesso
      subscriptionPage.verificarAssinaturaRealizada();

    });
  });

});
