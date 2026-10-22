const homePage = require('../../pages/HomePage');
const loginPage = require('../../pages/LoginPage');
const registerPage = require('../../pages/RegisterPage');
const header = require('../../components/HeaderComponent');
const { createUser } = require('../../factories/userFactory');

describe('TC02 - Login User with correct email and password', () => {
  let user;

  beforeEach(() => {
    //Gerar um usuário antes de cada teste
    user = createUser();

    // Cadastrar o usuário
    registerPage.cadastrarUsuario(user);

    // Confirmar que o cadastro realizou o login automaticamente
    header.verificarUsuarioLogado(user.name);

    // Realizar logout para iniciar o teste sem autenticação
    header.logout();

    // Confirmar que retornou à página de login
    loginPage.verificarLogout();
  });

  it('Deve realizar login com credenciais válidas e excluir a conta', () => {
    // Passo 1 e 2 - Iniciar o navegador e acessar a aplicação
    homePage.abrirPaginaInicial();

    // Passo 3 - Verificar que a página inicial está visível
    homePage.verificarPaginaInicial();

    // Passo 4 - Clicar em Signup / Login
    homePage.acessarLogin();

    // Passo 5 - Verificar Login to your account
    loginPage.verificarFormularioLogin();

    // Passo 6 - Informar e-mail e senha válidos
    loginPage.preencherLogin(user.email, user.password);

    // Passo 7 - Clicar em Login
    loginPage.enviarLogin();

    // Passo 8 - Verificar Logged in as username
    header.verificarUsuarioLogado(user.name);

    // Passo 9 e 10 - Clicar em Delete Account e Verificar ACCOUNT DELETED!
    header.excluirConta();

  });
});

describe('TC03 - Login User with incorrect email and password', () => {

  it('Deve exibir mensagem de erro ao realizar login com credenciais inválidas', () => {
    // Passos 1 e 2 - Iniciar o navegador e acessar a aplicação
    homePage.abrirPaginaInicial();

    // Passo 3 - Verificar que a página inicial está visível
    homePage.verificarPaginaInicial();

    // Passo 4 - Clicar em Signup / Login
    homePage.acessarLogin();

    // Passo 5 - Verificar Login to your account
    loginPage.verificarFormularioLogin();

    // Passo 6 - Informar e-mail e senha incorretos
    cy.fixture('invalidCredentials').then((data) => {
      loginPage.preencherLogin(
        data.invalidUser.email,
        data.invalidUser.password
      );

      // Passo 7 - Clicar em Login
      loginPage.enviarLogin();

      // Passo 8 - Verificar mensagem de erro
      loginPage.verificarLoginInvalido();
    });
  });
});

describe('TC04 - Logout User', () => {
  let user;

  beforeEach(() => {
    //Gerar um usuário exclusivo
    user = createUser();

    // Cadastrar usuário pela interface web
    registerPage.cadastrarUsuario(user);

    // Verificar que o cadastro realizou login automaticamente
    header.verificarUsuarioLogado(user.name);

    // Realizar logout para iniciar o teste sem autenticação
    header.logout();

    // Confirmar que retornou à página de login
    loginPage.verificarLogout();
  });

  it('Deve realizar logout e retornar à página de login', () => {
    // Passos 1 e 2 - Iniciar navegador e acessar a aplicação
    homePage.abrirPaginaInicial();

    // Passo 3 - Verificar que a página inicial está visível
    homePage.verificarPaginaInicial();

    // Passo 4 - Clicar em Signup / Login
    homePage.acessarLogin();

    // Passo 5 - Verificar 'Login to your account'
    loginPage.verificarFormularioLogin();

    // Passo 6 - Informar e-mail e senha válidos
    loginPage.preencherLogin(user.email, user.password);

    // Passo 7 - Clicar em Login
    loginPage.enviarLogin();

    // Passo 8 - Verificar 'Logged in as username'
    header.verificarUsuarioLogado(user.name);

    // Passo 9 - Clicar em Logout
    header.logout();

    // Passo 10 - Verificar retorno à página de login
    loginPage.verificarLogout();
  });

  afterEach(() => {
    // Limpeza: autenticar novamente para excluir a conta
    loginPage.realizarLogin(user.email, user.password);

    // Confirmar que o usuário está autenticado
    header.verificarUsuarioLogado(user.name);

    // Excluir a conta criada para o teste
    header.excluirConta();
  });
});