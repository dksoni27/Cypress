describe('yopmail email',()=>{
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
})