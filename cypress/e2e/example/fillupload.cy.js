describe('file upload' , () =>{
   

    const email = 'devendras@beckett.com'; 
    const password = 'Dksoni@2716';

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

        // file upload
        const bcaFile = "download.jpg"
        cy.get('#photoimg1').attachFile(bcaFile)
        cy.get('button[class="btn-blue"]').should('be.visible').click();
       
    
  
    })




})