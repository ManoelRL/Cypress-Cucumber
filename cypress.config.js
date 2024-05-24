const cucumber = require('cypress-cucumber-preprocessor').default;
const { defineConfig } = require('cypress');
require('dotenv').config();
const fs = require('fs');
const path = require('path');


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
    },
    specPattern: 'cypress/e2e/step_definitions/*.feature',
    excludeSpecPattern: 'cypress/e2e/step_definitions/login.feature',
    env: {
      LOGIN_APPSMITH: process.env.LOGIN_APPSMITH,
      PASSWORD_APPSMITH: process.env.PASSWORD_APPSMITH,
      LOGIN_GESTOR: process.env.LOGIN_GESTOR,
      PASSWORD_GESTOR: process.env.PASSWORD_GESTOR,
    }
  },
});
