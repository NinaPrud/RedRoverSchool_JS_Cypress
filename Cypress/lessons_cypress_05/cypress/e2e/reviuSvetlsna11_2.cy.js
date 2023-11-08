/// <reference types = "cypress"/>

const demoQA = 'https://demoqa.com/'
const interactionsCard = 'div.card:nth-child(5)'
const interactinsHeder = '.main-header'
const interactionGroup = 'div.element-group:nth-child(5) div.element-list'
const sortableItem = "div.element-group:nth-child(5) div.element-list #item-0"

describe ('Verify interactions card_Reviu Svetlana 11_2', () => {

    beforeEach(() => {
        cy.visit(demoQA)

    });

    it ('1 test verify interactions card', () => {
        cy.get(interactionsCard).click()
        cy.url().should('include','/interaction')
        cy.get(interactinsHeder).should('have.text','Interactions')
          .and('be.visible') 
    });

    it('2 test verify interactions card', () => {
        cy.get(interactionsCard).click()
        cy.get(interactionGroup).should('have.class','collapse show')
        cy.get(sortableItem).should('have.text','Sortable')
          .and('be.visible')
    })
})