/// <reference types="cypress" />

// чтобы словить тултип можно заморозить сайт командой setTimeout(() => {debugger}, 2000)  в консоли
// либо найти в раненре сайпреса селектор тултипа
describe('ToolTips and iFrames', () => {
    it('Tool Tips - 1 - realhover', () => {
        cy.visit('https://demoqa.com/tool-tips')
        cy.get('#buttonToolTip').should('not.be.exist')

        cy.get('#toolTipButton').realHover()

        cy.get('#buttonToolTip').should('be.visible')
        cy.get('.tooltip-inner').should('have.text', 'You hovered over the Button')
    })

    it('Tool Tips - 2 - trigger', () => {
        cy.visit('https://demoqa.com/tool-tips')
        cy.get('#buttonToolTip').should('not.be.exist')

        cy.get('#toolTipButton').trigger('focus')

        cy.get('#buttonToolTip').should('be.visible')
        cy.get('.tooltip-inner').should('have.text', 'You hovered over the Button')
    })

    it('iFraims testing1 - frame 1', () => {
        cy.visit('https://play1.automationcamp.ir/frames.html')
        cy.get('iframe#frame1')
          .its('0.contentDocument')    // считает ВЕСЬ документ внутри айфрейма
          .its('body')
          .find('button#click_me_1')
          .should('contain', 'Click Me 1')
          .click()
          .should('have.text', 'Clicked')
    })

    it('iFraims testing1 - frame 2', () => {
        cy.visit('https://play1.automationcamp.ir/frames.html')
        cy.get('iframe#frame1')
          .its('0.contentDocument')
          .find('iframe#frame2')
          .its('0.contentDocument')
          .its('body')
          .find('button#click_me_2')
          .should('contain', 'Click Me 2')
          .click()
          .should('contain', 'Clicked')
    })

    it.only('Captcha testing - Open Weather', () => {
        cy.visit('https://home.openweathermap.org/users/sign_up')
        cy.get('iframe[title=reCAPTCHA]')
          .its('0.contentDocument')
          .its('body')
          .find('div#rc-anchor-alert')
          .click({force:true})

        cy.get('iframe[title="recaptcha challenge expires in two minutes"]')
          .should('be.visible')
    })
})

//  chromeWebSecurity: false в cypress.config должно стоять обязательно для работы с iframes