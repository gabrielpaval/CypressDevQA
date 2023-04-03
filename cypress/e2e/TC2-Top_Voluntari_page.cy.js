describe('Verify that on Top Voluntari page the map and at least one volunteer is displayed',()=>{
    //Navigate to main page
    beforeEach(()=>{
        cy.visit('https://iwanttohelp.bim.assistcloud.services/')
    })

    //Navigate to 'Top Voluntari' page
    it('Click on "Top Voluntari" page',()=>{
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
})