/// <reference types="cypress" />

import { set } from "../fixtures/demoQAFormData.json"
// можно весь файл подключать, или много ключей через запятую

describe('reviu_11_4_Stan -fixtures', () => {

    beforeEach(() => {
        //cy.viewport(1920, 1080)
        cy.visit('https://demoqa.com/')
    });
    // 1 способ  подключения fixtures - классический
    before('fixtures 1 - cy.fixture() - this.data', function () {
        cy.fixture('demoQAFormData').then((data) => {
            this.demoQAData = data
        })
    })

    it('fixtures 1 - cy.fixture() - this.data', function () {
        cy.get('.card:nth-child(2)').click()
        cy.get('.element-group:nth-child(2)>div').click()
        cy.get('input#firstName')
            .clear()
            .type(`${this.demoQAData.firstName}{enter}`)
            .should('have.value', this.demoQAData.firstName)
            .and('have.css', 'border-color', 'rgb(40, 167, 69)')

        cy.get('input#userEmail')
            .clear()
            .type('Nina@redrover.sch{enter}')
            .should('have.value', 'Nina@redrover.sch')
            .and('have.css', 'border-color', 'rgb(40, 167, 69)')
    });

    // 2 способ  подключения fixtures с переменной
    // можно c before  несколько тестов, т.к. записывем в переменную
    // не надо  function

    let demoQAData2

    before('fixtures 2 - cy.fixture() + переменная + then', () => {
        cy.fixture('demoQAFormData').then((data) => {
            demoQAData2 = data
        })
    })

    it('fixtures 2 - cy.fixture() + переменная + then', () => {
        cy.get('.card:nth-child(2)').click()
        cy.get('.element-group:nth-child(2)>div').click()
        cy.get('input#firstName')
            .clear()
            .type(`${demoQAData2.firstName}{enter}`)
            .should('have.value', demoQAData2.firstName)
            .and('have.css', 'border-color', 'rgb(40, 167, 69)')

        cy.get('input#userEmail')
            .clear()
            .type('Nina@redrover.sch{enter}')
            .should('have.value', 'Nina@redrover.sch')
            .and('have.css', 'border-color', 'rgb(40, 167, 69)')
    });

    // 3 способ  подключения fixtures - c alias
    before('fixtures 3 - cy.fixture() - @alias', () => {
        cy.fixture('demoQAFormData').as('data')
        cy.fixture('example').as('example')

    })
    // нужно оборачивать в then

    it('fixtures 3 - cy.fixture() - @alias', () => {
        cy.get('@data').then((demoQAData3) => {
            cy.get('@example').then(example => {
                cy.get('.card:nth-child(2)').click()
                cy.get('.element-group:nth-child(2)>div').click()
                cy.get('input#firstName')
                    .clear()
                    .type(`${demoQAData3.firstName}{enter}`)
                    .should('have.value', demoQAData3.firstName)
                    .and('have.css', 'border-color', 'rgb(40, 167, 69)')

                cy.get('input#userEmail')
                    .clear()
                    .type(`${example.email}{enter}`)
                    .should('have.value', example.email)
                    .and('have.css', 'border-color', 'rgb(40, 167, 69)')
            });
        });
    });

    //4- через import - можно работать с массивом fixtures c forEach()

    set.forEach(obj => {
        it.only(`4-  работа с массивом fixtures  - через import для ${obj.firstName}`, () => {
            cy.get('.card:nth-child(2)').click()
            cy.get('.element-group:nth-child(2)>div').click()
            cy.get('input#firstName')
                .clear()
                .type(`${obj.firstName}{enter}`)
                .should('have.value', obj.firstName)
                .and('have.css', 'border-color', 'rgb(40, 167, 69)')

            cy.get('input#userEmail')
                .clear()
                .type(`${obj.userEmail}{enter}`)
                .should('have.value', obj.userEmail)
                .and('have.css', 'border-color', 'rgb(40, 167, 69)')
        });
    })
});