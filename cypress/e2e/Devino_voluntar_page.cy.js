describe('Devino voluntar page',()=>{
    //Verify that the user can register withan account already registered
    it('Verify that the user can register withan account already registered', ()=>{
        //Navigate to main page
        cy.visit('https://iwanttohelp.bim.assistcloud.services')

        //click on "Devino voluntar"
        cy.get(':nth-child(6) > .nav-link').click()

        //check if the form exists
        cy.get('div[class="col-sm-12 col-md-10 col-lg-8"]').should('exist')

        //check if the form title is "Inregistrare"
        cy.get('h5[class="title text-center"]').should('have.text', "Inregistrare")

        //fill in all the required fields
        cy.get('input[name="first_name"]').type("Dan")
        cy.get('input[name="last_name"]').type('Paval')
        cy.get('input[name="phone_number"]').type("0746937884") //the phone number should be different to register
        cy.get('input[name="email"]').type("gabipaval17@gmail.com")
        cy.get('.vs__search').click().get('#vs1__option-0').click()
        cy.get('input[class="form-control pac-target-input"]').type("strada Libertatii, numar 820")
        cy.get('input[name="details"]').type("bl:4, sc:A, et:4, ap:2")
        cy.get('input[name="county"]').type("Suceava")
        cy.get('input[name="city"]').type("Suceava")
        cy.get('input[name="postal_code"]').type("720066")
        cy.get('input[name="password"]').type("123456")
        cy.get('input[name="password_confirmation"]').type("123456")

        //click on "Inregistrare" button
        cy.get('button[class="btn btn-primary"]').click()

        //check error message
        cy.get('.alert').should('exist')
        cy.get('.alert > span').should('have.text', "Inregistrarea a esuat!")

        //check if is still on "Devino voluntar" page
        cy.get('.register-page').should('be.visible')
    })

    //Verify that the password confirmation field works
    it('Verify that the password confirmation field works', ()=>{
        //Navigate to main page
        cy.visit('https://iwanttohelp.bim.assistcloud.services')

        //click on "Devino voluntar"
        cy.get(':nth-child(6) > .nav-link').click()

        //check if the form exists
        cy.get('div[class="col-sm-12 col-md-10 col-lg-8"]').should('exist')

        //check if the form title is "Inregistrare"
        cy.get('h5[class="title text-center"]').should('have.text', "Inregistrare")

        //fill in all the required fields
        cy.get('input[name="first_name"]').type("Dan")
        cy.get('input[name="last_name"]').type('Paval')
        cy.get('input[name="phone_number"]').type("0746937884") //the phone number should be different to register
        cy.get('input[name="email"]').type("gabipaval17@gmail.com")
        cy.get('.vs__search').click().get('#vs1__option-0').click()
        cy.get('input[class="form-control pac-target-input"]').type("strada Libertatii, numar 820")
        cy.get('input[name="details"]').type("bl:4, sc:A, et:4, ap:2")
        cy.get('input[name="county"]').type("Suceava")
        cy.get('input[name="city"]').type("Suceava")
        cy.get('input[name="postal_code"]').type("720066")
        cy.get('input[name="password"]').type("123456")
        cy.get('input[name="password_confirmation"]').type("12345")

        //click on "Inregistrare" button
        cy.get('button[class="btn btn-primary"]').click()

        //check the error message
        cy.get('div[class="errors text-left mb-3"]')
        .find('span[class="text-left text-danger"]')
        .should('be.visible')
        .and('have.text', " Parolile nu corespund. ")
    })
})