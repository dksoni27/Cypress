describe('Beckett Authentication SSO', () => {

    beforeEach(() => {
        cy.session('Beckett-Login', () => {
            cy.Login()
        })
    })

    it('should open Authentication site with SSO (no re-login)', () => {

        // Visit Beckett
        cy.visit('https://www.beckett.com/login')

        // Verify already logged in
        cy.url().should('not.include', '/login')
        cy.contains('Logout', { timeout: 10000 }).should('be.visible')

        // Open menu
        cy.get('.navbar-toggler-icon')
            .should('be.visible')
            .click()

        // Click Authentication (force same tab)
        cy.get('.pb-2 > [href="https://www.beckett-authentication.com/"]')
            .should('be.visible')
            .invoke('removeAttr', 'target')
            .click()

        // Switch to Authentication origin
        cy.origin('https://www.beckett-authentication.com', () => {
            cy.contains('Login').should('not.exist')
        })
    })
})
