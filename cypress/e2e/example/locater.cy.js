/// <reference types="cypress" />

describe('Beckett Login Test', () => {
    const email = 'devendras@beckett.com'; 
    const password = 'Dksoni@2716';    


  
    it('should log in successfully with valid credentials', () => {
     
      cy.visit('https://www.beckett.com/login');
      
      cy.get('#loginEmail').type(email);
      cy.get('#loginPassword').type(password, { log: false }); 
  
      
      cy.get('#btn_login').click();
  
      
      cy.url().should('not.include', '/login'); 
      cy.contains('Logout', { timeout: 10000 }).should('be.visible');

    });
  });
  