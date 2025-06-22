describe('delet a user ', () => {

    let rendumtext = "";
    let textemail = "";

    it('post Users', () => {

        //genreting rendum emails
        var pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        for (var i = 0; i < 10; i++) {
            rendumtext += pattern.charAt(Math.floor(Math.random() * pattern.length));
            textemail = rendumtext + "@gmnail.com";
        }
        // create user for delet
        cy.request({ 
            method: "POST",
            url: "https://gorest.co.in/public/v2/users/",
            headers: {
                Authorization: 'Bearer 3260e4bb2c95687541c997231ee95646ff0d767415fad82d5ff8c11d145d1431',
                'Content-Type': 'application/json'
            },

            // getting data from fixtures file
            body: {
                name: rendumtext,
                email: textemail,
                gender: "male",
                status: "active",
            }
        }).then((res) => {
            cy.log(JSON.stringify(res));
            expect(res.status).to.equal(201);
            expect(res.body).to.have.property('id');
            expect(res.body.name).to.equal(rendumtext);
            expect(res.body.gender).to.equal("male")

            // eleting userID
            const userID = res.body.id
            cy.log("user id is : " + userID)

            // delete user
            cy.request({
                method: 'DELETE',
                url: 'https://gorest.co.in/public/v1/users/' + userID,
                headers: {
                    Authorization: 'Bearer 3260e4bb2c95687541c997231ee95646ff0d767415fad82d5ff8c11d145d1431'
                }
            }).then((res) => {
                expect(res.status).to.eq(204);

                //getting user
                cy.request({
                    method: 'GET',
                    url: 'https://gorest.co.in/public/v1/users/' + userID,
                    failOnStatusCode: false, 
                    headers: {
                        Authorization: 'Bearer 3260e4bb2c95687541c997231ee95646ff0d767415fad82d5ff8c11d145d1431'
                    }
                }).then((res) => {
                    expect(res.body.data).has.property('message', 'Resource not found')
                })
            })
        });
    });
});