/// <reference types="cypress" />

context('actions exempls', () => {

    beforeEach(()=> {
        cy.visit('https://example.cypress.io/commands/actions')
    })

    it('.type() - type into a DOM element', () => {
        cy.get('.action-email')
          .type('fake@email.com').should('have.value', 'fake@email.com')
          .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
          .type('{del}{selectall}{backspace}')
          .type('{shift}')
          .type('slow.typing@email.com', { delay: 1000 })
          .should('have.value', 'slow.typing@email.com')
    })
})