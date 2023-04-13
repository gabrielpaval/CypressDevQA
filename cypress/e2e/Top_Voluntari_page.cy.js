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
        cy.get('#search-map').should('be.visible')
            
        //verify that at least one volunteer element is displayed
        cy.get('div[class="card-body"]').find('div[class="row"]')
        .find('div')
        .then((row)=>{
            expect(row.length).to.be.at.least(1)
            expect(row[0]).to.be.visible
        })
    })

    //Test if user can zoom in
    it('Verify the user is able to Zoom in or out out the map', ()=>{
        //click on "Top Voluntari"
         cy.get(':nth-child(2) > .nav-link').click();

         //wait 1 seconds
         cy.wait(1000) 

         //zooming in
         cy.get('[aria-label="Mărește"]').click()

         //validate zoom in
         cy.get('#search-map > div.vue-map > div > div.gm-style > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div').should('have.css', 'z-index', '992')

         //wait 1 seconds
         cy.wait(1000)

         //zooming out
         cy.get('[aria-label="Micșorează"]').click()

         //validate zoom out
         cy.get('#search-map > div.vue-map > div > div.gm-style > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div').should('have.css', 'z-index', '993')
    })
})