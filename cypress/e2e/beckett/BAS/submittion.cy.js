describe('Beckett Authentication SSO', () => {

    beforeEach(() => {
        cy.session('Beckett-Login', () => {
            cy.Login()
        })
    })
    

})
