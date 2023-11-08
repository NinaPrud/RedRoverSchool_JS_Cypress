/// <reference types="cypress" />

describe('12 video  - invoke(), each(), not(), "have.css"', () => {

    // .invoke('removeAttr', 'target') - открывает окно в той же вкладке(запрет на новую вкладку)
    // .each($el, index) - переберает все элементы в массиве
    // .wrap($el) - оборачивает веб элемент, чтобы обратиться к нему сайпрасом
    // :not - метод селекторов - исключает ненужное из выбранной массы по какому-либо признаку

    it('All linrs have correct color', () => {
        cy.visit('https://openweathermap.org/')
        cy.get('div#desktop-menu a[href*=marketplace').invoke('removeAttr', 'target').click({force:true})

        cy.get('div.market-place a[href]:not(.button-round)').each(($el, index) => {
            cy.wrap($el).should('have.css', 'color', 'rgb(235, 110, 75)')   // rgb  нужно брать из ДОКУМЕНТОВ (в инспекте может быть не правильно! мы это и проверяем)
        }) // можно метод expect  вместо .should
    });

   
});

