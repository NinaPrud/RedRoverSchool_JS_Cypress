/// <reference types="cypress" />

import "cypress-real-events/support"

describe('footer', () => {

    beforeEach(() => {
        cy.visit('https://openweathermap.org/')
    })

    it('AT_028.009 | Footer > About us > Verify the button "Buy in the Marketplace" redirects to the expected page', function () {
        cy.get('a[href="/about-us"]').click()
        cy.get('a[class="btn_block orange round"][href="https://home.openweathermap.org/marketplace"]').click()
        cy.get('#custom_weather_products').should('include.text', 'Custom Weather Products')
            .should('be.visible')

    });

    it('AT_028.009 | Footer > About us > Verify the button "Buy in the Marketplace" redirects to the expected page', function () {
        const aboutAs = 'a[href="/about-us"]'
        const btnBuyMarketplace = 'div.grid-container a[href$="/marketplace"]'
        const pageTitle = '#custom_weather_products'

        cy.get(aboutAs).click()
        cy.get(btnBuyMarketplace).click()

        cy.get(pageTitle).should('include.text', 'Custom Weather Products')
            .should('be.visible')

    });

    it('Video 12 - All linrs have correct color', () => {
        cy.get('div#desktop-menu a[href*=marketplace').invoke('removeAttr', 'target').click()

        cy.get('div.market-place a[href]:not(.button-round)').each(($el, index) => {
            cy.wrap($el).should('have.css', 'color', 'rgb(235, 110, 75)')   // rgb  нужно брать из ДОКУМЕНТОВ (в инспекте может быть не правильно! мы это и проверяем)
        }) // можно метод expect  вместо .should
    });

    it.only('video 12 - Verify SingIn Dropdown Menu', () => {
        // !!! возможно лучше данный тест разбить на несколько зависимых в отдельном дескрайбе????
        const singInMenu = '.user-li a'
        const urlSingInPage = 'https://home.openweathermap.org/users/sign_in'
        const singInForm = 'div.sign-form'
        const singInPageAlertText = 'Sign In To Your Account'
        const emailInput = '.input-group #user_email'
        const passwordInput = '.input-group #user_password'
        const submitBtn = 'input[value="Submit"]'
        const emailData = 'forTestkiu@yandex.ru'
        const passwordData = 'TEST83298'
        const userNameData = 'Vasily'
        const homeUrlPage = 'https://home.openweathermap.org/'
        const usreMenu = '.inner-user-container'
        const userDropdownMenu = '#user-dropdown-menu>li'
        const logOutDropdownMenu = '#user-dropdown-menu a.logout'
        const userDropdownMenuLength = '5'
        const userDropdownMenuData = ['My services', 'My API keys', 'My payments', 'My profile', 'Logout']

        //cy.viewport(1920, 1080)  // если не прописано в cypress.config.js

        cy.get(singInMenu).click()
        cy.url().should('eq', urlSingInPage)
        cy.get(singInForm).should('contain', singInPageAlertText)

        cy.get(emailInput).clear().type(emailData)
        cy.get(passwordInput).clear().type(passwordData)
        cy.get(submitBtn).click()

        cy.url().should('contain', homeUrlPage)
        cy.get(usreMenu).should('contain', userNameData).click()
        cy.get(userDropdownMenu).should('have.length', userDropdownMenuLength).each(($el, i) => {
            //cy.wrap($el).should('contain', userDropdownMenuData[i])
            expect($el.text()).to.include(userDropdownMenuData[i])
        })

        cy.get(logOutDropdownMenu).click()
            cy.url().should('eq', urlSingInPage)
            cy.get(singInForm).should('contain', singInPageAlertText)

    });

    it('video 12_3 - Verify "Search City" input have placeholder', () => {
        const searchCity = '.search input'
        const placeholderText = 'Search city'
        const cityName = 'Minsk'

        cy.get(searchCity)
            .should('have.attr', 'placeholder', placeholderText)
            .and('be.visible')
            .type(cityName)
            .should('be.visible')
    });

    it('video 12_3 - Verify "Search City" input reflects on other page elements', () => {
        const searchCity = '.search input'
        const btnSearch = 'button[type="submit"]'
        const cityName = 'Minsk'
        const searchDropdownMenu = 'ul[class="search-dropdown-menu"]'
        const leftCityConteiner = 'div.current-container'

        cy.get(searchCity).type(cityName)
        cy.get(btnSearch).click()
        cy.get(searchDropdownMenu).should('contain', cityName).click() // ('include.text')
        cy.get(leftCityConteiner).contains(cityName).should('be.visible')
    });

    it('video 12_3 - Verify dropdown menu contain searched city', () => {
        const searchCity = '.search input'
        const btnSearch = 'button[type="submit"]'
        const cityName = 'Minsk'
        const searchDropdownMenu = 'ul[class="search-dropdown-menu"]>li'

        cy.get(searchCity).type(cityName)
        cy.get(btnSearch).click()
        cy.get(searchDropdownMenu).each(($el, index) => {
            cy.wrap($el).should('contain', cityName)
        })
    });

        // ---  к видео 13.1 Стэн -- подключение библиотеки cypress-real-events (для событий real hover, real touch, real click, real press  и др - они отвечают за пользовательские  even-ты)
        //  в cypress  нет метода, который иммитирует  рельность такого событие как hover (подведение мыши пользователя к объекту)
        // для этого надо подключать специальную библиотеку cypress-real-events
        // командой npm i cypress-real-events
        //  но это изменит файлы package-lock.json  и  package.json
        //  надо спрашивать можно ли это делать на проекте
        // потом в каждом файле, где мы захотим пользоваться этой библиотекой надо подключать  import
        // import "cypress-real-events/support"

    it('Video 13_1 - "Allow All" Change button color on hover ', () => {
        const allowAllBtn = 'button.stick-footer-panel__link'

        cy.get(allowAllBtn).should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')  // только в rgb rgba
          .realHover()
        cy.wait(3500)     // выжедаем временя, использ. только если не успевает кнопка подгрузится
        cy.get(allowAllBtn)
          .should('have.css', 'background-color', 'rgb(233, 110, 80)')

          // cy.get(allowAllBtn).should('have.css', 'background-color', 'rgba(0, 0, 0, 0)').realHover().should('have.css', 'background-color', 'rgb(233, 110, 80)')  - при быстрой загрузке сработает и так
    });

    // нестабильный тест, возможно из-за правил округления на сайте (не известно какие они)
    it.only('Video 13_1 - Converting temperature', () => {
        const tempValue = 'span.heading'
        const farengConvBtn = '.switch-container div:last-child'

// без .text() вернет просто локатор 'span.heading', а не текстовое значение температуры        
// без  parseInt()  покажет температуру с С или F ( parseInt() принемает строку возвр целое число)
// Метод Math.ceil() - округление вверх. Округляет аргумент до ближайшего большего целого.

        cy.get(tempValue).then(($data) => {
            const tempC = parseInt($data.text());   // попробовать с parseFloat()
            cy.log(tempC)

            cy.get(farengConvBtn).click().wait(2000).then(() => {
                const tempF = parseInt($data.text())
                cy.log(tempF)

                expect(tempF).to.eq(Math.ceil(9 / 5 * tempC + 32))
            });
        });
    });

});







