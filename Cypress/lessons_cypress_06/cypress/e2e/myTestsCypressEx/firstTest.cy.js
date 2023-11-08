/// <reference types="cypress"/>


describe('first test', () => {

    beforeEach(() => {
        cy.visit('https://example.cypress.io/')
    })

    it('verify link', () => {
        cy.contains('next').click()
        cy.url().should('include', '/commands/traversal') 
        cy.get('h1').should('have.text', 'Traversal')
    })

   it('verify link 2', () => {
        cy.get('.home-list >:nth-child(2) ul>:nth-child(8) a').click()
        cy.url().should('contain', '/commands/traversal')  
        cy.get('h1').should('contain', 'raversal')
    })

    it('verify link 3', () => {
        cy.get('a[href="/commands/actions"]').contains('select').click()
        cy.url().should('contain', '/commands/actions')  
    })
});