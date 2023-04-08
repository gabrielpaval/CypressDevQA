describe('Nevoi page', ()=>{
    //Preconditions
    beforeEach(()=>{
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

        //Click on the NEVOI
        cy.get(':nth-child(2) > .nav-link > p').click()

        //wait 2 seconds
        cy.wait(2000)

        //There should be at least one “Nevoie recomandata” added by a different user
        cy.get('tbody[role="rowgroup"]').find('tr').then((row)=>{expect(row.length).to.be.at.least(1)})
    })

    //Verify that the user is able to use “Vizualizeaza” functionality
    it('Verify that the user is able to use “Vizualizeaza” functionality', ()=>{
        //Click on the NEVOI
        cy.get(':nth-child(2) > .nav-link > p').click()

        //wait 1 seconds
        cy.wait(1000)

        //Click on the first “Vizualizeaza” button
        cy.get(':nth-child(1) > [aria-colindex="5"] > div > .fa-eye').click()

        //wait 1 seconds
        cy.wait(1000)

        //check if the user see all the fields that has been filled in
        cy.get('div[class="col-md-8 mb-3"]').should('exist')

        //The form should have the title: Vizualizare nevoie
        cy.get('div[class="card-header"]').find('h5[class="title"]').should('have.text', " Vizualizare nevoie ")

        //The form should have the status (e.g Deschis) displayed
        cy.get('div[class="card-header"]').find('span[class="text-warning"]').should('have.text', " Deschis ")  
    })
    
    //Verify “Aplica” functionality
    it('Verify “Aplica” functionality', ()=>{
        //Click on the NEVOI
        cy.get(':nth-child(2) > .nav-link > p').click()

        //wait 1 seconds
        cy.wait(1000)
     
        //click on "Aplica" button
        cy.get(':nth-child(1) > [aria-colindex="5"] > div > .fa-user-check').click()
            
       //check if the confirmation pop-up is displayed
        cy.get('div[id="apply_modal___BV_modal_content_"]')
        .should('be.visible') 
        .find('button[class="btn btn btn-primary btn-secondary btn-sm"]')
        .should('be.visible') 
        .click();
            
        //check if a message is displayed
        cy.get('div[role="alert"]').should('exist')
        //check if the message is succes
        cy.get('span[class="text-center"]').should('have.text', 'Succes!')
    })

    //Verify “Completeaza” functionality
    it('Verify "Completeaza" functionality', ()=>{
        //Click on the NEVOI
        cy.get(':nth-child(2) > .nav-link > p').click()

        //wait 1 seconds
        cy.wait(1000)

        //Click on the Completeaza button
        cy.get(':nth-child(1) > [aria-colindex="5"] > div > .fa-check').click()

        //check if a complete modal is displayed
        cy.get('div[id="complete_modal___BV_modal_content_"]').should('be.visible')

        //Select a star
        cy.get('.my-4 > .col-sm-12 > :nth-child(1) > .vue-star-rating > :nth-child(5)').click()

        //Fill in the comment field
        cy.get('textarea[class="review-comment form-control"]').type("Mi s-a pus la dispozitie toate resursele necesare pentru a finaliza aceasta nevoie")

        //Click on Trimite button
        cy.get('button[class="btn btn btn-primary btn-secondary btn-sm"]').should('be.visible').click()

        //check if a message is displayed
        cy.get('div[role="alert"]').should('exist')

        //check if the message is succes
        cy.get('span[class="text-center"]').should('have.text', 'Succes!')

        //Click on the NEVOI
        cy.get(':nth-child(2) > .nav-link > p').click()

        //wait 1 seconds
        cy.wait(1000)

        //check if Only Vizualizeaza functionality is enabled
        cy.get(':nth-child(1) > [aria-colindex="5"] > div > .fa-eye').should('not.disabled')
    })
})