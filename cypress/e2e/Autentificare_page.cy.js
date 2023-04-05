describe('Autentificare page',()=>{
    //Navigate to main page
    beforeEach(()=>{
        cy.visit('https://iwanttohelp.bim.assistcloud.services/')
    })

    //verify that login functionality works with valid data
    it('Verify that Login functionality works with valid credentials',()=>{
        //click on "Autentificare"
        cy.get(':nth-child(7) > .nav-link').click()

        //type username
        cy.get('[name="phone_number"]').type("0746937884")

        //type password
        cy.get('[name="password"]').type("123456789")

        //autentificate
        cy.get('[type="submit"]').click()
        
        //verify if the user is autentificated
        cy.get(':nth-child(8) > .nav-link').should('exist')
    })

    //verify that login functionality works with invalid credentials
    it('Verify that Login functionality works with invalid credentials',()=>{
        //click on "Autentificare"
        cy.get(':nth-child(7) > .nav-link').click()

        //type username
        cy.get('[name="phone_number"]').type("074693788")

        //type password
        cy.get('[name="password"]').type("12345678")

        //autentificate
        cy.get('[type="submit"]').click()

        //verify that the error message appears
        cy.get('[class="alert-container"]').should('exist')

        //verify that the user is still in autentificare page
        cy.get('[class="col-sm-12 col-md-6 col-lg-4"]').should('exist')
    })


})