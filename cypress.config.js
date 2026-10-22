
const { defineConfig } = require('cypress');

const isBrowserStack = process.env.BROWSERSTACK === 'true';

module.exports = defineConfig({
  ...(isBrowserStack
    ? { reporter: 'spec' }
    : {
        reporter: 'cypress-mochawesome-reporter',
        reporterOptions: {
          reportDir: 'cypress/reports',
          charts: true,
          reportPageTitle: 'PGATS - Automacao Web',
          embeddedScreenshots: true,
          inlineAssets: true,
          saveAllAttempts: false,
        },
      }),

  e2e: {
    baseUrl: 'https://www.automationexercise.com',
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    viewportWidth: 1280,
    viewportHeight: 720,

    setupNodeEvents(on, config) {
      if (!isBrowserStack) {
        require('cypress-mochawesome-reporter/plugin')(on);
      }
      return config;
    },
  },
});
  