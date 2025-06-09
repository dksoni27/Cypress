describe('mouse corser move test', () => {

    it('news header testing ', () => {

        cy.visit('https://www.beckett.com/news');
        cy.url().should('include', '/news');
        cy.get("ul[id='menu-main-menu-1'] li[class='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-163846 menu-category-12496']")
            .trigger('mouseup', { force: true },{timeout:10000})
      
    })

})