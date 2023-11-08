/// <reference types="cypress"/>

describe('todo list checking',() => {
    
    beforeEach(() => {
        cy.visit('https://example.cypress.io/todo')
    });

    it('displays two todo items by default', () => {
        cy.get('.todo-list li').should('have.length', 2)
        cy.get('.todo-list li').first().should('have.text','Pay electric bill')
        cy.get('.todo-list li').last().should('have.text','Walk the dog')
    });

    let item4 = 'Feed the cat'
    it('can add new todo items', () => {
        cy.get('input.new-todo').type('Cleen house {enter}')
        cy.get('input.new-todo').type(`${item4} {enter}`)

        cy.get('.todo-list li').should('have.length', 4)
        cy.get('.todo-list li').last().should('have.text', item4)
    })

    it('can check off an item as completed', () => {
        cy.contains('Pay electric bill')
          .parent()
          .find('input[type=checkbox]')
          .check()

        cy.contains('Pay electric bill')
          .parents('li')   
          .should('have.class', 'completed')
    })

    context('with a checked task', () => {
        beforeEach(() => {
            cy.contains('Pay electric bill')
              .parent()
              .find('input[type="checkbox"]')
              .check()
        })

        it('can filter for uncompleted tasks', () => {
            cy.contains('Active').click()
            cy.get('.todo-list li').should('have.length', 1)
              //.first()
              .should('have.text', 'Walk the dog') 

            cy.contains('Pay electric bill').should('not.exist')
        })

        it('can filter for completed tasks', () => {
            cy.contains('Completed').click()
            cy.get('.todo-list li').should('have.length', 1)
              .first()
              .should('have.text', 'Pay electric bill')

            cy.contains('Walk the dog').should('not.exist')
        })

        it('can delete all completed tasks', () => {
            cy.contains('Clear completed').click()
            cy.get('.todo-list li')
              .should('have.length', 1)
              .should('not.have.text', 'Pay electric bill')

            cy.contains('Clear completed').should('not.exist')
        })
    })
})