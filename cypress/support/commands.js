// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';

Cypress.Commands.add('Login', () => {
    cy.visit('https://www.beckett.com/login');
    cy.get('#loginEmail').should('be.visible').type(Cypress.env('email'));
    cy.get('#loginPassword').should('be.visible').type(Cypress.env('password'));
    cy.get('#btn_login', { timeout: 10000 }).should('be.visible').click();
})

Cypress.Commands.add('generatePlusEmail',(baseUser, domain) => {
    const value = Math.floor(Math.random() * 10000)
        .toString()
        .padStart(4, '0');

    return `${baseUser}+${value}@${ domain }`;
});
Cypress.Commands.add('getUsernameFromEmail', (email) => {
  return email
    .split('@')[0]
    .replace(/\+/g, '_');
});


