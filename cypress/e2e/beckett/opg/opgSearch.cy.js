
describe('Beckett opg search', () => {
    const email = 'devendras@beckett.com'; 
    const password = 'Dksoni@2716';    

  
    it('opg search without login ', () => {

        cy.visit('https://www.beckett.com/opg');
        cy.get('a.btn.borOne', { timeout: 10000 }).should('be.visible');
        cy.get('#siteSearchQuery').should('be.visible').click()
        cy.url().should('include', '/online-price-guide');
        cy.get('#siteSearchQuery').should('be.visible').type('jordan')

        cy.contains('Please login to search the Beckett Online Price Guide. ').should('be.visible');
    })


    it('opg search with login ', () => {

        cy.visit('https://www.beckett.com/opg');
        cy.get('div[class="LogGridRight"] a[aria-label="Login"]').should('be.visible').click();

        cy.get('#loginEmail').type('devendras@beckett.com');
        cy.get('#loginPassword',{timeout:500}).type('Dksoni@2716'); 
        cy.get('#btn_login').click({ force: true });
      
        cy.wait(8000)
        cy.url().should('not.include', '/login'); 
        cy.url().should('include', '/online-price-guide');
        cy.get('#siteSearchQuery').should('be.visible').click()
        
        cy.get('#siteSearchQuery').should('be.visible').type('1986 Star Michael Jordan')
        cy.get('#search_button_opg').should('be.visible').click()

        cy.get('.bi.bi-filter').should('be.visible').click();
        cy.get('label[for=set_id1]').should('be.visible').click()
      
    })


})