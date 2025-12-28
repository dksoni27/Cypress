describe('Card Grading Submission - Base Service', () => {

    it('User submits a card for grading using base service', () => {

        cy.visit('https://www.beckett.com'); 

        cy.get('.align-self-center > .btn-primary').click();
        cy.get('[href="/submit/cards/service"] > .description-container > .bottom-section > .button-title').should('be.visible').click();
        cy.get('.close').click();
        cy.get('.col-xxl-6 > .osf_flipCard__ayZ2p > .osf_flipCardInner__vL29m > .FrontCard2024_card__t_7pj > .flex-column > .row > :nth-child(1) > .FrontCard2024_content__DVJSe > .py-2').click()


        cy.get('.Input_input__kPl3n > div > .px-4').click().type('2009 topps');
        cy.get('.overflow-auto > :nth-child(1) > .d-flex').click();

        cy.get('#value1').type('2')

        cy.get('#check-0-1').check()
        cy.get('.btn-block > .Button_content___KQ5I > span').click()

        cy.get('#firstName').type(Cypress.env('f_Name'))
        cy.get('#lastName').type(Cypress.env('l_Name'))
        cy.get('#email').type(Cypress.env('email'))
        cy.get('#line1').type(Cypress.env('street_add'))
        cy.get('#line2').type(Cypress.env('street_add'))
        cy.get('#phone').type(Cypress.env('phone'))
        cy.get('#city').type(Cypress.env('city'))
        cy.get('#state').select('United States Virgin Islands')
        cy.get('#zipcode').type(Cypress.env('pin_code'))
        cy.get(':nth-child(2) > .form-check-label').click()
        cy.get('.btn-block').click()

        cy.get('#checked-tos').click()
        cy.get('#checked-expiration').click()
        cy.get('#checked-newsletter').click()
        cy.get('.btn-block').click()




    });

});