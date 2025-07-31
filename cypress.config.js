const { defineConfig } = require("cypress");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const mochawesome = require("cypress-mochawesome-reporter/plugin");

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config, {
    stepDefinitions: "cypress/support/step_definitions"
  });

  on("file:preprocessor", browserify.default(config));

  mochawesome(on); // Mochawesome plugin

  return config;
}

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    charts: true,
    reportPageTitle: "Cypress Cucumber Test Report",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    debug: true
  },

  e2e: {
    setupNodeEvents,
    specPattern: "cypress/e2e/**/*.feature",
    baseUrl: "https://www.amazon.com.br",
    supportFile: "cypress/support/e2e.js",
    experimentalModifyObstructiveThirdPartyCode: true,
    defaultCommandTimeout: 10000,
  },
});