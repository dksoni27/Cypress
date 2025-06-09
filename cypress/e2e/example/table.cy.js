
describe('My First Test', function () {
    
    it('verify title of page positive test', function () {
        cy.viewport(1920, 1080); 
        cy.visit("https://www.beckett.com/opg") 
        cy.get(':nth-child(1) > :nth-child(1) > .table-box').contains('tr','15 Day')
        
    })

  


})




