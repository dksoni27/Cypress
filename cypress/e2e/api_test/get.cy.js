describe('Beckett bca order  Test', () => {
     it("GET API", () =>{
        cy.request('https://reqres.in/api/users?page=2').then((res) => {
        
            expect(res.status).equal(200)
            expect(res.body.data[0]).has.property('id',7)
            expect(res.body.data[1]).has.property('id',8)
            expect(res.body.data[2]).has.property('id',9)
            expect(res.body.data[3]).has.property('id',10)
            expect(res.body.data[4]).has.property('id',11)
            expect(res.body.data[5]).has.property('id',12)
            expect(res.body.data).has.length(6);
            expect(res.body.data).not.have.property('price')
        
        })

     }),

     it("GET API1 ", () =>{
        cy.request('https://reqres.in/api/users/2').then((res) => {
        
            expect(res.status).equal(200)
            expect(res.body.data).has.property('id',2)
            expect(res.body.support).has.property('text','Tired of writing endless social media content? Let Content Caddy generate it for you.')
        
        })

     })

})