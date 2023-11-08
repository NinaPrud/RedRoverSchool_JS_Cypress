/// <reference types="cypress" />

xdescribe('1- practice form - Form methods, reviu 11.2 Sveta', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/automation-practice-form')
    })
    it('1-filling the form', () => {
        cy.get('input#firstName').type('Vasya')

        cy.get('input#lastName').type('Pupkin')

        cy.get('input#userEmail').type('test@gmail.com')

        cy.get('input#gender-radio-1').siblings().click() // либо cy.get('input#gender-radio-1').check({force:true})
        cy.get('input#userNumber').type('1123456789')

        cy.get('input#dateOfBirthInput').click()        //  БАГ?? - некорректная очистка .clear().type('25 Jun 1985')
        cy.get('select.react-datepicker__month-select').select('June')
        cy.get('select.react-datepicker__year-select').select('1985')
       // cy.get('.react-datepicker__month').contains('18').click()
        cy.get('[class$="day--011"]').click()

        cy.get('#subjectsContainer').as('subjectsInput').type('e')
        cy.get('.subjects-auto-complete__menu-list').as('subjectsList').contains('English').click()
        cy.get('@subjectsInput').type('h')//  .type('Hindi').type('{enter}')  - Заваливается тест - сабмитится сразу
        cy.get('@subjectsList').contains('Hindi').click()

        cy.get('input#hobbies-checkbox-1').check({force:true})
        cy.get('input#hobbies-checkbox-2').siblings().click()
        cy.get('label[for="hobbies-checkbox-3"]').click()

        cy.get('input#uploadPicture').click().selectFile('cypress/fixtures/files/1213744.jpg')

        cy.get('div #currentAddress').type('Maymi Beach')

        cy.get('div.css-1wa3eu0-placeholder').contains('Select State').click()
        cy.get('div #react-select-3-option-2').click()

        cy.get('div.css-1wa3eu0-placeholder').contains('Select City').click()
        cy.contains('Panipat').click()

        cy.get('button#submit').click()

        cy.get('.modal-title.h4').should('have.text', 'Thanks for submitting the form').and('be.visible')
        cy.get('tbody tr td:nth-child(2)').each($el => {
           cy.wrap($el).should('not.be.empty')
           //  можно проверить на конкретные значения $el.text()
        })
    })
})

describe('2 - webtables - Form methods, reviu 11.2 Sveta', () => {

    const userDate = ['Vasily', 'Pupkin', 'test@gmail.com', 36, 2000, 'QA']
    beforeEach(()=> {
        cy.visit('https://demoqa.com/webtables')
    })

    it('2-filling the form', () => {
        cy.get('#addNewRecordButton').click()
        cy.get('#registration-form-modal').should('have.text', 'Registration Form')

      const userDate = ['Vasily', 'Pupkin', 'test@gmail.com', 36, 2000, 'QA']
        cy.get('input#firstName').type(userDate[0])
        cy.get('input#lastName').type(userDate[1])
        cy.get('input#userEmail').type(userDate[2])
        cy.get('input#age').type(userDate[3])
        cy.get('input#salary').type(userDate[4])
        cy.get('input#department').type(userDate[5]).type('{enter}')

        cy.get('div .rt-tr-group .rt-tr')
          .contains(userDate[0]).should('be.visible')
          .next().should('have.text', userDate[1]).and('be.visible')
          .next().should('have.text', userDate[3]).and('be.visible')
          .next().should('have.text', userDate[2]).and('be.visible')
          .next().should('have.text', userDate[4]).and('be.visible')
          .next().should('have.text', userDate[5]).and('be.visible')


        cy.get('#searchBox').type(userDate[1])
        cy.get('.rt-tbody .rt-tr[role="row"]:not(.-padRow)').should('have.length', 1)
        cy.get('span[id^="delete-record"]').click()

        cy.get('div .rt-tr-group .rt-tr')
          .contains(userDate[1]).should('not.exist')
        cy.get('.rt-tbody .rt-tr[role="row"]:not(.-padRow)').should('not.exist')
        cy.get('div.rt-noData').should('have.text', 'No rows found')
    }) 
})

