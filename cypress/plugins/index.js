/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  config.baseUrl = 'http://localhost:3000'

  Object.assign(config, {
    integrationFolder: 'cypress/e2e',
    ignoreTestFiles: '**/*.+(exercise|final|extra-)*.js',
  })

  return config
}
