describe('api testing with alias', () => {

    beforeEach(() => {
        cy.request('/api/users?page=2').as('users')
    })


    it("velidate header info ", () => {
        cy.get('@users').should((res) => {
            expect(res.status).equal(200);
        })

    });

    it("velidate header info ", () => {
        cy.get('@users')
            .its('headers')
            .its('connection')
            .should('include','keep-alive')


    });

    it("velidate body info ", () => {
        cy.get('@users')
            .its('body')
            .should('contain',{'total_pages':2})

    });

    it("velidate body info array ", () => {
        cy.get('@users')
            .its('body').then((res) =>{
                expect(res.data[0]).has.property('id',7)
            })

    });



});