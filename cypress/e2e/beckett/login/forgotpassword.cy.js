describe('Forgot password test', () => {

    const email = 'devendras@beckett.com'
    const wpassword = 'Dks@1234'


    it('forgot password test', () => {

        cy.visit('https://www.beckett.com/')
        cy.get('.btn-outline-primary-new-color').should('be.visible').click()
        cy.get('#loginEmail').type(email);
        cy.get('#loginPassword').type(wpassword)

        cy.contains('a', 'Forgot Password').should('be.visible').click()
        cy.contains('h1', 'Forgot Password').should('be.visible')

        cy.get('#email').should('be.visible').type(email);
        cy.get('#g-recaptcha-1 > [style="width: 304px; height: 78px;"] > div > iframe').should('be.visible').click()
        cy.get('.sentPassReset').should('be.visible').click()



    })

})