describe('Nevoi recomandate page',()=>{
    //Preconditions
    beforeEach(()=>{
        //Navigate to homepage after log in
        cy.visit('https://iwanttohelp.bim.assistcloud.services/auth/login')

        //type username
        cy.get('[name="phone_number"]').type("0746937884")

        //type password
        cy.get('[name="password"]').type("123456789")

        //authenticate
        cy.get('[type="submit"]').click()
        
        //verify if the user is autentificated
        cy.get(':nth-child(8) > .nav-link').should('exist')
    })

    //Verify that a user is able to add a new Nevoie recomandata
    it('Verify that a user is able to add a new Nevoie recomandata',()=>{
        //Click on the NEVOI RECOMANDATE
        cy.get(':nth-child(3) > .nav-link > p').click()

        //Click on the Add button
        cy.get('[class="btn btn-primary add-new-btn"]').click()

        //Fill in all the required fields
        cy.get('input[name="contact_first_name"]').type("Gabriel")
        cy.get('input[name="contact_last_name"]').type("Paval")
        cy.get('input[name="contact_phone_number"]').type("0746937884")
        cy.get('.vs__search').click().get('#vs1__option-1').click()
        cy.get('textarea[class="need-description form-control"]').type("Are nevoie de o cutie de Algocalmin si un spray nazal, Maresyl.")
        cy.get('input[class="form-control pac-target-input"]').type("strada Principala, numarul 367")
        cy.get('input[name="details"]').type("Locuieste la casa, poarta este neagra")
        cy.get('input[name="county"]').type("Suceava")
        cy.get('input[name="city"]').type("Dumbraveni")
        cy.get('input[name="postal_code"]').type("727225")

        //Click on Timite button
        cy.get('button[class="btn btn-primary"]').click()

        //check if a message is displayed
        cy.get('div[role="alert"]').should('exist')

        //check if the message is succes
        cy.get('span[class="text-center"]').should('have.text', 'Succes!')
    })
    
    //validate if a new row is added
    it('A new row should be added to Nevoi recomandate table', ()=>{
        //Click on the NEVOI RECOMANDATE
        cy.get(':nth-child(3) > .nav-link > p').click()

        //wait 2 seconds
        cy.wait(2000)
        
        //check if the table is empty
        cy.get('div[role="alert"]').should('not.exist')

        //check the rows in the table
        cy.get('table[role="table"]').find('tr[role="row"]').should('exist')
    })

    let countBefore, countAfter
    //Verify that the Descriere field is required
    it('Verify that the Descriere field is required', ()=>{
        //Click on the NEVOI RECOMANDATE
        cy.get(':nth-child(3) > .nav-link > p').click()
        
        //wait 2 seconds
        cy.wait(2000)
        
        //get all rows 
        cy.get('table[role="table"]').find('tr').then(($row)=>{countBefore=$row.length-1})

        //Click on the Add button
        cy.get('[class="btn btn-primary add-new-btn"]').click()

        //Fill in all the required fields
        cy.get('input[name="contact_first_name"]').type("Gabriel")
        cy.get('input[name="contact_last_name"]').type("Paval")
        cy.get('input[name="contact_phone_number"]').type("0746937884")
        cy.get('.vs__search').click().get('#vs1__option-1').click()
        cy.get('input[class="form-control pac-target-input"]').type("strada Principala, numarul 367")
        cy.get('input[name="details"]').type("Locuieste la casa, poarta este neagra")
        cy.get('input[name="county"]').type("Suceava")
        cy.get('input[name="city"]').type("Dumbraveni")
        cy.get('input[name="postal_code"]').type("727225")

        //Click on Timite button
        cy.get('button[class="btn btn-primary"]').click()

        //check if a require message is displayed
        cy.get('div[class="errors text-left mb-3"]').find('span[class="text-left text-danger"]').should('be.visible')

        //Click on the NEVOI RECOMANDATE
        cy.get(':nth-child(3) > .nav-link > p').click()

        //wait 2 seconds
        cy.wait(2000)
        
        //get all rows 
        cy.get('table[role="table"]').find('tr').then(($row)=>{countAfter=$row.length-1})
    })

    //validate if a new row is not added
    it('A new row should not be added to Nevoi recomandate table', ()=>{
        //compare the counters
        expect(countAfter).to.equal(countBefore)
    })

    //Verify that the user is able to use “Vizualizeaza” functionality
    it('Verify that the user is able to use “Vizualizeaza” functionality', ()=>{
        // Click on the NEVOI RECOMANDATE
        cy.get(':nth-child(3) > .nav-link > p').click()

        //Click on the "Vizualizeaza" buton
        cy.get('i[class="fas fa-eye view text-info action-icon"]').click()

        //wait 1 seconds
        cy.wait(1000)

        //The user should be able to see all the fields that has been filled in
        cy.get('div[class="col-md-8 mb-3"]').should('exist')

        //The form should have the title: Vizualizare nevoie recomandata
        cy.get('div[class="card-header"]').find('h5[class="title"]').should('have.text', " Vizualizare nevoie recomandata ")

        //its status (e.g Deschis) displayed
        cy.get('div[class="card-header"]').find('span[class="text-warning"]').should('have.text', " Deschis ")
    })

    //Verify that the user is able to use “Sterge” functionality
    it('Verify that the user is able to use “Sterge” functionality', ()=>{
        // Click on the NEVOI RECOMANDATE
        cy.get(':nth-child(3) > .nav-link > p').click()

        //Click on the “Sterge” button
        cy.get('i[class="fas fa-trash-alt view text-danger action-icon"]').click()

        //wait 1 seconds
        cy.wait(1000)

        //check if the deletion confirmation message has appeared
        cy.get('div[id="delete_modal___BV_modal_content_"]').should('be.visible')

        //click on "confirma"
        cy.get('button[class="btn btn btn-primary btn-secondary btn-sm"]').click()

        //confirm that the item has been deleted
        cy.get('tr[class="b-table-empty-row"]').should('exist')
    })

    //Verify the search functionality
    it('Verify the search functionality', ()=>{
        //preconditions
        //add item 1

            //Click on the NEVOI RECOMANDATE
            cy.get(':nth-child(3) > .nav-link > p').click()

            //Click on the Add button
            cy.get('[class="btn btn-primary add-new-btn"]').click()

            //Fill in all the required fields
            cy.get('input[name="contact_first_name"]').type("Gabriel")
            cy.get('input[name="contact_last_name"]').type("Paval")
            cy.get('input[name="contact_phone_number"]').type("0746937884")
            cy.get('.vs__search').click().get('#vs1__option-1').click()
            cy.get('textarea[class="need-description form-control"]').type("Algocalmin")
            cy.get('input[class="form-control pac-target-input"]').type("strada Principala, numarul 367")
            cy.get('input[name="details"]').type("Locuieste la casa, poarta este neagra")
            cy.get('input[name="county"]').type("Suceava")
            cy.get('input[name="city"]').type("Dumbraveni")
            cy.get('input[name="postal_code"]').type("727225")

            //Click on Timite button
            cy.get('button[class="btn btn-primary"]').click()

            //check if a message is displayed
            cy.get('div[role="alert"]').should('exist')

            //check if the message is succes
            cy.get('span[class="text-center"]').should('have.text', 'Succes!')

        //wait 2 seconds
        cy.wait(2000)

        //add item 2
            //Click on the NEVOI RECOMANDATE
            cy.get(':nth-child(3) > .nav-link > p').click()

            //Click on the Add button
            cy.get('[class="btn btn-primary add-new-btn"]').click()

            //Fill in all the required fields
            cy.get('input[name="contact_first_name"]').type("Dan")
            cy.get('input[name="contact_last_name"]').type("Paval")
            cy.get('input[name="contact_phone_number"]').type("0746937884")
            cy.get('.vs__search').click().get('#vs2__option-0').click()
            cy.get('textarea[class="need-description form-control"]').type("Paine")
            cy.get('input[class="form-control pac-target-input"]').type("strada Principala, numarul 700")
            cy.get('input[name="details"]').type("bl:4, scara:A, et:2, ap:3")
            cy.get('input[name="county"]').type("Suceava")
            cy.get('input[name="city"]').type("Suceava")
            cy.get('input[name="postal_code"]').type("225620")

            //Click on Timite button
            cy.get('button[class="btn btn-primary"]').click()

            //check if a message is displayed
            cy.get('div[role="alert"]').should('exist')

            //check if the message is succes
            cy.get('span[class="text-center"]').should('have.text', 'Succes!')

        //wait 2 seconds
        cy.wait(2000)

        //Click on the NEVOI RECOMANDATE
        cy.get(':nth-child(3) > .nav-link > p').click()

        //Search by DESCRIERE
        cy.get('input[class="form-control form-control-md"]').type("Algocalmin")
        cy.get('tbody > :nth-child(1) > [aria-colindex="1"] > div').should('have.text', "Algocalmin")
        //wait 1 seconds
        cy.wait(1000)
        cy.get('input[class="form-control form-control-md"]').clear().type("Paine")
        cy.get('tbody > :nth-child(1) > [aria-colindex="1"] > div').should('have.text', 'Paine')

        //Search by PERSOANA CONTACT
        cy.get('input[class="form-control form-control-md"]').clear().type("Dan")
        cy.get('tbody > tr > [aria-colindex="2"] > div').should('include.text', "Dan")
        //wait 1 seconds
        cy.wait(1000)
        cy.get('input[class="form-control form-control-md"]').clear().type("Gabriel")
        cy.get('tbody > tr > [aria-colindex="2"] > div').should('include.text', "Gabriel")

        //Search by ADRESA
        cy.get('input[class="form-control form-control-md"]').clear().type("367")
        cy.get('tbody > :nth-child(1) > [aria-colindex="3"] > div').should('include.text', "367")
        //wait 1 seconds
        cy.wait(1000)
        cy.get('input[class="form-control form-control-md"]').clear().type("700")
        cy.get('tbody > :nth-child(1) > [aria-colindex="3"] > div').should('include.text', "700")

        //Search by TELEFON
        cy.get('input[class="form-control form-control-md"]').clear().type("0746937884")
        cy.get('tbody > :nth-child(1) > [aria-colindex="4"] > div').should("have.text", "0746937884")     
    })
})