describe('Verify Grading Certificate', () => {

    // Reusable function to verify a certificate
    const verifyCertificate = (certType, certNumber) => {
        cy.visit('https://www.beckett.com/');
        cy.get('.navbar-toggler-icon').click();
        cy.get('.justify-content-between').click();
        cy.get('.flex-column > [href="/grading"]').click();
        cy.get('.VerifySN2_verify__MI3JL > .content > .btn').click();
        cy.get('.field > .Input_input__kPl3n > div > .form-control').type(certNumber);
        cy.contains('label', certType).click();
        cy.get('.field > .btn > .Button_content___KQ5I > span').click()

        // Wait and assert the verification result page appears
        // Adjust these selectors to the actual elements that show certificate details on the page
        cy.get('.cert > .title').should('be.visible');
        cy.get('.details > .title').should('be.visible');

        // Optional: verify the displayed certificate number or type matches input
        cy.get('.cert > .number').should('contain.text', certNumber);

    };

    it('Verify certificate for BGS using valid certification number', () => {
        verifyCertificate('BGS', '3432341');

    });

    it('Verify certificate for BVG using valid certification number', () => {

        verifyCertificate('BVG', '3432341');
    });

    it('Verify certificate for BCCG using valid certification number', () => {

        verifyCertificate('BCCG', '3432341');
    });

});