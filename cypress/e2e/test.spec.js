describe('Login auth for Brandone interview', () =>{
    //UI elements
    it('Searcg ui elements', ()=>{
        cy.visit('http://staging.shelflife.localhost:3000/login')
        cy.get('.vs-page__content').should('exist')
        cy.get('.login__intro').should('exist')
           .contains('Powered by Field Supply')
        cy.get('form').should('exist')
            .get('[data-qa="username"]')
            .get('[data-qa="password"]')

   })
    //login test
   it('login with correct details', ()=>{
    cy.visit('http://staging.shelflife.localhost:3000/login')
    cy.get('[data-qa="username"]').type('qa-philip-globsl-planner-abuja')
    cy.get('[data-qa="password"]').type('stream-type-sound')
    cy.get('.vs-button').click()
    cy.url('includes', 'http://staging.shelflife.localhost:3000')
   })

    //incorrectdetails
   it.only('login with incorrect details', ()=>{
    cy.visit('http://staging.shelflife.localhost:3000/login')
    cy.get('[data-qa="username"]').type('qa-philip-globsl-planner-abuja')
    cy.get('[data-qa="password"]').type('stream-type')
    cy.get('.vs-button').click()
    cy.get('.vs-banner').should('be.visible')
   })
})