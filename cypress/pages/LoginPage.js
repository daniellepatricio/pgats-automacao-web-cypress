
class LoginPage {
  // Elementos da página de Login / Signup
  elements = {
    // Formulário de login
    tituloLogin: () => cy.get('.login-form h2'),
    emailLogin: () => cy.get('[data-qa="login-email"]'),
    senhaLogin: () => cy.get('[data-qa="login-password"]'),
    botaoLogin: () => cy.get('[data-qa="login-button"]'),
    mensagemErroLogin: () => cy.get('.login-form p'),

    // Formulário de cadastro inicial
    tituloCadastro: () => cy.get('.signup-form h2'),
    nomeCadastro: () => cy.get('[data-qa="signup-name"]'),
    emailCadastro: () => cy.get('[data-qa="signup-email"]'),
    botaoCadastro: () => cy.get('[data-qa="signup-button"]'),
    mensagemErroCadastro: () => cy.get('.signup-form p')
  };

  // Acessa a página de Login / Signup
  acessar() {
    cy.visit('/login');
  }

  // Verifica se o formulário de login está visível
  verificarFormularioLogin() {
    cy.url().should('include', '/login');

    this.elements.tituloLogin()
      .should('be.visible')
      .and('contain.text', 'Login to your account');

    this.elements.emailLogin()
      .should('be.visible');

    this.elements.senhaLogin()
      .should('be.visible');

    this.elements.botaoLogin()
      .should('be.visible');
  }

  // Verifica se o formulário de cadastro está visível
  verificarFormularioCadastro() {
    this.elements.tituloCadastro()
      .should('be.visible')
      .and('contain.text', 'New User Signup!');

    this.elements.nomeCadastro()
      .should('be.visible');

    this.elements.emailCadastro()
      .should('be.visible');

    this.elements.botaoCadastro()
      .should('be.visible');
  }

  // Preenche o formulário de login
  preencherLogin(email, senha) {
    this.elements.emailLogin()
      .should('be.visible')
      .clear()
      .type(email);

    this.elements.senhaLogin()
      .should('be.visible')
      .clear()
      .type(senha, { log: false });
  }

  // Envia o formulário de login
  enviarLogin() {
    this.elements.botaoLogin()
      .should('be.visible')
      .click();
  }

  // Realiza o login sem navegar novamente
  login(email, senha) {
    this.verificarFormularioLogin();
    this.preencherLogin(email, senha);
    this.enviarLogin();
  }

  // Acessa a página e realiza o login
  realizarLogin(email, senha) {
    this.acessar();
    this.login(email, senha);
  }

  // Valida a mensagem de credenciais inválidas
  verificarLoginInvalido() {
    this.elements.mensagemErroLogin()
      .should('be.visible')
      .and(
        'contain.text',
        'Your email or password is incorrect!'
      );
  }

  // Preenche os dados iniciais de cadastro
  preencherCadastro(nome, email) {
    this.elements.nomeCadastro()
      .should('be.visible')
      .clear()
      .type(nome);

    this.elements.emailCadastro()
      .should('be.visible')
      .clear()
      .type(email);
  }

  // Envia o formulário de cadastro inicial
  enviarCadastro() {
    this.elements.botaoCadastro()
      .should('be.visible')
      .click();
  }

  // Inicia o cadastro sem navegar novamente
  iniciarCadastro(nome, email) {
    this.verificarFormularioCadastro();
    this.preencherCadastro(nome, email);
    this.enviarCadastro();
  }

  // Valida o erro de e-mail já cadastrado
  verificarEmailExistente() {
    this.elements.mensagemErroCadastro()
      .should('be.visible')
      .and(
        'contain.text',
        'Email Address already exist!'
      );
  }

  // Verifica se o usuário retornou à página de login
  verificarLogout() {
    cy.url().should('include', '/login');

    this.verificarFormularioLogin();

    this.elements.emailLogin()
      .should('have.value', '');

    this.elements.senhaLogin()
      .should('have.value', '');
  }
}

module.exports = new LoginPage();
