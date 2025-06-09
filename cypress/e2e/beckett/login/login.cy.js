describe('Positive Login Test', () => {

    const email = 'devendras@beckett.com'; 
    const password = 'Dksoni@2716';   
    const WrongPWD = 'Abc@1212'; 

    // login positev 

    it('login successfully with valid credentials', () => {
      cy.visit('https://www.beckett.com/login');
      
      cy.Login(email,password)
  
      cy.url().should('not.include', '/login'); 
      cy.contains('Logout', { timeout: 10000 }).should('be.visible');
    });

    //positev case with remind me 
    it('stay logged in with Remember Me checked', () => {
        cy.visit('https://www.beckett.com/login');

        cy.get('#loginEmail').type(email);
        cy.get('#loginPassword').type(password); 
        cy.get('.form-check-label').should('be.visible').click();
        cy.get('#btn_login', { timeout: 10000 }).click();

        cy.url().should('not.include', '/login'); 
        cy.contains('Logout', { timeout: 10000 }).should('be.visible');
        
      });
    
    //negative test

    it('display error for incorrect password and email', () => {
        cy.visit('https://www.beckett.com/login');
        cy.get('#loginEmail').type(email);
        cy.get('#loginPassword').type(WrongPWD); 
        cy.get('#btn_login').click();
    
        cy.contains("We're sorry, but the email or password you entered is incorrect. Please try again.").should('be.visible')
      });

     //negative test with no perameters
     it('show error when fields are empty', () => {
        cy.visit('https://www.beckett.com/login');
        
        cy.get('#btn_login').should('be.disabled');
    
      });
      
      
  });