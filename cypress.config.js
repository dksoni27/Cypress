const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 5000,
    viewportWidth: 1000,
    viewportHeight: 600,
    video: false, 

    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports/beckett1",
      reportFilename: "report",
      overwrite: false,
      html: true,
      json: true,
      charts: true
    }
  }
})
