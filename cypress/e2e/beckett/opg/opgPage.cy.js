describe('Beckett opg Test', () => {
    const email = 'rajsoni90@yopmail.com';

    const email1 = 'devendras@beckett.com';
    const password = 'Dksoni@2716';    


    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false prevents Cypress from failing the test
      if (err.message.includes('resetTimer is not defined')) {
        return false;
      }
    });
    it('opg guest checkout test', () => {
     
      cy.visit('https://www.beckett.com/opg');
      cy.get('a[rel="Total Access Online Price Guide"]').should('be.visible').click();
      cy.get('#menu1 > div.row > div > div.table-box > div > table > tbody > tr:nth-child(5)').should('be.visible').click()
      cy.get('#subscribe_total_now').should('be.visible').click();

      cy.get('#onetrust-accept-btn-handler').click()
     
      cy.get('#loginEmail').should('be.visible').type(email)
      cy.get('#guest_account').should('be.checked')

      cy.get('#send-valid-guest-login-otp').should('be.visible').click()
      cy.wait(8000);
      cy.get('#validgusetloginOTP').should('be.visible').click()
  

      cy.get('#login_submit').should('be.visible').click()
     

    });


    it('opg  checkout using login  test', () => {
     
      cy.visit('https://www.beckett.com/opg');
      cy.get('a[rel="Total Access Online Price Guide"]').should('be.visible').click();
      cy.get('#menu1 > div.row > div > div.table-box > div > table > tbody > tr:nth-child(5)').should('be.visible').click()
      cy.get('#subscribe_total_now').should('be.visible').click();

      cy.get('#onetrust-accept-btn-handler').click()
     
      cy.get('#loginEmail').should('be.visible').type(email1)
      cy.get('#beckett_account').check({ force: true });
      cy.get('#loginPassword').should('be.visible').type(password)
      cy.get('#login_submit').should('be.visible').click()
      
      cy.wait(5000)
      cy.get('#cart_panel_head > .panel-title > .clickdisable').should('be.visible')
      cy.get('div.BtnConTopAbs > a').should('be.visible').click()
     

    });

    

  });
  