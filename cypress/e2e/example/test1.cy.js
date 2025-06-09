describe('My First Test', function () {
    
    it('verify title of page positive test', function () {
        cy.viewport(1920, 1080); 
        cy.visit("https://www.beckett.com") 
        cy.title().should('eq', 'Beckett Collectibles - Grading, Authentication, Pricing & Vaulting') 
    })

    it('verify title of page negative test ', function () {
        cy.viewport(1920, 1080);
        cy.visit("https://www.beckett.com") 
        cy.title().should('eq', 'Beckett Collectibles ')
        
    })


})




