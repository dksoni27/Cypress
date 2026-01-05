describe('User Registration - Valid Details', () => {

    it('should register a user with valid required details', () => {

        cy.generatePlusEmail('devendras', 'beckett.com').then((email) => {

            cy.getUsernameFromEmail(email).then((uniqueUser) => {


                cy.visit('https://www.beckett.com/register');

                // Email
                cy.get('#regemail').type(email);

                // Username
                cy.get('#regusername').type(uniqueUser);

                // Password
                cy.get('#regpassword').type('StrongPas@123');


                // It should be disabled or bypassed in test environment

                // Terms & Email checkbox
                cy.get('#terms').check();
                cy.get('#recEmailCheckbox').check();

                // Submit
                cy.get('#submitregistration').click();



            });
        });

    });

});
