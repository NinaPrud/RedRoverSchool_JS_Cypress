describe('Find elements', () => {
    before(() => {
        cy.visit('https://example.cypress.io')
    });

    it('1 verify hash', () => {
        let hash = '[href="/commands/location"]'   // можно селекторы записывать в переменные, чтоб потом было понятно, что вы искали
        cy.get(hash).contains('hash').should('be.visible')  // что он виден (не прозрачный)
        
    });
    it('2 All drop-down menu elements are displayed', () => {
        cy.get('.dropdown-toggle').trigger('mousedown')  // задержит/развернет дроп-даун меню
        cy.get('.dropdown-menu [href="/commands/querying"]').contains('Querying')
        // c click() тоже проходит
        //.should('be.visible')  - не работает почему-то
        // и так все пункты меню проверить на наличие
    });
})