describe('Beckett Registration + Activation via YOPmail Email Link', () => {
  const prefix = `test${Date.now()}`;
  const email = `${prefix}@yopmail.com`;

  it('Registers and verifies Beckett account via YOPmail activation link', () => {

    
    // Step 1: Register on Beckett
    cy.visit('https://www.beckett.com/register');
    cy.get('#regemail').type(email,{ force: true });
    cy.wait(5000);
    cy.get('#regusername').type(prefix,{ force: true });
    cy.wait(5000);
    cy.get('#regpassword').type('Test@1234',{ force: true });
    cy.get(':nth-child(2) > .well > .no_margin').click({ force: true });
    cy.wait(30000); // Wait to manually solve reCAPTCHA
     // Accept terms
    cy.get('#submitregistration').click({ force: true });

    cy.wait(15000); // Give time for email to arrive

    // Step 2: Open YOPmail and extract activation link
    cy.origin('https://yopmail.com', { args: { prefix } }, ({ prefix }) => {
      cy.visit('/en/');
      cy.get('#login').type(prefix);
      cy.get('#refreshbut > .md > .material-icons-outlined').click();

      // Click on Beckett email in inbox iframe
      cy.get('iframe#ifinbox').then(($iframe) => {
        const inboxBody = $iframe[0].contentDocument.body;
        cy.wrap(inboxBody).contains('Beckett').click();
      });

      // Find activation link in email body iframe
      cy.get('iframe#ifmail').then(($iframe) => {
        const mailBody = $iframe[0].contentDocument.body;

        // Grab activation URL and save in Cypress env
        cy.wrap(mailBody).find('a').contains(/activate/i).then(($link) => {
          const activationLink = $link.prop('href');
          Cypress.env('activationLink', activationLink);
        });
      });
    });

    // Step 3: Open the activation link and confirm account activation
    cy.then(() => {
      const activationLink = Cypress.env('activationLink');
      cy.visit(activationLink);
      cy.get('.vf-btn > .btn').click();
      cy.contains('Logout').should('exist');
    });
  });
});
