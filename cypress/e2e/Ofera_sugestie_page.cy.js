describe('Ofera_sugestie_page',()=>{
    let randomText = ""
    let testEmail = ""
    
    //preconditions
    beforeEach(()=>{
        //create a valid email
        var pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        for (var i = 0; i < 10; i++){
        randomText+=pattern.charAt(Math.floor(Math.random() * pattern.length));
        }
        testEmail = randomText + '@gmail.com'
    })

    //Verify that the user is able to use"Ofera o solutie" form
    it('Verify that the user is able to use"Ofera o solutie" form', ()=>{
        //Navigate to main page
        cy.visit('https://iwanttohelp.bim.assistcloud.services')

        //click on "Ofera sugestie"
        cy.get(':nth-child(5) > .nav-link').click()

        //check if the form exists
        cy.get('div[class="col-sm-12 col-md-8 col-lg-6"]').should('exist')
        cy.get('div[class="col-sm-12 col-md-8 col-lg-6"]').should('be.visible')

        //check if the form title is "Ofera o sugestie"
        cy.get('h5[class="title text-left"]').should('have.text', "Ofera o sugestie")

        //fill all the field required
        cy.get('input[name="last_name"]').type("Paval Gabriel")
        cy.get('input[name="email"]').type(`${testEmail}`)
        cy.get('textarea[class="message-textarea form-control"]').type("Aceasta sugestie este trimisa pentru a face o proba la formular")

        //click on "Trimite button"
        cy.get('button[class="btn btn-primary"]').click()

        //check if a message is displayed
        cy.get('div[role="alert"]').should('exist')

        //check if the message is succes
        cy.get('span[class="text-center"]').should('have.text', 'Mesajul a fost trimis!')
    })
})