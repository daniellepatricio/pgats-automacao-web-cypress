# Projeto Final — Automação de Testes Web com Cypress

### Pós-Graduação em Automação de Testes de Software | PGATS — Turma 3

![Cypress](https://img.shields.io/badge/Cypress-13.7.3-17202C?logo=cypress&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-24.19.0-339933?logo=node.js&logoColor=white)
![Testes E2E](https://img.shields.io/badge/Testes-End--to--End-blue)
![PGATS](https://img.shields.io/badge/PGATS-Turma%203-purple)
![BrowserStack](https://img.shields.io/badge/BrowserStack-Cross--Browser-orange)
![Mochawesome](https://img.shields.io/badge/Reports-Mochawesome-brightgreen)

---

## Sobre o Projeto

Este repositório contém o projeto de conclusão da disciplina de **Automação de Testes Web com Cypress**, desenvolvido por **Danielle Patricio**, como parte da **Pós-Graduação em Automação de Testes de Software — Turma PGATS 3**.

O projeto consiste na implementação de testes funcionais automatizados de ponta a ponta (**End-to-End — E2E**) utilizando **Cypress e JavaScript**, com base nos casos de teste disponibilizados pela plataforma [Automation Exercise](https://automationexercise.com).

Foram selecionados **10 casos de teste**, abrangendo cenários positivos e negativos relacionados às principais funcionalidades de uma aplicação de comércio eletrônico:

- Cadastro e autenticação de usuários.
- Login com credenciais válidas e inválidas.
- Logout e validação de e-mail já cadastrado.
- Navegação e visualização de produtos.
- Pesquisa de produtos.
- Assinatura de newsletter.
- Adição de produtos ao carrinho e finalização de compras.

O desenvolvimento tem como objetivo aplicar os conhecimentos adquiridos durante a disciplina, utilizando boas práticas de automação, organização de código e validação de funcionalidades web. O projeto também contempla execução remota no **BrowserStack**, relatórios HTML locais com **Mochawesome** e proteção de credenciais por meio de variáveis de ambiente.

---

## Objetivos do Projeto

- Aplicar os conhecimentos teóricos e práticos adquiridos durante a disciplina de Automação de Testes Web com Cypress.
- Desenvolver testes funcionais automatizados utilizando Cypress e JavaScript.
- Automatizar os casos de teste selecionados da plataforma Automation Exercise.
- Validar cenários positivos e negativos da aplicação.
- Implementar asserções para verificar os resultados esperados.
- Organizar os testes de maneira clara e estruturada.
- Aplicar boas práticas de automação, incluindo reutilização de código e separação de responsabilidades.
- Demonstrar a utilização de testes End-to-End na validação de fluxos de uma aplicação web.
- Executar testes cross-browser em infraestrutura remota do BrowserStack.
- Gerar relatórios HTML locais com Mochawesome.
- Proteger credenciais por meio de `.env`, `.gitignore` e variáveis de ambiente.

---

## Aplicação Utilizada nos Testes

**Aplicação:** Automation Exercise

**URL:** https://automationexercise.com

**Documentação dos casos de teste:** https://automationexercise.com/test_cases

O Automation Exercise é uma plataforma pública destinada à prática de testes de software e automação.

A aplicação simula um ambiente de comércio eletrônico (e-commerce), disponibilizando funcionalidades como cadastro de usuários, autenticação, consulta e pesquisa de produtos, gerenciamento do carrinho de compras e finalização de pedidos.

Essas funcionalidades permitem a implementação de cenários automatizados que representam interações reais dos usuários com uma aplicação web.

---

## Casos de Teste Automatizados

O projeto contempla a implementação dos **casos de teste**, conforme a documentação oficial do Automation Exercise.

### 1. Cadastro e Autenticação de Usuários

| Caso de Teste | Descrição | Tipo |
|---|---|---|
| TC01 | Cadastrar novo usuário | Positivo |
| TC02 | Realizar login com e-mail e senha corretos | Positivo |
| TC03 | Realizar login com e-mail e senha incorretos | Negativo |
| TC04 | Realizar logout do usuário | Positivo |
| TC05 | Cadastrar usuário com e-mail já existente | Negativo |

**Validações realizadas:**

- Cadastro de um novo usuário na aplicação.
- Autenticação utilizando credenciais válidas.
- Exibição de mensagens de erro para credenciais inválidas.
- Encerramento da sessão do usuário.
- Validação da mensagem de erro ao tentar cadastrar um e-mail já existente.

### 2. Produtos e Pesquisa

| Caso de Teste | Descrição | Tipo |
|---|---|---|
| TC08 | Verificar a página de produtos e os detalhes de um produto | Positivo |
| TC09 | Pesquisar um produto | Positivo |

**Validações realizadas:**

- Acesso à página de listagem de produtos.
- Exibição dos produtos disponíveis.
- Navegação para a página de detalhes de um produto.
- Verificação das informações apresentadas.
- Pesquisa de produtos pelo nome.
- Validação dos resultados retornados pela pesquisa.

### 3. Assinatura de Newsletter

| Caso de Teste | Descrição | Tipo |
|---|---|---|
| TC10 | Verificar a funcionalidade de assinatura na página inicial | Positivo |

**Validações realizadas:**

- Localização da seção de assinatura na página inicial.
- Preenchimento do endereço de e-mail.
- Envio da solicitação de assinatura.
- Verificação da mensagem de confirmação.

### 4. Carrinho de Compras e Checkout

| Caso de Teste | Descrição | Tipo |
|---|---|---|
| TC15 | Finalizar pedido realizando cadastro antes do checkout | Positivo |
| TC16 | Finalizar pedido realizando login antes do checkout | Positivo |

**Validações realizadas:**

- Cadastro de usuário antes da finalização da compra.
- Login de usuário antes da finalização da compra.
- Adição de produtos ao carrinho.
- Verificação dos produtos adicionados.
- Acesso ao checkout.
- Validação dos dados de endereço e resumo do pedido.
- Preenchimento das informações de pagamento.
- Confirmação da finalização do pedido.
- Verificação da mensagem de sucesso da compra.

---

## Resumo da Cobertura dos Testes

| Funcionalidade | Casos de Teste | Quantidade |
|---|---|---|
| Cadastro e autenticação | TC01, TC02, TC03, TC04, TC05 | 5 |
| Produtos e pesquisa | TC08, TC09 | 2 |
| Assinatura de newsletter | TC10 | 1 |
| Carrinho e checkout | TC15, TC16 | 2 |
| **Total** | **10 casos de teste** | **10** |

Os cenários automatizados contemplam funcionalidades importantes de uma aplicação de comércio eletrônico, desde o cadastro e autenticação de usuários até a pesquisa de produtos e conclusão de compras.

---

## Tecnologias e Ferramentas

| Tecnologia | Versão | Finalidade |
|---|---|---|
| Cypress | 13.7.3 | Framework de automação de testes web End-to-End (E2E) |
| JavaScript | ES6 | Linguagem utilizada no desenvolvimento dos testes |
| Node.js | 24.19.0 | Ambiente de execução JavaScript |
| Cypress XPath | ^2.0.1 | Plugin para utilização de seletores XPath |
| BrowserStack Cypress CLI | ^1.37.1 | Execução remota dos testes em navegadores na nuvem |
| Cypress Mochawesome Reporter | ^5.0.0 | Relatórios HTML de testes locais |
| dotenv-cli | Conforme `package-lock.json` | Carregamento das variáveis do arquivo `.env` |
| npm | — | Gerenciamento de dependências |
| Visual Studio Code | — | Ambiente de desenvolvimento |
| Git | — | Controle de versão |
| GitHub | — | Hospedagem e documentação do projeto |

### Versões de Referência

O ambiente de desenvolvimento utiliza as seguintes versões:

- **Cypress:** 13.7.3
- **Node.js:** 24.19.0
- **Cypress XPath:** ^2.0.1
- **BrowserStack Cypress CLI:** ^1.37.1
- **Cypress Mochawesome Reporter:** ^5.0.0
- **JavaScript:** ES6
- **Sistema de módulos:** CommonJS

As dependências do projeto estão definidas no arquivo `package.json`. Além do Cypress e dos plugins, utiliza-se `dotenv-cli` para carregar credenciais sem incluí-las em arquivos versionados. Para instalar o carregador de variáveis:

```bash
npm install --save-dev dotenv-cli
```

As principais dependências de desenvolvimento são `cypress`, `cypress-xpath`, `browserstack-cypress-cli`, `cypress-mochawesome-reporter` e `dotenv-cli`. As versões efetivamente instaladas são registradas no `package-lock.json`.

O projeto utiliza **duas configurações independentes**:

- `cypress.config.js`: execução local, com Mochawesome.
- `cypress.browserstack.config.js`: execução remota, com reporter `spec` e integração de relatórios do BrowserStack.

---

## Estrutura do Projeto

A estrutura abaixo representa a organização proposta para os arquivos de automação, com base nas funcionalidades contempladas pelo projeto.

```text
pgats-automacao-web-trabalho-final/
│
├── .github/
│   └── workflows/
│       ├── main.yml                # Cypress no GitHub Actions + Mochawesome
│       └── browserstack.yml        # BrowserStack acionado pelo GitHub Actions
│
├── cypress/
│   ├── e2e/
│   │   ├── auth/
│   │   ├── contact/
│   │   ├── products/
│   │   ├── subscription/
│   │   └── checkout/
│   ├── components/
│   ├── factories/
│   ├── pages/
│   ├── fixtures/
│   └── support/
│       ├── commands.js
│       ├── e2e.js
│       └── e2e.browserstack.js
│
├── .env                         # Local e privado (não versionar)
├── .env.example                 # Modelo sem segredos
├── .gitignore
├── browserstack.json            # Configuração remota, sem credenciais
├── cypress.config.js            # Configuração local / Mochawesome
├── cypress.browserstack.config.js
├── package.json
├── package-lock.json
└── README.md
```

### Descrição dos Diretórios e Arquivos

- **`.github/workflows/main.yml`**: workflow manual que executa Cypress no runner Ubuntu do GitHub Actions e publica os artefatos do Mochawesome, screenshots e vídeos quando disponíveis.

- **`.github/workflows/browserstack.yml`**: workflow manual que inicia a execução Cypress no BrowserStack usando GitHub Actions Secrets, sem exigir `.env` no runner.

- **`cypress/e2e/`**: contém os cenários de testes automatizados End-to-End (E2E), organizados por funcionalidades da aplicação:
  - **`auth/`**: testes de cadastro de usuários, login, logout e validação de credenciais.
  - **`contact/`**: testes de preenchimento e envio do formulário de contato.
  - **`products/`**: testes de listagem, visualização de detalhes e pesquisa de produtos.
  - **`subscription/`**: testes de inscrição na newsletter.
  - **`checkout/`**: testes de carrinho de compras, finalização de pedidos e pagamento.

- **`cypress/components/`**: contém componentes reutilizáveis da interface, seguindo o padrão **Component Object Model (COM)**. Centraliza elementos e interações compartilhados entre diferentes páginas, como cabeçalho, modal de confirmação do carrinho e formulário de inscrição.

- **`cypress/factories/`**: responsável pela geração dinâmica de dados de teste, utilizando o **Factory Pattern**. Permite criar usuários com informações únicas, reduzindo conflitos entre execuções e facilitando a reutilização dos dados nos cenários automatizados.

- **`cypress/pages/`**: contém as classes responsáveis pelo mapeamento dos elementos e pela implementação das ações e validações das páginas, seguindo o padrão **Page Object Model (POM)**. Promove a separação entre a lógica de interação com a aplicação e os cenários de teste, facilitando a manutenção e a reutilização do código.

- **`cypress/fixtures/`**: armazena dados de teste em arquivos externos, principalmente no formato JSON, como credenciais inválidas, informações de produtos, dados de contato, inscrições, pedidos e pagamentos.

- **`cypress/support/commands.js`**: arquivo destinado à definição de comandos personalizados e reutilizáveis do Cypress, permitindo centralizar operações comuns aos testes.

- **`cypress/support/e2e.js`**: suporte da execução local, com comandos personalizados, XPath e registro do Mochawesome.

- **`cypress/support/e2e.browserstack.js`**: suporte da execução remota, com comandos personalizados e XPath, sem registrar o Mochawesome.

- **`cypress.config.js`**: configuração local do Cypress, com URL base, localização dos testes, timeouts, dimensões e reporter Mochawesome.

- **`cypress.browserstack.config.js`**: configuração exclusiva para BrowserStack, com reporter `spec` e arquivo de suporte remoto.

- **`browserstack.json`**: define navegadores, projeto, build, dependências e parâmetros de execução remota; não armazena credenciais.

- **`.env`**: armazena localmente `BROWSERSTACK_USERNAME` e `BROWSERSTACK_ACCESS_KEY`; não deve ser enviado ao Git.

- **`.env.example`**: modelo público das variáveis necessárias, sem valores sensíveis.

- **`.gitignore`**: impede o versionamento de segredos, dependências e artefatos gerados.

- **`package.json`**: gerencia as dependências, os scripts de execução e as informações gerais do projeto.

- **`package-lock.json`**: registra as versões exatas das dependências instaladas, contribuindo para a consistência e a reprodutibilidade do ambiente de testes.

---

## Abordagem de Automação

O projeto utiliza conceitos fundamentais de automação de testes web, buscando garantir clareza, organização e facilidade de manutenção.

### Testes End-to-End (E2E)

Os testes simulam interações reais dos usuários com a aplicação por meio do navegador, validando os fluxos funcionais desde o início até o resultado esperado.

### Testes Positivos e Negativos

Foram selecionados cenários que verificam tanto o comportamento esperado da aplicação quanto o tratamento de situações inválidas, como tentativas de login com credenciais incorretas e cadastro com e-mail já existente.

### Organização dos Testes

A organização por funcionalidades facilita a identificação dos cenários e a manutenção dos scripts automatizados.

A utilização de funções e comandos reutilizáveis contribui para reduzir duplicações e melhorar a legibilidade do código.

### Asserções e Validações

As asserções do Cypress são utilizadas para verificar diferentes comportamentos da aplicação, incluindo:

- Visibilidade de elementos.
- Navegação entre páginas.
- Mensagens de confirmação e erro.
- Validação de formulários.
- Informações dos produtos.
- Conteúdo do carrinho de compras.
- Confirmação de pedidos.

### Seletores de Elementos

O Cypress permite localizar elementos da interface utilizando seletores CSS e outros recursos de identificação.

A escolha de seletores adequados contribui para a estabilidade e a manutenção dos testes automatizados.

---

## Pré-requisitos

Para instalar e executar o projeto, é necessário possuir:

- Node.js (versão utilizada no desenvolvimento: 24.19.0).
- npm compatível com a versão instalada do Node.js.
- Git.
- Navegador compatível com Cypress.
- Visual Studio Code (recomendado).
- Conta no BrowserStack para execução remota (opcional para testes locais).

**Observação:** A versão do Node.js corresponde ao ambiente de desenvolvimento informado. Recomenda-se verificar a compatibilidade do ambiente com o Cypress 13.7.3 antes da execução.

Para verificar as versões instaladas, execute:

```bash
node -v
npm -v
```

---

## Instalação e Configuração

### 1. Clonar o Repositório

Abra o terminal e execute:

```bash
git clone https://github.com/daniellepatricio/pgats-automacao-web-cypress.git
```

Acesse a pasta do projeto:

```bash
cd pgats-automacao-web-cypress
```

### 2. Instalar as Dependências

Execute o comando:

```bash
npm install
```

Esse comando instalará as dependências definidas no arquivo `package.json`.

### 3. Verificar a Instalação do Cypress

```bash
npx cypress verify
```

Para consultar a versão do Cypress:

```bash
npx cypress --version
```


### 4. Configurar as Credenciais do BrowserStack com .env

Crie um arquivo `.env` na raiz do projeto (ou copie `.env.example`) e preencha com **credenciais novas**, obtidas na sua conta BrowserStack:

```dotenv
BROWSERSTACK_USERNAME=SEU_USERNAME
BROWSERSTACK_ACCESS_KEY=SUA_NOVA_ACCESS_KEY
```

**Nunca envie o `.env` ao GitHub.** No `.gitignore`, inclua:

```gitignore
.env
.env.*
!.env.example
node_modules/
cypress/videos/
cypress/screenshots/
cypress/reports/
```

O arquivo `.env.example`, que pode ser versionado, deve conter somente:

```dotenv
BROWSERSTACK_USERNAME=
BROWSERSTACK_ACCESS_KEY=
```

Se `.env` já tiver sido rastreado, execute `git rm --cached .env` e confirme com `git status`. Se uma chave foi publicada anteriormente, **revogue-a/regere-a no BrowserStack**: o `.gitignore` não apaga segredos do histórico do Git.

### 5. Configurar o BrowserStack

No `browserstack.json`, **não inclua o bloco `auth` com credenciais reais**. A CLI pode receber `BROWSERSTACK_USERNAME` e `BROWSERSTACK_ACCESS_KEY` do ambiente carregado pelo `dotenv-cli`.

```json
{
  "browsers": [
    { "browser": "chrome", "os": "Windows 11", "versions": ["latest", "latest-1"] }
  ],
  "run_settings": {
    "cypress_config_file": "cypress.browserstack.config.js",
    "project_name": "PGATS - Automacao Web",
    "build_name": "Cypress - Trabalho Final",
    "parallels": 1,
    "headless": true,
    "npm_dependencies": {
      "cypress": "13.7.3",
      "browserstack-cypress-cli": "1.37.1",
      "cypress-mochawesome-reporter": "5.0.0",
      "cypress-xpath": "2.0.1"
    }
  },
  "connection_settings": {
    "local": false,
    "local_identifier": null,
    "local_mode": null,
    "local_config_file": null
  },
  "disable_usage_reporting": false
}
```

O parâmetro `local: false` é adequado porque a aplicação Automation Exercise é pública. O projeto utiliza duas versões do Chrome, com uma sessão simultânea (`parallels: 1`). A propriedade `npm_dependencies` permanece dentro de `run_settings`.

### 6. Separar a Configuração Local e Remota

Mantenha o Mochawesome em `cypress.config.js` (incluindo seu plugin em `setupNodeEvents`) e em `cypress/support/e2e.js`:

```javascript
import './commands';
import 'cypress-xpath';
import 'cypress-mochawesome-reporter/register';
```

No arquivo `cypress.browserstack.config.js`, utilize o reporter padrão e o suporte específico:

```javascript
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'spec',
  e2e: {
    baseUrl: 'https://www.automationexercise.com',
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.browserstack.js',
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    viewportWidth: 1280,
    viewportHeight: 720
  }
});
```

O suporte `cypress/support/e2e.browserstack.js` deve conter:

```javascript
import './commands';
import 'cypress-xpath';
```

Assim, o Mochawesome fica restrito à execução local. **Não é necessário** adicionar `"env": { "BROWSERSTACK": "true" }` ao `browserstack.json`.

### 7. Configurar os Scripts npm

Atualize a seção `scripts` de `package.json`:

```json
"scripts": {
  "test": "cypress run",
  "cy:open": "cypress open",
  "cy:run": "cypress run --browser chrome",
  "test:browserstack": "dotenv -- browserstack-cypress run",
  "test:browserstack:headed": "dotenv -- browserstack-cypress run --headed"
}
```

O `dotenv-cli` carrega o `.env` no processo da CLI, sem expor os valores no `package.json` ou no `browserstack.json`. Em pipelines, use secrets do provedor de CI em vez de publicar um arquivo `.env`.

---

## Execução dos Testes

Os testes podem ser executados de maneira interativa ou diretamente pelo terminal.

### 1. Executar no Modo Interativo

```bash
npx cypress open
```

Esse comando abre a interface do Cypress, permitindo selecionar o navegador e executar os testes individualmente.

### 2. Executar Todos os Testes em Modo Headless

```bash
npx cypress run
```

Esse comando executa os testes automaticamente, sem a necessidade de interação manual com o navegador.

### 3. Executar os Testes no Google Chrome

```bash
npx cypress run --browser chrome
```

O Google Chrome deve estar instalado no ambiente de execução.

### 4. Executar Testes de uma Funcionalidade Específica

Exemplo de execução dos testes de autenticação:

```bash
npx cypress run --spec "cypress/e2e/ui/auth/*.cy.js"
```

O caminho informado deve corresponder à localização real dos arquivos de teste no projeto.

### 5. Executar os Scripts Configurados no package.json

Para executar localmente no Chrome, com geração de relatório Mochawesome:

```bash
npm run cy:run
```

Para abrir a interface interativa:

```bash
npm run cy:open
```

Para validar localmente a configuração específica do BrowserStack:

```bash
npx cypress run --config-file cypress.browserstack.config.js --browser chrome
```

Para executar remotamente no BrowserStack, carregando as credenciais do `.env`:

```bash
npm run test:browserstack
```

Para solicitar execução remota em modo headed:

```bash
npm run test:browserstack:headed
```

A execução remota depende de uma conta BrowserStack válida e de credenciais disponíveis no ambiente. **A criação do build não significa, por si só, que os testes passaram**: confira os resultados no dashboard.

---

## Integração Contínua — GitHub Actions

O projeto possui **dois workflows independentes**, armazenados em `.github/workflows/`, ambos acionados manualmente pela aba **Actions** do GitHub (`workflow_dispatch`). A execução no GitHub Actions não exige o arquivo `.env` local.

| Workflow | Arquivo | Onde os testes são executados | Configuração | Relatórios |
|---|---|---|---|---|
| **Web E2E Tests - Cypress** | `main.yml` | Runner Ubuntu do GitHub Actions (Electron) | `cypress.config.js` | Mochawesome e artefatos do workflow |
| **BrowserStack - Cypress E2E Tests** | `browserstack.yml` | Navegadores remotos do BrowserStack | `browserstack.json` → `cypress.browserstack.config.js` | Dashboard do BrowserStack |

### 1. Pipeline Cypress — main.yml

O workflow `.github/workflows/main.yml` faz checkout do código, configura o Node.js, instala dependências com `npm ci`, verifica o Cypress e executa os testes no Electron. Ao final, tenta disponibilizar relatórios, screenshots e vídeos como artefatos, mesmo que haja falhas nos testes (desde que o job não tenha sido cancelado).

```yaml
name: Web E2E Tests - Cypress

on:
  workflow_dispatch:

jobs:
  e2e-tests:
    name: Cypress E2E Tests
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '24'
          cache: 'npm'

      - name: Check Node.js and npm versions
        run: |
          node --version
          npm --version

      - name: Install dependencies
        run: npm ci

      - name: Verify Cypress installation
        run: npx cypress verify

      - name: Run Cypress E2E tests
        run: npx cypress run --browser electron

      - name: Upload Cypress reports and screenshots
        if: ${{ !cancelled() }}
        uses: actions/upload-artifact@v4
        with:
          name: cypress-e2e-reports
          path: |
            cypress/reports/
            cypress/screenshots/
            cypress/videos/
          if-no-files-found: warn
          retention-days: 30
```

**Observações:** o relatório HTML deve ser configurado para ser salvo em `cypress/reports/` (por exemplo, via `reporterOptions.reportDir` no `cypress.config.js`). A existência de vídeos depende da configuração do Cypress. A combinação Node.js 24 + Cypress 13.7.3 deve ser validada na pipeline; se necessário, use uma versão compatível. `npm ci` requer `package-lock.json` atualizado e versionado.

### 2. Pipeline BrowserStack — browserstack.yml

O workflow `.github/workflows/browserstack.yml` configura o ambiente do GitHub Actions, valida a presença das credenciais e inicia os testes remotos com `npx browserstack-cypress run`. O BrowserStack utiliza o `browserstack.json` para selecionar o Chrome no Windows 11 nas versões `latest` e `latest-1`, com o arquivo de configuração remoto do Cypress e relatórios próprios.

```yaml
name: BrowserStack - Cypress E2E Tests

on:
  workflow_dispatch:

jobs:
  browserstack-tests:
    name: Run Cypress Tests on BrowserStack
    runs-on: ubuntu-latest

    env:
      BROWSERSTACK_USERNAME: ${{ secrets.BROWSERSTACK_USERNAME }}
      BROWSERSTACK_ACCESS_KEY: ${{ secrets.BROWSERSTACK_ACCESS_KEY }}

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '22'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Validate BrowserStack credentials
        shell: bash
        run: |
          if [[ -z "$BROWSERSTACK_USERNAME" || -z "$BROWSERSTACK_ACCESS_KEY" ]]; then
            echo "::error::BrowserStack credentials are missing. Configure GitHub Actions Secrets."
            exit 1
          fi

      - name: Run BrowserStack Cypress tests
        run: npx browserstack-cypress run
```

A configuração remota **não carrega o Mochawesome**: `cypress.browserstack.config.js` usa o reporter `spec` e o suporte `cypress/support/e2e.browserstack.js`. Os resultados e as evidências ficam disponíveis no [BrowserStack Automate Dashboard](https://automate.browserstack.com/dashboard). O runner do GitHub apenas aciona e acompanha a execução; os navegadores são executados na infraestrutura do BrowserStack.

### 3. Configurar os GitHub Actions Secrets

Para executar `browserstack.yml` com segurança, acesse o repositório no GitHub em **Settings → Secrets and variables → Actions → New repository secret** e cadastre:

| Nome do secret | Conteúdo |
|---|---|
| `BROWSERSTACK_USERNAME` | Nome de usuário da conta BrowserStack |
| `BROWSERSTACK_ACCESS_KEY` | Access Key ativa da conta BrowserStack |

Não inclua credenciais reais nos arquivos `.yml`, `browserstack.json`, `README.md` ou no histórico do Git. O `.env` continua sendo utilizado apenas no computador local, enquanto os GitHub Actions Secrets são injetados como variáveis de ambiente na pipeline. Se uma chave já foi exposta, revogue-a e gere outra.

### 4. Executar as pipelines manualmente

1. Salve os arquivos em `.github/workflows/main.yml` e `.github/workflows/browserstack.yml`.
2. Faça commit e push dos workflows e dos arquivos de configuração necessários para o repositório.
3. No GitHub, abra **Actions** e selecione **Web E2E Tests - Cypress** ou **BrowserStack - Cypress E2E Tests**.
4. Clique em **Run workflow** e acompanhe os logs de execução.
5. Para a execução Cypress no runner, consulte **Artifacts** ao final do workflow; para a execução remota, consulte o dashboard do BrowserStack.

Esses workflows são **manuais**: não são disparados automaticamente em cada push ou pull request. Os resultados dependem da disponibilidade dos ambientes, da configuração do projeto e da execução efetiva dos testes.

---

## Resultados da Execução

Durante a execução dos testes, o Cypress apresenta informações sobre:

- Quantidade de testes executados.
- Testes aprovados (Passed).
- Testes reprovados (Failed).
- Tempo de execução.
- Mensagens de erro.
- Detalhes das falhas encontradas.

Essas informações auxiliam na identificação de possíveis problemas e na análise dos resultados da automação.

### Relatórios Locais — Mochawesome

A execução com `cypress.config.js` utiliza `cypress-mochawesome-reporter` para gerar um relatório HTML, com detalhes dos testes e, conforme a configuração, capturas de tela. O diretório de saída pode ser definido em `reporterOptions.reportDir`, por exemplo `cypress/reports`.

### Relatórios Remotos — BrowserStack

A execução com `cypress.browserstack.config.js` utiliza o reporter `spec` e os recursos de relatório do BrowserStack. Os resultados, logs e evidências disponíveis podem ser consultados em [BrowserStack Automate](https://automate.browserstack.com/).

Com 10 testes e duas versões do Chrome configuradas, são esperadas até **20 execuções individuais** em um build completo, considerando que todos os testes sejam descobertos e executados em ambas as versões. Essa contagem não representa 20 casos de teste distintos.

### Segurança das Credenciais

As credenciais ficam exclusivamente no `.env` local ou nos secrets do ambiente de CI. O repositório público deve conter apenas `.env.example` e arquivos de configuração sem valores sensíveis. Se uma Access Key já tiver sido divulgada, é necessário regenerá-la.

A execução em modo interativo também permite acompanhar visualmente os comandos e as asserções realizadas durante os testes.

---

## Referências

- [Documentação Oficial do Cypress](https://docs.cypress.io)
- [Automation Exercise — Página Inicial](https://automationexercise.com)
- [Automation Exercise — Casos de Teste](https://automationexercise.com/test_cases)
- [Documentação do Node.js](https://nodejs.org)
- [Documentação do JavaScript — MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [BrowserStack — Cypress](https://www.browserstack.com/docs/automate/cypress)
- [BrowserStack — npm Packages](https://www.browserstack.com/docs/automate/cypress/npm-packages)
- [Cypress Mochawesome Reporter](https://www.npmjs.com/package/cypress-mochawesome-reporter)
- [dotenv-cli](https://www.npmjs.com/package/dotenv-cli)
- [GitHub Actions — Secrets](https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions)
- [GitHub Actions — Workflows](https://docs.github.com/en/actions/concepts/workflows-and-actions/workflows)
- [GitHub Actions — Upload Artifact](https://github.com/actions/upload-artifact)

---

## Considerações Finais

Este projeto representa a aplicação prática dos conhecimentos adquiridos durante a disciplina de **Automação de Testes Web com Cypress**, integrante da Pós-Graduação em Automação de Testes de Software — PGATS 3.

A implementação dos 10 casos de teste permitiu exercitar conceitos de automação funcional, testes End-to-End, criação de asserções, manipulação de elementos web e organização de scripts automatizados.

O projeto também reforça a importância da automação de testes como ferramenta de apoio à qualidade de software, contribuindo para a identificação de falhas e a validação de funcionalidades críticas de aplicações web. A integração com BrowserStack amplia a validação em navegadores remotos, enquanto o Mochawesome facilita a análise dos resultados locais. O uso de `.env`, `.gitignore` e GitHub Actions Secrets reforça as boas práticas de proteção de credenciais em repositórios públicos. Os dois workflows manuais permitem demonstrar a integração contínua no runner do GitHub e a execução remota no BrowserStack.

---

## Autora

**Danielle Patricio**

QA Engineer | Software Test Automation

**Formação:** Pós-Graduação em Automação de Testes de Software

**Turma:** PGATS 3

**Disciplina:** Automação de Testes Web com Cypress

**Projeto:** Trabalho de Conclusão da Disciplina

**Aplicação utilizada:** [Automation Exercise](https://automationexercise.com)

---

*Projeto desenvolvido para fins acadêmicos, como parte das atividades da Pós-Graduação em Automação de Testes de Software — PGATS 3.*