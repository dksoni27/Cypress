describe('Create Trade Flow', () => {
    beforeEach(() => {
        cy.visit('https://www.beckett.com/login')

        cy.get('#loginEmail').type(Cypress.env('email'))
        cy.get('#loginPassword').type(Cypress.env('password'), { log: false })
        cy.get('#btn_login').click()

        // Assertion after successful login
        cy.contains('Logout').should('be.visible')
    });

    it('creates a trade successfully', () => {
        // Given the user has tradable items in their collection
        cy.visit('https://www.beckett.com/users/skoul');
        cy.get(':nth-child(2) > #trade_with_user').click();
        cy.get('.buttons > .from_trader_items_button').click();
        cy.wait(8000);
        cy.get('#\\31 2000143052400 > [title="Add to Trade"] > .add_selected_item_to_trade').click()
        cy.get('[aria-describedby="add_to_trade_saving_popup"] > .ui-dialog-titlebar > .ui-button > .ui-button-icon').click()
        cy.get('div.fright > .back_to_trade').click();
        cy.get('#from_trader_no_items > .to_trader_items_button').click()
        cy.wait(8000);
        cy.get('#\\31 2000135838605 > [title="Add to Trade"] > .add_selected_item_to_trade').click()
        cy.get('[aria-describedby="add_to_trade_saving_popup"] > .ui-dialog-titlebar > .ui-button > .ui-button-icon').click()
        cy.get('div.fright > .back_to_trade').click()
        cy.get('#send_offer_button').click()

        cy.url().should('include', '/trade/index');
        cy.contains('Trade Summary Details').should('be.visible');

    });
});
 
