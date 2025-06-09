describe('My First Test', function () {

    it('verify title of page positive test', function () {
        cy.viewport(1920, 1080);
        cy.visit("https://www.beckett.com/")
        cy.contains('Pop Report').should('be.visible').click()
        cy.get('#sport_id').should('be.visible').select('Baseball')
        cy.get('#set_name').should('be.visible').type('2009 topps')
        cy.get('#player_name').should('be.visible').type('Jordan')
        cy.get('input[name=search]').should('be.visible').click()

        cy.get('tbody > :nth-child(1) > :nth-child(5) > a').should('contain.text', '2009 Topps 206 Autographs')
        cy.contains('a', '2009 Topps 206 Mini Framed Autograph').should('be.visible')

        cy.get('input[name="ViewAllGrades"]').should('be.visible').click()

    })


})




