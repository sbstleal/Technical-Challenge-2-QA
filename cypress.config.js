const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1200,
    viewportHeight: 800,
    pageLoadTimeout: 120000, // Aumentar o timeout para evitar problemas de carregamento
    supportFile: 'cypress/support/commands.js', // Configuração do arquivo de suporte
  },
});
