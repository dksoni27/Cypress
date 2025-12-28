describe('Beckett Authentication Login', () => {

    before(() => {
        cy.fixture('beckettUSers').then((data) => {
            userData = data;
        });
    });

    it('should navigate to login page and handle cross-origin', () => {
        cy.visit('https://www.beckett.com/login/bas');

        cy.get('#loginEmail').type(userData.email);

        // Handle redirected domain

    })
})