
describe('Beckett Login Test', () => {

it("opg order place", function(){ 

    cy.visit("https://www.beckett.com")

    cy.get(".navbar-toggler-icon").click();
    cy.get('.pb-2 > [href="https://www.beckett.com/online-price-guide"]').click();
    cy.get('#sport-slider > .active').click();

})

})