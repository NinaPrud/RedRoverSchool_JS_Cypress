
describe('my HW test 1', () => {
    it ('clicking siblings navigates to a new url', () => {
        cy.visit('https://example.cypress.io') 
        cy.contains('siblings').click()
        cy.url().should('include', '/commands/traversal')

    })

})

// url  не совсем правильно искать, т.к. не везде может быть расширенный юрл ( или огромный)

// npm init -  это инициализвция проекта  (packege.json -  содержит инфо о поекте, его можно менять(специальным людям!))
// npm i cypress --save-dev  - это установка cypress  в папку данного проекта
// npx cypress open -  запуск cypress
// папка e2e - очень важна - туда мы записываем тесты (файлы),
// которые обязательно должны содержать на конце '.cy.js'

// describe отвечает за тест сьют
// it отвечаетс за тест кейс
//  в одном descr  может быть несколько  it
// cy.visit() - щкрыть опред ресурс
// cy.contains().click() -  найти какой-то элемент  и кликнуть на него
// cy.url().should('include', '/commands/actions') - проверяет, что url  содержит ендпоинт /commands/actions