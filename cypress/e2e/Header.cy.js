describe('Verify all header elements',()=>{
    //Navigate to main page
    beforeEach(()=>{
        cy.visit('https://iwanttohelp.bim.assistcloud.services/')
    })

    //Test if the main page is loaded
    it('Navigate to "Acasa" page',()=>{
        //click on "Acasa"
        cy.get('.navbar-brand').click()

        //check if the "Acasa" page has been accessed
        cy.url().should('eq', 'https://iwanttohelp.bim.assistcloud.services/')
        
        //check the text
        cy.get('a[class="nav-link router-link-exact-active router-link-active"]').should('have.text', " acasa ")
    })

    //Test if the "Top Voluntari" page is loaded
    it('Navigate to "Top Voluntari" page',()=>{
        //click on "Top Voluntari"
        cy.get(':nth-child(2) > .nav-link').click();

        //check if the "Top Voluntari" page has been accessed
        cy.url().should('contains', '/search')

        //check the text
        cy.get('a[class="nav-link router-link-exact-active router-link-active"]').should('have.text', " Top voluntari ")
    })

    //Test if the "Lista nevoi" page is loaded
    it('Navigate to "Lista Nevoi" page',()=>{
        //click on "Lista nevoi"
        cy.get(':nth-child(3) > .nav-link').click()

        //check if the "Lista nevoi" page has been accessed
        cy.url().should('contains','/needs_list')

        //check the text
        cy.get('a[class="nav-link router-link-exact-active router-link-active"]').should('have.text', " Lista nevoi ")
    })

    //Test if the "Despre noi" page is loaded
    it('Navigate to "Despre noi" page',()=>{
        //click on "Despre noi"
        cy.get(':nth-child(4) > .nav-link').click()

        //check if the "Despre noi" page has been accessed
        cy.url().should('contains','/about')

        //check the text
        cy.get('a[class="nav-link router-link-exact-active router-link-active"]').should('have.text', " Despre noi ")
    })

    //Test if the "Ofera sugestie" page is loaded
    it('Navigate to "Ofera sugestie" page',()=>{
        //click on "Ofera sugestie"
        cy.get(':nth-child(5) > .nav-link').click()

        //check if the "Ofera sugestie" page has been accessed
        cy.url().should('contains','/contact')

        //check the text
        cy.get('a[class="nav-link router-link-exact-active router-link-active"]').should('have.text', " Ofera Sugestie ")       
    })

    //Test if the "Devino voluntar" page is loaded
    it('Navigate to "Devino voluntar" page',()=>{
        //click on "Devino voluntar"
        cy.get(':nth-child(6) > .nav-link').click()

        //check if the "Devino voluntar" page has been accessed
        cy.url().should('contains','/auth/register')

        //check the text
        cy.get('a[class="nav-link router-link-exact-active router-link-active"]').should('have.text', " Devino voluntar ")
    })

    //Test if the "Autentificare" page is loaded
    it('Navigate to "Autentificare" page',()=>{
        //click on "Autentificare"
        cy.get(':nth-child(7) > .nav-link').click()
        
        //check if the "Autentificare" page has been accessed
        cy.url().should('contains','/auth/login')

        //check the text
        cy.get('a[class="nav-link router-link-exact-active router-link-active"]').should('have.text', " Autentificare ")
    })
})