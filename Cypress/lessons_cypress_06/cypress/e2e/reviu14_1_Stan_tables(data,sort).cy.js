/// <reference types="cypress" />

describe('reviu14_1_Stan_tables(data,sort)', () => {

    it('Open weather| shtats table is sort alphabeticaly', () => {
        cy.visit('https://openweathermap.org/api/history-data-state')

        cy.get('table.material-table td:first-child').then(($els) => {
            let actualStates = Cypress.$.makeArray($els).map(($el) => $el.innerText)
            let expectStates = actualStates.slice().sort()//.reverse()

            //expect(actualStates).to.deep.equal(expectStates)           // в афавит порядке (т.е. важен порядок)
            //expect(actualStates).to.include.members(expectStates)      //  что просто совпадают
            expect(actualStates).to.include.ordered.members(expectStates)  //  если важен порядок
        });
    });

    const expectedSum = 43900
    it('Open weather| addition prices', () => {
        cy.visit('https://openweathermap.org/api/history-data-state')

        cy.get('table.material-table td:last-child').then(($els) => {
            let arr = Cypress.$.makeArray($els).map(($el) => $el.innerText)
            let actualSum = arr
                .map(el => +el.replace(/\D/g, ''))  // .map(el => el.replace(/\D/g, '') убираем все НЕ числа, т.е. USD И ,
                .reduce((sum, el) => sum + el, 0)

           // console.log(actualSum)
            expect(actualSum).to.be.equal(expectedSum)
        });
    });

    it.only('Sort a table by keys', () => {
        cy.visit('https://demoqa.com/webtables')
        cy.getTable().then(arr => {
            cy.get('div.rt-th:first-child').click();
            cy.getTable().then(actArr => {
                let expArr = arr.sort((a, b) => a['First Name'].localeCompare(b['First Name']));
                expect(actArr).to.deep.equal(expArr)
            })
        })
    });
});