/// <reference types="cypress" />

describe('reviu_11_4_ alert, confirm, promts', () => {
    beforeEach(() => {
        cy.visit('/alerts')
    })
    it('alert', () => {
        cy.get('#alertButton').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('You clicked a button')
        })
    });

    it('confirm - click OK', () => {
        cy.get('#confirmButton').click()
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Do you confirm action?')
        })
        cy.get('#confirmResult').should('contain', 'Ok').and('contain', 'You selected ')
    });

    it('confirm - click Cancel', () => {
        cy.get('#confirmButton').click()
        cy.on('window:confirm', () => false)
        cy.get('#confirmResult').should('contain', 'Cancel').and('contain', 'You selected ')
    });

    it('confirm - click Cancel 2', () => {
        cy.get('#confirmButton').click()
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Do you confirm action?')
            return false
        });
        cy.get('#confirmResult').should('contain', 'Cancel').and('contain', 'You selected ')
    });

    it('prompt window', () => {
        cy.window().then((inputData) => {
            cy.get('#promtButton').click()
            cy.stub(inputData, 'prompt').returns('JS')
            cy.get('#promptResult')
              .should('contain', 'JS')
              .and('contain', 'You entered ')
        });
    });
});