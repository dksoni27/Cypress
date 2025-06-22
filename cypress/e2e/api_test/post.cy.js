describe("Create new user using POST", () => {

  let rendumtext = "";
  let textemail = "";
  // getting data from fixtures file
  const data = require("../../fixtures/createUSer")

  
  it('post Users', () => {

    //genreting rendum emails
    var pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for(var i=0;i<10;i++){
      rendumtext +=pattern.charAt(Math.floor(Math.random()*pattern.length));
      textemail = rendumtext+"@gmnail.com";
    }

    cy.request({
      method: "POST",
      url: "https://gorest.co.in/public/v2/users",
      headers: {
        Authorization: "Bearer 3260e4bb2c95687541c997231ee95646ff0d767415fad82d5ff8c11d145d1431",
        'Content-Type': 'application/json'
      },

      // getting data from fixtures file
      body: {
        name: data.name,
        email: textemail,
        gender: data.gender,
        status: data.status
      }
    }).then((res) => {
      cy.log(JSON.stringify(res));
      expect(res.status).to.equal(201);
      expect(res.body).to.have.property('id');
      expect(res.body.name).to.equal(data.name);
      expect(res.body.gender).to.equal(data.gender)
    });
  });
});
