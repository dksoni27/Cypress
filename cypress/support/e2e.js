// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignore errors related to googletag
    if (err.message.includes('googletag is not defined')) {
      return false; // prevents test from failing
    }
    if (err.message.includes('Minified React error #425')) {
      return false;
    }

    if (err.message.includes('No reCAPTCHA clients exist')) {
      return false; // prevent Cypress from failing the test
    }
  });

  