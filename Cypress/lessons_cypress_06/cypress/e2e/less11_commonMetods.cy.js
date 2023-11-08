/// <reference types="cypress" />

describe ('lecsion2 common methods & assertions', () => {

    const categoryCards = '.category-cards .card'

    beforeEach(() => {
        cy.visit('https://demoqa.com/')
    })

    it('find', () => {
        cy.get(categoryCards).find('h5').should('have.length', 6)
    })

    it('title - eq', () => {
        cy.title().should('eq', 'DEMOQA')
    })

    it('pause & log',() => {
        cy.pause()
        cy.log('pause & log это методы для отладки, в  log  можно всавлять переменные')
    })
    it('contain, be.visible', () => {
        cy.get(categoryCards).contains('Elements').click()
        cy.get('div.main-header').should('contain', 'Element').and('be.visible')
    })

    it('find, css',() => {
        cy.get(categoryCards).find('svg').should('have.css', 'color', 'rgb(1, 160, 224)')  // все 6 svg  проверит
    })

    it('have.class, disabled', () => {
        cy.get(categoryCards).contains('Widgets').click()
        cy.contains('Tabs').click()
        cy.get('.nav-tabs #demo-tab-more').should('have.class', 'disabled')
    })

    it('check/uncheck - should("be.checked"/"not.be.cheked")', () => {
        cy.get(categoryCards).contains('Elements').click()
        cy.contains('Check Box').click()
        
        cy.get('label[for="tree-node-home"]').click()
          .find('input').should('be.checked')
          .uncheck({force:true}).should('not.be.checked')

          .check({force:true}).should('be.checked')   // .ckeck()/.uncheck()  только для  input с  type  checkbox/radio  -  я для  label -  click()
    })

    it('select', () => {
        cy.get(categoryCards).contains('Widgets').click()
        cy.contains('Select Menu').click()

        cy.get('select#cars').select('Saab')
        cy.get('select#cars option').eq(1).should('have.value', 'saab')
    })

    it('trigger', () => {
        cy.get(categoryCards).contains('Widgets').click()
        cy.contains('Select Menu').click()

        cy.get('.css-2b097c-container').contains('Select...').trigger('mousdown')
        cy.contains('Blue').click({force:true})

       //????? cy.get('[style*="overflow: hidden;"] .css-12jo7m5')//.find('.css-12jo7m5')//.should('be.visible')
       // .should('have.text', 'Blue')
    })

    it('eq', () => {
        cy.get(categoryCards).contains('Widgets').click()
        cy.contains('Tabs').click()

        cy.get('.nav-tabs a').eq(0).should('have.text', 'What')
    })

}) 

describe('invoke, alias',() => {
    // alias вызвать можно через @  или this
    beforeEach(() => {
        cy.visit('https://openweathermap.org/')
        //cy.get('#desktop-menu a[href="/guide"]').as('menuGuideLink')  // 1  вар исп - для локаторов 

        //cy.get('#desktop-menu a[href="/guide"]').invoke('text').as('menuGuideText')  // 2 - для переменных изылеченных данных
        
    })
    // НЕ РАБОТАЕТ text!!!!!!!!!!!!!!!
    // it.only('', () => {
    //     cy.get('#desktop-menu a[href="/guide"]').click({force:true})
    //     cy.get('h1.breadcrumb-title').should('have.text', '@menuGuideText')
    // })

    it('invoke', () => {
        cy.contains('Marketplace').invoke('removeAttr', 'target').wait(2000).click()

    })

    it('each, wrap', () => {
        cy.get('.search-container > input').type('New York', {force:true}).type('{enter}')

        cy.get('ul.search-dropdown-menu > li').each(($el, index) => {
            let text = $el.text()
            if(text.includes('New York City, US ')) {
                cy.wrap($el).click()
            } //else cy.log('Error!!')
        })
        cy.get('.current-container h2').should('have.text', 'New York City, US')
    })
})