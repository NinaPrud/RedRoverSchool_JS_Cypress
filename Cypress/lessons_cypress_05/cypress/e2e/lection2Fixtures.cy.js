/// <reference types = "cypress" />


describe('Repeat 11 lesson with fixtures', () => {


    beforeEach(function () {
        cy.fixture('homeDemoQA').then((data) => {
            this.home = data
        })
        cy.fixture('elementsDemoQA').then((data) => {
            this.elements = data
        })
        cy.fixture('widgetsDemoQA').then((data) => {
            this.widgets = data
        })
    });

    beforeEach(function () {
        cy.visit(this.home.baseUrlDemoQA)
    });

    it('Verify header image is visible < Home', function () {
        cy.get(this.home.headerImage)
          .should('exist')
          .and('be.visible')
    });

    it('Verify category card has correct number < Home', function () {
        cy.get(this.home.allCards)
          .should('have.length', this.home.numberOfCards)
        cy.get(this.home.allCards).find('h5')
          .should('have.length', this.home.numberOfCards)
    });

    it('Verify Elements card < Home', function () {
        cy.get(this.home.allCards).contains(this.home.elementsCardName).click()
        cy.url().should('include', this.home.elementsCardUrl)
        cy.get(this.home.cardPageMainHeader)
          .should('have.text', this.home.elementsCardName)
          .and('be.visible')
    });

    it('Verify Input Field < Text Box < Elements', function () {
        cy.get(this.home.elementsCard).click()
        cy.get(this.elements.textBoxButton).click()
        cy.get(this.elements.fullNameInput)
          .should('have.attr', 'placeholder', this.elements.fullNamePlaceholder)
          .type(this.elements.fullNameData, { force: true })
          .clear()
    });

    it('Verify Check Box < Elements ', function () {
        cy.get(this.home.elementsCard).click()
        cy.get(this.elements.checkBoxButton).click()
        cy.get(this.elements.checkBoxInput)
          .should('not.be.checked')
          .check({ force: true })
          .should('be.checked')
    });

    it('Verify Check Box text after checking < Elements', function () {
        cy.get(this.home.elementsCard).click()
        cy.get(this.elements.checkBoxButton).click()
        cy.get(this.elements.checkBoxResult)
          .should('not.exist')
        cy.get(this.elements.checkBoxInput).check({ force: true })
        cy.get(this.elements.checkBoxResult)
          .should('exist')
          .and('include.text', this.elements.checkBoxText)
    });

    it('Verify Radio Button "No" < Elements', function () {
        cy.get(this.home.elementsCard).click()
        cy.get(this.elements.radioButtonButton).click()
        cy.get(this.elements.noRadioButton)
          .should('have.class', 'disabled')
    });

    it('Verify Radio Button "Yes-Impressive" < Elements', function () {
        cy.get(this.home.elementsCard).click()
        cy.get(this.elements.radioButtonButton).click()
        cy.get(this.elements.yesRadioButton).check({ force: true })
          .should('be.checked')
        cy.get(this.elements.impressiveRadioButton)
          .should('not.be.checked')
    });

    it('Verify Radio Button "Impressive" text < Elements', function() {
        cy.get(this.home.elementsCard).click()
        cy.get(this.elements.radioButtonButton).click()
        cy.get(this.elements.impressiveRadioButton).check({force:true})
        cy.get(this.elements.textSuccess).should('have.text', this.elements.textSuccessImpressive)
    })

    it('Verify Select Menu < Widgest', function () {
        cy.get(this.home.widgetsCard).click()
        cy.get(this.widgets.selectMenuButton).click()
        cy.get(this.widgets.oldStyleSelectMenu).select(this.widgets.colorStyle)
          .should('have.value', this.widgets.valueStyle)
    });

    it('Verify Tabs-container header text < Widgest', function () {
        cy.get(this.home.widgetsCard).click()
        cy.get(this.widgets.tabsMenuButton).click()
        cy.get(this.widgets.tabsContainerHeader).should('have.text', this.widgets.tabsContainerHeaderName)
    });

    it('Verify Tabs Origin name < Widgest', function() {
        cy.get(this.home.widgetsCard).click()
        cy.get(this.widgets.tabsMenuButton).click()
        cy.get(this.widgets.tabOrigin).should('have.text', this.widgets.tabsName[1])
    });

    it('Verify all Tabs names < Widgest', function() {
        cy.get(this.home.widgetsCard).click()
        cy.get(this.widgets.tabsMenuButton).click()
        cy.get(this.widgets.tabsMenu).should('have.length', this.widgets.tabsMenuLength)
        cy.get(this.widgets.tabsMenu).each(($el, idx) => {
            expect($el.text()).to.include(this.widgets.tabsName[idx])
        })
    });

});