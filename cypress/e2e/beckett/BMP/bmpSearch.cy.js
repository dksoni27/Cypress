describe('BMP search test ',function(){
    it('BMP Search withhhout login', ()=>{

        cy.visit('https://marketplace.beckett.com/')
        cy.viewport('macbook-16')
        cy.get('a[aria-label="Login"]').should('be.visible')
        cy.get('input[type="radio"]').should('be.checked')
        cy.get('#siteSearchQuery').should('be.visible').type('2009 topps')
        cy.get('#search_button_opg').should('be.visible').click()
        cy.contains('a','2009 topps').should('be.visible')
        cy.contains('a','Item').should('be.visible').click()


        cy.get('input[name=from]').should('be.visible').type('1')
        cy.get('input[name=to').should('be.visible').type('50')
        cy.get('.apply_ranged_filter').should('be.visible').click()
        cy.contains('a','Price').should('be.visible')
        


    })
})