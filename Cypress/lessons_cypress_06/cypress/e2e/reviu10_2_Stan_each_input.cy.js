/// <reference types="cypress"/>

// переменные лучше делать в дескрайбе, а не в глобальной зоне видимости, (НО НЕ В it!!)
describe('reviu Stan tests', () => {
    const categoryCards = '.category-cards .card'
    const expCardNames = ['Elements', 'Forms', 'Alerts, Frame & Windows', 'Widgets', 'Interactions', 'Book Store Application']
    const firstNameDate = 'Nina'

    beforeEach(() => {
        //cy.viewport(1920, 1080)
        cy.visit('https://demoqa.com/')
    });


    it('category cards menu has 6 elements', () => {
        cy.get(categoryCards).should('have.length', expCardNames.length)
    });

    it('category cards have expected names - var1 - each + wrap', () => {
        cy.get(categoryCards).each(($el, idx) => {   // без $  тоже работает, это просто для себя показать что я работаю с jQuery элементом
            //cy.log($el.text())
            cy.wrap($el.text()).should('contain', expCardNames[idx])  // 'have.text' - НЕ СРАБОТАЕТ!!!
        })
    });

    it('category cards have expected names - var2 - each + expect', () => {
        cy.get(categoryCards).each(($el, idx) => {
            expect($el.text()).to.be.equal(expCardNames[idx])
        })
    });

    it('category cards have expected names - var3 - JS(.then) + chai', () => {
        cy.get(categoryCards)
          .then(($els) => {
            return Cypress.$.makeArray($els).map($el => $el.innerText)     // jQueri - библиотека
          })
          .should('deep.equal', expCardNames)                     // chai assershn - deep.equal
    });

    it('category cards have expected names - var4 - JS(.then) + expect', () => {
        cy.get(categoryCards)
          .then(($els) => {
            let actual = Cypress.$.makeArray($els).map($el => $el.innerText)
            expect(actual).to.be.deep.equal(expCardNames)
          })
    });

    it('category cards have expected names - var5', () => {
        cy.get(categoryCards)
          .then(($els) => {
            return Cypress._.map($els, 'innerText')     // loDash  библиотека
          })
          .should('deep.equal', expCardNames)
    });

    // возможно лучше разделять на разные тесты, т.к. если что-то неправильно, тест останави=ливается и дальше не идет(остальные элементы не проверим)
    context('category cards have expected names -var dif tests', () => {

        it('1 card have expected names', () => {
            cy.get(categoryCards).first().should('have.text', expCardNames[0])
        });
        it('2 card have expected names', () => {
            cy.get(categoryCards).first().next().should('have.text', expCardNames[1])
        });
        it('3 card have expected names', () => {
            cy.get(categoryCards).first().next().next().should('have.text', expCardNames[2])
        });
        it('4 card have expected names', () => {
            cy.get('.card:nth-child(4)').should('have.text', expCardNames[3])
        });
        it('5 card have expected names', () => {
            cy.get(categoryCards).last().prev().should('have.text', expCardNames[4])
        });
        it('6 card have expected names', () => {
            cy.get(categoryCards).last().should('have.text', expCardNames[5])
        });
    });

    it.only('input form filling', () => {    // Разные it
    // 1 - проверка плейсхолдера
        cy.get('.card:nth-child(2)').click()
        cy.get('.element-group:nth-child(2)>div').click()
        cy.get('input#firstName')
          .should('have.attr', 'placeholder', 'First Name')   // НЕ СРАБОТАЕТ для инпута .should('have.text', 'First Name' )!!!!
          .and('be.visible')
                 // либо можно проверить, что поле пустое
          .should('have.text', '')

    // 2 - проверка ввода текста
        cy.get('input#firstName')
          .type(firstNameDate)
          .should('have.value', firstNameDate)     // 'have.text'  НЕ СРАБОТАЕТ для инпута!!!! - т.к введенное значение - это value
          .and('be.visible')  

    // 3 - проверка, что заполненное поле стало зеленым после  submit/enter
        //  cy.get('button#submit').click()
        //  cy.get('input#firstName').should('have.css', 'border-color', 'rgb(40, 167, 69)')

    // 4 - type  с enter     (все заново, т.к. submit  была нажата) 
        cy.get('input#firstName').clear().should('have.value', '')
          .type(`${firstNameDate}{enter}`)   // ('Nina{enter}')
          .should('have.css', 'border-color', 'rgb(40, 167, 69)' )
    });

});