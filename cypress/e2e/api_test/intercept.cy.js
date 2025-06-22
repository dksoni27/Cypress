describe('interseft requset', () => {
    it('simple intersept', () => {

        cy.visit('https://jsonplaceholder.typicode.com/')

        cy.intercept({
            path : '/posts'
        }).as('123')

        cy.get('tbody > :nth-child(1) > :nth-child(1) > a').click()
        cy.wait('@123').then(intr =>{
            cy.log(JSON.stringify(intr))
            console.log(JSON.stringify(intr))
            expect(intr.response.body).to.have.length(100)
        })


    })
})