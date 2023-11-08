/// <reference types="cypress"/>



describe('vwr', () => {
    beforeEach(function () {
        cy.fixture('vwr').then(data => {
            this.data = data
       })
    });

    it('test1', function() {
        cy.visit('https://us.vwr.com/store/')
        cy.get('nav[class="ancillary-links"] li').should('have.length', 6)   //    $$('nav[class="ancillary-links"] ul li') для поиска в консоли (с одним $ покажет элемент, с $$ элементЫ)
        cy.get('nav[class="ancillary-links"] li').each(($el, idx) => {
            expect($el.text()).to.include(this.data.menuElements[idx])
        })
    });

   
      
})


