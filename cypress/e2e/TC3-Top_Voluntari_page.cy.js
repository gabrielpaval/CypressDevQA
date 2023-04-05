
describe('Verify the user is able to Zoom in or out out the map',()=>{
    //Navigate to main page
    beforeEach(()=>{
        cy.visit('https://iwanttohelp.bim.assistcloud.services/')
    })

    //Test if user can zoom in
    it('Test zoom in', ()=>{
    //click on "Top Voluntari"
     cy.get(':nth-child(2) > .nav-link').click();
     
     //zooming in
     cy.get('[aria-label="Mărește"]').click().click()
    })

    //Test if user can zoom out
    it('Test zoom out', ()=>{
    //click on "Top Voluntari"
     cy.get(':nth-child(2) > .nav-link').click();
         
     //zooming out
      cy.get('[aria-label="Micșorează"]').click().click()
    })
})