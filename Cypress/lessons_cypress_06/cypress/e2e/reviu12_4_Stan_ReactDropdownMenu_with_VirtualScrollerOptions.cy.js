/// <reference types="cypress" />

describe('reviu 12_4 Stan Drop Down Menu', () => {
    it('DemoQA - Practis Form - Drop Down State', () => {
        cy.visit('https://demoqa.com/automation-practice-form')

        cy.get('#state').click()
        cy.get('[id^=react-select-3-option]').then(($els) => {
            const item = Cypress.$.makeArray($els).filter($el => $el.innerText == 'Rajasthan')
            return cy.wrap(item)
        }).click({ force: true })
        cy.get('#state .css-1uccc91-singleValue').should('have.text', 'Rajasthan')
    })

    it.only('PrimReact Dropdown Virtual Scroll', () => {
        cy.visit('https://primereact.org/dropdown/')
        cy.get('.doc-main .py-3:nth-of-type(8) .p-dropdown').click()

        function seatchForOption(level = 0) {
            if(level > 30) {
                throw new Error('Exeeded max recurcion level!')
            }
            cy.get('.doc-main .py-3:nth-of-type(8) .p-dropdown-label').then(($el) => {
                const activeOption = $el.text()
                if (activeOption != 'Item #25') {
                    cy.wrap($el).type('{downarrow}')
                    seatchForOption(++level)
                }
                cy.wrap($el).click()
            })
        }
        seatchForOption()

        cy.get('.doc-main .py-3:nth-of-type(8) .p-dropdown-label').should('have.text', 'Item #25')
    })
})