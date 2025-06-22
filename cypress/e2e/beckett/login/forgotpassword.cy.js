describe('Forgot password test', () => {

    const email = 'test1234@yopmail.com'
    const wpassword = 'Dks@1234';
    const newPass = "Qwer@1234"


    it('forgot password test', () => {

        cy.visit('https://www.beckett.com/')
        cy.get('.btn-outline-primary-new-color').should('be.visible').click()
        cy.get('#loginEmail').type(email);
        cy.get('#loginPassword').type(wpassword)

        cy.contains('a', 'Forgot Password').should('be.visible').click()
        cy.contains('h1', 'Forgot Password').should('be.visible')

        cy.get('#email').should('be.visible').type(email, { force: true });
        cy.get('#g-recaptcha-1 > [style="width: 304px; height: 78px;"] > div > iframe').should('be.visible').click()
        cy.wait(30000);

        cy.get('.sentPassReset').should('be.visible').click()

        cy.wait(10000);

        cy.origin('https://yopmail.com', { args: { email } }, ({ email }) => {
            cy.visit('/en/');
            cy.get('#login').type(email);
            cy.get('#refreshbut > .md > .material-icons-outlined').click();

            cy.get('iframe#ifinbox').then(($iframe) => {
                const inbox = $iframe[0].contentDocument.body;
                cy.wrap(inbox).contains('Confirm Password Reset').click(); // Adjust text if needed
            });

            cy.get('iframe#ifmail').then(($iframe) => {
                const mailBody = $iframe[0].contentDocument.body;
                cy.wrap(mailBody).invoke('text').then((text) => {
                    const otpMatch = text.match(/\b\d{6}\b/);
                    expect(otpMatch, 'OTP found in email').to.exist;
                    Cypress.env('otpCode', otpMatch[0]);
                });
            });

        });

        cy.then(() => {
            const otp = Cypress.env('otpCode');

            cy.visit('https://www.beckett.com/register/confirm/'); // Adjust if different
            cy.get('input[name="verification code"]').type(otp);
            cy.get('button[type="submit"]').click();

            // Step 4: Enter new password
            cy.get('#password').type(newPass);
            cy.get('#confirmPassword').type(newPass);
            cy.get('button[type="submit"]').click();
        })

    })

})