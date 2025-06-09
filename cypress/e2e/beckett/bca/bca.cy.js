/// <reference types="cypress" />



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



    }),

    it("BCA order place", function(){

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

        
        cy.get('a.btn-blue').contains('Add Item').click();
        cy.get('.btn-blue-large > span').click();
    
        cy.get('#grade_type_raw').should('be.visible').should('not.be.checked');
        cy.get('#grade_type_graded').should('be.visible').should('not.be.checked').click();

        cy.get('select[name="grade_company"]').should('be.visible').select('BGS Grade');
        cy.get('select[name="grade_card_condition"]').should('be.visible');
        cy.get('input[name="card_serial_number_start"]').should('be.visible').type('1234');
        cy.get('input[name="card_serial_number_end"]').should('be.visible').type('12345');
        cy.get('input[name="serial_num"]').should('be.visible').type('12345');
        cy.get('#custom_description').should('be.visible').type('it is test order');
        cy.get('button[class="btn-blue"]').should('be.visible').click();
        cy.get('.btn-blue-large').should('be.visible').click();


        // payment page verification 

        cy.get('#coupon_code').should('be.visible')
        cy.get('#gift_code').should('be.visible')
        cy.get('.btn-red').should('be.visible');

        
        cy.contains('Agree to Terms and Disclaimer').should('be.visible');
        cy.get('#terms').click();

        cy.get('#checkout_paypal').should('be.visible')
        cy.get('#checkout').should('be.visible').click();

    
  
    })



})