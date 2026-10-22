const header = require('../components/HeaderComponent');

class CheckoutPage {
  elements = {
    // Página do carrinho
    tabelaCarrinho: () => cy.get('#cart_info_table'),
    botaoCheckout: () => cy.contains('a', 'Proceed To Checkout'),

    // Página de checkout
    tituloEndereco: () => cy.contains('h2', 'Address Details'),
    enderecoEntrega: () => cy.get('#address_delivery'),
    enderecoCobranca: () => cy.get('#address_invoice'),

    tituloResumo: () => cy.contains('h2', 'Review Your Order'),
    tabelaResumo: () => cy.get('#cart_info'),
    produtosResumo: () => cy.get('#cart_info tbody tr[id^="product-"]'),

    // Comentário e finalização
    campoComentario: () => cy.get('textarea[name="message"]'),
    botaoFinalizarPedido: () => cy.contains('a', 'Place Order'),

    // Formulário de pagamento
    nomeCartao: () => cy.get('[data-qa="name-on-card"]'),
    numeroCartao: () => cy.get('[data-qa="card-number"]'),
    cvc: () => cy.get('[data-qa="cvc"]'),
    mesExpiracao: () => cy.get('[data-qa="expiry-month"]'),
    anoExpiracao: () => cy.get('[data-qa="expiry-year"]'),
    botaoConfirmarPagamento: () => cy.get('[data-qa="pay-button"]'),

    // Confirmação do pedido
    tituloPedidoConfirmado: () => cy.get('[data-qa="order-placed"]'),
    mensagemSucesso: () => cy.contains(
      'Congratulations! Your order has been confirmed!'
    )
  };

  // Acessa o carrinho utilizando o HeaderComponent
  acessarCarrinho() {
    header.abrirCarrinho();

    this.verificarCarrinho();
  }

  // Verifica se o carrinho foi carregado
  verificarCarrinho() {
    cy.url().should('include', '/view_cart');

    this.elements.tabelaCarrinho()
      .should('be.visible');
  }

  // Verifica se os produtos esperados estão no carrinho
  verificarProdutosCarrinho(idsProdutos) {
    idsProdutos.forEach((id) => {
      cy.get(`#product-${id}`)
        .should('be.visible');
    });
  }

  // Inicia o checkout
  prosseguirCheckout() {
    this.elements.botaoCheckout()
      .should('be.visible')
      .click();

    cy.url().should('include', '/checkout');
  }

  // Verifica se a página de checkout foi carregada
  verificarPaginaCheckout() {
    cy.url().should('include', '/checkout');

    this.elements.tituloEndereco()
      .should('be.visible');

    this.elements.tituloResumo()
      .should('be.visible');
  }

  // Valida os dados de um endereço
  verificarDadosEndereco(elementoEndereco, user) {
    elementoEndereco()
      .should('be.visible')
      .within(() => {
        cy.contains(user.firstName)
          .should('be.visible');

        cy.contains(user.lastName)
          .should('be.visible');

        cy.contains(user.address)
          .should('be.visible');

        cy.contains(user.city)
          .should('be.visible');

        cy.contains(user.state)
          .should('be.visible');

        cy.contains(user.country)
          .should('be.visible');
      });
  }

  // Verifica o endereço de entrega
  verificarEnderecoEntrega(user) {
    this.verificarDadosEndereco(
      this.elements.enderecoEntrega,
      user
    );
  }

  // Verifica o endereço de cobrança
  verificarEnderecoCobranca(user) {
    this.verificarDadosEndereco(
      this.elements.enderecoCobranca,
      user
    );
  }

  // Verifica os dois endereços cadastrados
  verificarEnderecos(user) {
    this.verificarEnderecoEntrega(user);
    this.verificarEnderecoCobranca(user);
  }

  // Verifica o resumo do pedido
  verificarResumoPedido(idsProdutos) {
    this.elements.tituloResumo()
      .should('be.visible');

    this.elements.tabelaResumo()
      .should('be.visible');

    idsProdutos.forEach((id) => {
      this.elements.tabelaResumo()
        .find(`#product-${id}`)
        .should('be.visible');
    });

    this.elements.produtosResumo()
      .should('have.length', idsProdutos.length);
  }

  // Insere comentário sobre o pedido
  preencherComentario(comentario) {
    this.elements.campoComentario()
      .should('be.visible')
      .clear()
      .type(comentario);
  }

  // Finaliza a revisão e acessa o pagamento
  finalizarPedido() {
    this.elements.botaoFinalizarPedido()
      .should('be.visible')
      .click();

    cy.url().should('include', '/payment');
  }

  // Verifica se o formulário de pagamento está disponível
  verificarFormularioPagamento() {
    cy.contains('h2', 'Payment')
      .should('be.visible');

    this.elements.nomeCartao()
      .should('be.visible');

    this.elements.numeroCartao()
      .should('be.visible');
  }

  // Preenche os dados de pagamento
  preencherPagamento(payment) {
    this.verificarFormularioPagamento();

    this.elements.nomeCartao()
      .type(payment.nameOnCard);

    this.elements.numeroCartao()
      .type(payment.cardNumber, { log: false });

    this.elements.cvc()
      .type(payment.cvc, { log: false });

    this.elements.mesExpiracao()
      .type(payment.expiryMonth);

    this.elements.anoExpiracao()
      .type(payment.expiryYear);
  }

  // Confirma o pagamento
  confirmarPagamento() {
    this.elements.botaoConfirmarPagamento()
      .should('be.visible')
      .click();
  }

  // Valida o sucesso da compra
  verificarPedidoConfirmado() {
    this.elements.tituloPedidoConfirmado()
      .should('be.visible')
      .and('contain.text', 'Order Placed!');

    this.elements.mensagemSucesso()
      .should('be.visible');
  }

  // Executa o fluxo de checkout após os produtos
  // já terem sido adicionados ao carrinho
  realizarCheckout(user, idsProdutos, comentario, payment) {
    this.verificarCarrinho();
    this.verificarProdutosCarrinho(idsProdutos);

    this.prosseguirCheckout();
    this.verificarPaginaCheckout();

    this.verificarEnderecos(user);
    this.verificarResumoPedido(idsProdutos);

    this.preencherComentario(comentario);
    this.finalizarPedido();

    this.preencherPagamento(payment);
    this.confirmarPagamento();

    this.verificarPedidoConfirmado();
  }
}

module.exports = new CheckoutPage();
