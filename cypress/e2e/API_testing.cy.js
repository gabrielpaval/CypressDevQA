describe('Api testing', ()=>{
  let accessToken = null
  
  beforeEach(()=>{
    cy.api({
      method: 'POST',
      url: '/auth/signin',
      body: {
        auth: 
        {
          phone_number: "0746937884",
          password: "123456789"
        }
      }
      }).then((response) => {
        expect(response.status).to.eq(201)
        accessToken = response.body.jwt 
    })
  })

    //Test Get profile endpoint
    it('Test Get profile endpoint', ()=>{
    //used an api plugin
      cy.api({
        method: 'GET',
        url: "/volunteers/api/v1/profile",
        auth :
        {
            bearer :accessToken
        },
        failOnStatusCode: false
      }).as('details')  

      //Validate status code
      cy.get('@details').its('status').should('eq', 200)

      //Validate the response
      cy.get('@details').then((response)=>{
        //check if a response exists
        expect(response).to.exist
      })
    })

    //Test Get all recommended needs endpoint
    it('Test Get all recommended needs endpoint', ()=>{
        cy.api({
            method : 'GET',
            url : '/volunteers/api/v1/charts/user_recomended_needs',
            auth : 
            {
                bearer : accessToken
            },
            failOnStatusCode : false,
        }).as('details')

      //Validate status code
      cy.get('@details').its('status').should('eq', 200)

      //Validate the response
      cy.get('@details').then((response)=>{
        //check if a response exists
        expect(response).to.exist
      })
    })

    //Test the following endpoints(Create need, Get Need, Delete need) in a flow
    it('Test the following endpoints(Create need, Get Need, Delete need) in a flow', ()=>{
      cy.api({
            method : 'POST',
            url : '/volunteers/api/v1/recommended_needs',
            auth :
            {
              bearer : accessToken
            },
            failOnStatusCode: false,
            form: true,
            body :{"contact_first_name":"Daniel",
            "contact_last_name":"Paval",
            "contact_phone_number":"0745895852",
            "category":"food",
            "description":"Paine si apa",
            "address":{
              "street_name":"Libertatii",
              "details":"nr: 369",
              "county":"Suceava",
              "city":"Suceava",
              "postal_code":"220255"}}
        }).then((response) => {
          expect(response.status).to.eq(201)
          expect(response.body.need).has.property('contact_first_name', "Daniel")
          expect(response.body.need).has.property('contact_last_name', "Paval")
          expect(response.body.need).has.property('contact_phone_number', "0745895852")
          expect(response.body.need).has.property('category', "food")
          expect(response.body.need).has.property('description', "Paine si apa")
          expect(response.body.need.address).has.property('street_name', "Libertatii")
          expect(response.body.need.address).has.property('details', "nr: 369")
          expect(response.body.need.address).has.property('county', "Suceava")
          expect(response.body.need.address).has.property('city', "Suceava")
          expect(response.body.need.address).has.property('postal_code', "220255")
        }).then((response)=>{
          const id = response.body.need.id
          cy.api({
            method : 'GET',
            url : `/volunteers/api/v1/recommended_needs/${id}`,
            auth :
            {
              bearer :accessToken
            },
            failOnStatusCode: false
            }).then((response)=>{
            expect(response.status).to.eq(200)
         })
       }).then((response)=>{
         const id = response.body.need.id
         cy.api({
           method : 'DELETE',
           url : `/volunteers/api/v1/recommended_needs/${id}`,
           auth :
           {
             bearer :accessToken
           },
           failOnStatusCode: false
           }).then((response)=>{
           expect(response.status).to.eq(204)
        })
     })
   })  
})

