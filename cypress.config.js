const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://reqres.in/',
    defaultCommandTimeout: 5000,
    viewportWidth: 1000,
    viewportHeight: 600,
    video: false,

    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports/beckett",
      reportFilename: "report",
      overwrite: false,
      html: true,
      json: true,
      charts: true
    },
    env: {
      email: 'Devendras@beckett.com',
      password: 'Dksoni@27161627',
      W_paasword: 'Dksoni@2727',
      f_Name: 'dev',
      l_Name: 'soni',
      street_add: 'Camden Yards, 333 W Camden St',
      city: 'temp',
      pin_code: '123556',
      phone: '9167676767'
    }
  }
})
