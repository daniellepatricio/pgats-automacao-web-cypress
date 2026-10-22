
/**
 * Comandos personalizados do Cypress
 * Projeto: PGATS - Automação Web
 *
 * Contém operações genéricas e reutilizáveis.
 * As interações específicas das páginas ficam nos
 * Page Objects e Components.
 */

// Acessar a página inicial
Cypress.Commands.add('acessarAplicacao', () => {
  cy.visit('/');
});

// Validar a URL atual
Cypress.Commands.add('validarUrl', (caminho) => {
  cy.url().should('include', caminho);
});

// Preencher um campo de texto
Cypress.Commands.add('preencherCampo', (seletor, valor) => {
  cy.get(seletor)
    .should('be.visible')
    .clear()
    .type(String(valor));
});

// Clicar em um elemento visível e habilitado
Cypress.Commands.add('clicarElemento', (seletor) => {
  cy.get(seletor)
    .should('be.visible')
    .and('be.enabled')
    .click();
});

// Verificar se um elemento está visível
Cypress.Commands.add('verificarElementoVisivel', (seletor) => {
  cy.get(seletor)
    .should('be.visible');
});

// Verificar texto de um elemento
Cypress.Commands.add('verificarTexto', (seletor, texto) => {
  cy.get(seletor)
    .should('be.visible')
    .and('contain.text', texto);
});

// Rolar até um elemento
Cypress.Commands.add('rolarAteElemento', (seletor) => {
  cy.get(seletor)
    .scrollIntoView()
    .should('be.visible');
});
