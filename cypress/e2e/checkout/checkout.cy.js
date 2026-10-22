const homePage = require('../../pages/HomePage');
const loginPage = require('../../pages/LoginPage');
const registerPage = require('../../pages/RegisterPage');
const productsPage = require('../../pages/ProductPage');
const checkoutPage = require('../../pages/CheckoutPage');
const header = require('../../components/HeaderComponent');
const { createUser } = require('../../factories/userFactory');

describe('TC15 - Place Order: Register before Checkout', () => {

  it('Deve cadastrar usuário e finalizar um pedido com sucesso', () => {

    // Gerar usuário
    const user = createUser();

    // Passos 1 e 2 - Iniciar navegador e acessar a aplicação
    homePage.abrirPaginaInicial();

    // Passo 3 - Verificar página inicial
    homePage.verificarPaginaInicial();

    // Passo 4 - Clicar em Signup / Login
    homePage.acessarLogin();

    // Passo 5 - Preencher nome e e-mail
    loginPage.verificarFormularioCadastro();
    loginPage.preencherCadastro(user.name, user.email);
    loginPage.enviarCadastro();

    // Passo 6 - Preencher dados e criar conta
    registerPage.preencherFormulario(user);
    registerPage.criarConta();

    // Passo 7 - Verificar ACCOUNT CREATED!
    registerPage.verificarContaCriada();

    // Passo 8 - Clicar em Continue
    registerPage.continuar();

    // Passo 9 - Verificar usuário autenticado
    header.verificarUsuarioLogado(user.name);

    // Carregar os dados do pedido e pagamento
    cy.fixture('checkout').then((checkout) => {
      cy.fixture('payment').then((payment) => {

        // Passo 10 - Adicionar produtos ao carrinho
        header.abrirProdutos();

        checkout.order.productIds.forEach((productId) => {
          productsPage.adicionarProduto(productId);
          productsPage.continuarComprando();
        });

        // Passo 11 - Acessar o carrinho
        header.abrirCarrinho();

        // Passo 12 - Verificar página do carrinho
        checkoutPage.verificarCarrinho();

        checkoutPage.verificarProdutosCarrinho(
          checkout.order.productIds
        );

        // Passo 13 - Prosseguir para checkout
        checkoutPage.prosseguirCheckout();

        // Passo 14 - Verificar endereço e resumo do pedido
        checkoutPage.verificarPaginaCheckout();
        checkoutPage.verificarEnderecos(user);

       checkoutPage.verificarResumoPedido(
        checkout.order.productIds
        );

        // Passo 15 - Informar comentário e finalizar pedido
        checkoutPage.preencherComentario(checkout.order.comment);
        checkoutPage.finalizarPedido();

        // Passo 16 - Preencher dados de pagamento
        checkoutPage.verificarFormularioPagamento();
        checkoutPage.preencherPagamento(payment);

        // Passo 17 - Confirmar pagamento
        checkoutPage.confirmarPagamento();

        // Passo 18 - Verificar pedido realizado
        checkoutPage.verificarPedidoConfirmado();

        // Passos 19 e 20 - Excluir conta e validar exclusão
        header.excluirConta();
      });
    });
  });
});

describe('TC16 - Place Order: Login before Checkout', () => {
  let user;

  beforeEach(() => {
    // Pré-condição: criar um usuário pela interface web
    user = createUser();

    registerPage.cadastrarUsuario(user);

    // Verificar que o cadastro foi concluído
    header.verificarUsuarioLogado(user.name);

    // Realizar logout para executar o login no cenário
    header.logout();

    loginPage.verificarLogout();
  });

  it('Deve realizar login e finalizar um pedido com sucesso', () => {

    // Passos 1 e 2 - Iniciar navegador e acessar a aplicação
    homePage.abrirPaginaInicial();

    // Passo 3 - Verificar que a página inicial está visível
    homePage.verificarPaginaInicial();

    // Passo 4 - Clicar em Signup / Login
    homePage.acessarLogin();

    // Passo 5 - Informar credenciais e realizar login
    loginPage.verificarFormularioLogin();

    loginPage.preencherLogin(user.email, user.password);

    loginPage.enviarLogin();

    // Passo 6 - Verificar usuário autenticado
    header.verificarUsuarioLogado(user.name);

    // Carregar dados do pedido e pagamento
    cy.fixture('checkout').then((checkout) => {
      cy.fixture('payment').then((payment) => {

        // Passo 7 - Adicionar produtos ao carrinho
        header.abrirProdutos();

        checkout.order.productIds.forEach((productId) => {
          productsPage.adicionarProduto(productId);
          productsPage.continuarComprando();
        });

        // Passo 8 - Clicar em Cart
        header.abrirCarrinho();

        // Passo 9 - Verificar a página do carrinho
        checkoutPage.verificarCarrinho();

        checkoutPage.verificarProdutosCarrinho(
          checkout.order.productIds
        );

        // Passo 10 - Prosseguir para checkout
        checkoutPage.prosseguirCheckout();

        // Passo 11 - Verificar endereços e resumo do pedido
        checkoutPage.verificarPaginaCheckout();

        checkoutPage.verificarEnderecos(user);

        checkoutPage.verificarResumoPedido(
          checkout.order.productIds
        );

        // Passo 12 - Informar comentário e clicar em Place Order
        checkoutPage.preencherComentario(checkout.order.comment);

        checkoutPage.finalizarPedido();

        // Passo 13 - Preencher dados de pagamento
        checkoutPage.verificarFormularioPagamento();

        checkoutPage.preencherPagamento(payment);

        // Passo 14 - Confirmar pagamento
        checkoutPage.confirmarPagamento();

        // Passo 15 - Verificar pedido realizado
        checkoutPage.verificarPedidoConfirmado();

        // Passos 16 e 17 - Excluir conta e validar exclusão
        header.excluirConta();
      });
    });
  });
});