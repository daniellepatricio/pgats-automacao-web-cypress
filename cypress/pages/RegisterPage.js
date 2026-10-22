
const loginPage = require('./LoginPage');

class RegisterPage {
  // Elementos do formulário completo de cadastro
  elements = {
    tituloCadastro: () => cy.contains(
      'h2',
      'Enter Account Information'
    ),

    // Informações da conta
    tituloMrs: () => cy.get('#id_gender2'),
    nome: () => cy.get('[data-qa="name"]'),
    email: () => cy.get('[data-qa="email"]'),
    senha: () => cy.get('[data-qa="password"]'),
    diaNascimento: () => cy.get('[data-qa="days"]'),
    mesNascimento: () => cy.get('[data-qa="months"]'),
    anoNascimento: () => cy.get('[data-qa="years"]'),
    newsletter: () => cy.get('#newsletter'),
    ofertasEspeciais: () => cy.get('#optin'),

    // Informações pessoais e endereço
    primeiroNome: () => cy.get('[data-qa="first_name"]'),
    sobrenome: () => cy.get('[data-qa="last_name"]'),
    empresa: () => cy.get('[data-qa="company"]'),
    endereco: () => cy.get('[data-qa="address"]'),
    segundoEndereco: () => cy.get('[data-qa="address2"]'),
    pais: () => cy.get('[data-qa="country"]'),
    estado: () => cy.get('[data-qa="state"]'),
    cidade: () => cy.get('[data-qa="city"]'),
    cep: () => cy.get('[data-qa="zipcode"]'),
    celular: () => cy.get('[data-qa="mobile_number"]'),

    // Botões e mensagens de confirmação
    botaoCriarConta: () => cy.get('[data-qa="create-account"]'),
    mensagemContaCriada: () => cy.get('[data-qa="account-created"]'),
    botaoContinuar: () => cy.get('[data-qa="continue-button"]')
  };

  // Verifica se o formulário de cadastro foi carregado
  verificarFormularioCadastro() {
    cy.url().should('include', '/signup');

    this.elements.tituloCadastro()
      .should('be.visible');

    this.elements.nome()
      .should('be.visible');

    this.elements.email()
      .should('be.visible');

    this.elements.senha()
      .should('be.visible');

    this.elements.botaoCriarConta()
      .should('be.visible');
  }

  // Valida os dados preenchidos na etapa inicial
  verificarDadosIniciais(user) {
    this.elements.nome()
      .should('have.value', user.name);

    this.elements.email()
      .should('have.value', user.email);
  }

  // Preenche as informações da conta
  preencherInformacoesConta(user) {
    this.elements.tituloMrs()
      .check();

    this.elements.senha()
      .should('be.visible')
      .type(user.password, { log: false });

    this.elements.diaNascimento()
      .select('10');

    this.elements.mesNascimento()
      .select('May');

    this.elements.anoNascimento()
      .select('1990');

    this.elements.newsletter()
      .check();

    this.elements.ofertasEspeciais()
      .check();
  }

  // Preenche os dados pessoais e o endereço
  preencherEndereco(user) {
    this.elements.primeiroNome()
      .type(user.firstName);

    this.elements.sobrenome()
      .type(user.lastName);

    this.elements.empresa()
      .type(user.company);

    this.elements.endereco()
      .type(user.address);

    this.elements.segundoEndereco()
      .type(user.address2);

    this.elements.pais()
      .select(user.country);

    this.elements.estado()
      .type(user.state);

    this.elements.cidade()
      .type(user.city);

    this.elements.cep()
      .type(user.zipcode);

    this.elements.celular()
      .type(user.mobile);
  }

  // Preenche o formulário completo
  preencherFormulario(user) {
    this.verificarFormularioCadastro();
    this.verificarDadosIniciais(user);

    this.preencherInformacoesConta(user);
    this.preencherEndereco(user);
  }

  // Envia o formulário para criar a conta
  criarConta() {
    this.elements.botaoCriarConta()
      .should('be.visible')
      .click();
  }

  // Valida a criação da conta
  verificarContaCriada() {
    cy.url().should('include', '/account_created');

    this.elements.mensagemContaCriada()
      .should('be.visible')
      .and('contain.text', 'Account Created!');
  }

  // Continua após a confirmação do cadastro
  continuar() {
    this.elements.botaoContinuar()
      .should('be.visible')
      .click();

    cy.url().should('eq', `${Cypress.config('baseUrl')}/`);
  }

  // Executa todo o cadastro pela interface
  cadastrarUsuario(user) {
    // Etapa 1 - Acessar Login / Signup
    loginPage.acessar();

    // Etapa 2 - Preencher nome e e-mail
    loginPage.iniciarCadastro(user.name, user.email);

    // Etapa 3 - Preencher formulário completo
    this.preencherFormulario(user);

    // Etapa 4 - Criar conta
    this.criarConta();

    // Etapa 5 - Verificar confirmação
    this.verificarContaCriada();

    // Etapa 6 - Continuar para a página inicial
    this.continuar();
  }
}

module.exports = new RegisterPage();
