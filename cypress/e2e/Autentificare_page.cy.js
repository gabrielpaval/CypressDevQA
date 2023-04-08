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

        //authenticate
        cy.get('[type="submit"]').click()
        
        //wait 1 second
        cy.wait(1000)

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

        //authenticate
        cy.get('[type="submit"]').click()

        //verify that the error message appears
        cy.get('[class="alert-container"]').should('exist')

        //wait 1 seconds
        cy.wait(1000)
        
        //verify that the user is still in autentificare page
        cy.get('[class="col-sm-12 col-md-6 col-lg-4"]').should('exist')
    })

    //Verify that the user is able to properly logout
    it('Verify that the user is able to properly logout', ()=>{
        //preconditons
            //Navigate to "Autentificare" page
            cy.visit('https://iwanttohelp.bim.assistcloud.services/auth/login')
            //type username
            cy.get('[name="phone_number"]').type("0746937884")    
            //type password
            cy.get('[name="password"]').type("123456789")  
            //authenticate
            cy.get('[type="submit"]').click()           
            //verify if the user is autentificated
            cy.get(':nth-child(8) > .nav-link').should('exist')

        //wait 1 seconds
        cy.wait(1000)

        //Click on the Deconectare button
        cy.get(':nth-child(9) > .nav-link').click()

        //wait 1 seconds
        cy.wait(1000)

        //check if the user should be properly logged out and redirected to the main page
        cy.url().should('eq', 'https://iwanttohelp.bim.assistcloud.services/')
    })
})