describe('Beckett bca order  Test', () => {

    const email = 'devendras@beckett.com'; 
    const password = 'Dksoni@2716';

    it("BCA search", function(){

        cy.visit("https://www.beckett.com/bca")
        cy.get('.container > .ServiceSlot > .serSec > .sendBtn > .currency_alert').click();
        
        cy.get('#loginEmail').type(email);
        cy.get('#loginPassword').type(password, { log: false }); 
        cy.get('#btn_login').click();

        //login verification 
        cy.url().should('include', '/bca/add'); 


        //creat a order 
        cy.get('select[name="service_term"]').select('2').should('have.value','2')
        cy.wait(8000);

        // search 1871 Boston Red Stockings Wright Cabinets #NNO Harry Schafer
        cy.get('input[name="search_text"]').should('be.visible').type('1871 Boston Red Stockings Wright Cabinets #NNO Harry Schafer');
        cy.wait(8000);
        cy.get('#search_submit').should('be.visible').click();
        cy.wait(8000);
        cy.get('li[title="1871 Boston Red Stockings Wright Cabinets #NNO Harry Schafer"]').should('be.visible');
        cy.get('img[alt="Remove"]').first().click();


        /// search 2009
        cy.get('input[name="search_text"]').should('be.visible').type('2009');
        cy.wait(8000);
        cy.get('#search_submit').should('be.visible').click();
        cy.wait(8000);



    })
})