const homePage = require('../../pages/HomePage');
const loginPage = require('../../pages/LoginPage');
const registerPage = require('../../pages/RegisterPage');
const header = require('../../components/HeaderComponent');
const { createUser } = require('../../factories/userFactory');

describe('TC01 - Register User', () => {
  it('Deve cadastrar um novo usuário e excluir a conta com sucesso', () => {
    // Factory: gera um usuário com e-mail exclusivo
    const user = createUser();

    // Etapas 1 e 2 - Iniciar navegador e acessar a aplicação
    homePage.acessar();

    // Etapa 3 - Verificar que a página inicial está visível
    homePage.verificarPaginaInicial();

    // Etapa 4 - Clicar em Signup / Login
    homePage.acessarLogin();

    // Etapa 5 - Verificar 'New User Signup!'
    loginPage.verificarFormularioCadastro();

    // Etapa 6 - Informar nome e e-mail
    loginPage.preencherCadastro(user.name, user.email);

    // Etapa 7 - Clicar em Signup
    loginPage.enviarCadastro();

    // Etapa 8 - Verificar 'ENTER ACCOUNT INFORMATION'
    registerPage.verificarFormularioCadastro();

    //Verificar dados iniciais (nome e e-mail)
    registerPage.verificarDadosIniciais(user);

    // Etapa 9 - Preencher dados da conta
    // Etapa 10 - Selecionar newsletter
    // Etapa 11 - Selecionar ofertas especiais
    registerPage.preencherInformacoesConta(user);

    // Etapa 12 - Preencher endereço e dados pessoais
    registerPage.preencherEndereco(user);

    // Etapa 13 - Clicar em Create Account
    registerPage.criarConta();

    // Etapa 14 - Verificar 'ACCOUNT CREATED!'
    registerPage.verificarContaCriada();

    // Etapa 15 - Clicar em Continue
    registerPage.continuar();

    // Etapa 16 - Verificar 'Logged in as username'
    header.verificarUsuarioLogado(user.name);

    // Etapa 17 - Clicar em Delete Account
    header.excluirConta();

    // Etapa 18 - Clicar em Continue
    cy.get('[data-qa="continue-button"]')
      .should('be.visible')
      .click();

    // Verifica o retorno à página inicial
    homePage.verificarPaginaInicial();
  });
});

describe('TC05 - Register User with existing email', () => {
  let user;

  beforeEach(() => {
    // Pré-condição: gerar um usuário exclusivo
    user = createUser();

    // Cadastrar usuário pela interface web
    registerPage.cadastrarUsuario(user);

    // Confirmar que o usuário foi cadastrado e autenticado
    header.verificarUsuarioLogado(user.name);

    // Realizar logout para permitir uma nova tentativa de cadastro
    header.logout();

    // Confirmar retorno à página de login
    loginPage.verificarLogout();
  });

  it('Deve exibir mensagem de erro ao cadastrar e-mail já existente', () => {
    // Passos 1 e 2 - Iniciar navegador e acessar a aplicação
    homePage.abrirPaginaInicial();

    // Passo 3 - Verificar que a página inicial está visível
    homePage.verificarPaginaInicial();

    // Passo 4 - Clicar em Signup / Login
    homePage.acessarLogin();

    // Passo 5 - Verificar 'New User Signup!'
    loginPage.verificarFormularioCadastro();

    // Passo 6 - Informar nome e e-mail já cadastrado
    loginPage.preencherCadastro(user.name, user.email);

    // Passo 7 - Clicar em Signup
    loginPage.enviarCadastro();

    // Passo 8 - Verificar mensagem de erro
    loginPage.verificarEmailExistente();
  });

  afterEach(() => {
    // Limpeza: acessar novamente a conta criada
    loginPage.realizarLogin(user.email, user.password);

    // Confirmar que o usuário está autenticado
    header.verificarUsuarioLogado(user.name);

    // Excluir a conta de teste
    header.excluirConta();
  });
});
