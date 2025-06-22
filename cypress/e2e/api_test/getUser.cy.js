describe("get users by api", () => {

    let tocken = '3260e4bb2c95687541c997231ee95646ff0d767415fad82d5ff8c11d145d1431';
    it('get Users', () => {
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users',
            header: {
                'Authorization': 'Bearer '+tocken 
            }
        }).then((res) => {
            expect(res.status).to.equal(200);
            expect(res.body).to.have.length(10);

            res.body.forEach((user) => {
                expect(user).to.have.all.keys('id', 'name', 'email', 'gender', 'status');
                expect(user.id).to.be.a('number');
                expect(user.name).to.be.a('string');
                expect(user.email).to.be.a('string');
                expect(user.gender).to.be.oneOf(['male', 'female']);
                expect(user.status).to.be.oneOf(['active', 'inactive']);
            })

        })
    })

    it('get Users by id', () => {
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users/7962136',
            header: {
                 'Authorization': 'Bearer '+tocken 
            }
        }).then((res) => {
            expect(res.status).to.equal(200);
            expect(res.body.name).to.equal('Sharda Panicker VM')
        

        })
    })

})