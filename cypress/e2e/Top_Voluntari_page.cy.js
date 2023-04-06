describe('Top Voluntari page',()=>{
    //Navigate to main page
    beforeEach(()=>{
        cy.visit('https://iwanttohelp.bim.assistcloud.services/')
    })

    //Navigate to 'Top Voluntari' page
    it('Verify that on Top Voluntari page the map and at least one volunteer is displayed',()=>{
        //click on "Top Voluntari"
        cy.get(':nth-child(2) > .nav-link').click();
            
        //verify that the map element is displayed
        cy.get('[style="z-index: 3; position: absolute; height: 100%;'+
            ' width: 100%; padding: 0px; border-width: 0px;'+
            ' margin: 0px; left: 0px; top: 0px;'+
            ' touch-action: pan-x pan-y;"]').should('be.visible')
            
        //verify that at least one volunteer element is displayed
        cy.get(':nth-child(1) > .card').should('exist')
    })

    //Test if user can zoom in
    it('Verify the user is able to Zoom in or out out the map', ()=>{
        //click on "Top Voluntari"
         cy.get(':nth-child(2) > .nav-link').click();

         //zooming in
         cy.get('[aria-label="Mărește"]').click().click()

         //zooming out
         cy.get('[aria-label="Micșorează"]').click().click()
        })
})